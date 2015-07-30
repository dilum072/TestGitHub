/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mobitel.action;

import com.mobitel.common.UserInfoDao;
import com.mobitel.db.Services.DbServices;
import com.mobitel.selfcare.user.SecurityQuestion;
import com.mobitel.selfcare.user.UserProfileRequest;
import com.mobitel.selfcare.user.UserProfileResponse;
import com.mobitel.webmethod.WebServiceMethod;
import com.opensymphony.xwork2.ActionSupport;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.codec.binary.Base64;
import org.apache.struts2.ServletActionContext;

/**
 *
 * @author manjulas
 */
public class GetDefaultInformationAction extends ActionSupport {

    private static final long serialVersionUID = 1L;
    private WebServiceMethod webserviceMethodobj;
    private String userName;
    private String salutation;
    private String firstName;
    private String lastName;
    private String nicNumber;
    private String contractNumber;
    private String email;
    private String confirmemail;
    private String language;
    private String birthday;
    private String inputPassword;
    private String confirmpassword;
    private String question;
    private String answer;
    private List<String> questionList;
    private String commoMessage;
    private String mobile_number;
    private String failed_NextPage;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getSalutation() {
        return salutation;
    }

    public void setSalutation(String salutation) {
        this.salutation = salutation;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getNicNumber() {
        return nicNumber;
    }

    public void setNicNumber(String nicNumber) {
        this.nicNumber = nicNumber;
    }

    public String getContractNumber() {
        return contractNumber;
    }

    public void setContractNumber(String contractNumber) {
        this.contractNumber = contractNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getConfirmemail() {
        return confirmemail;
    }

    public void setConfirmemail(String confirmemail) {
        this.confirmemail = confirmemail;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getInputPassword() {
        return inputPassword;
    }

    public void setInputPassword(String inputPassword) {
        this.inputPassword = inputPassword;
    }

    public String getConfirmpassword() {
        return confirmpassword;
    }

    public void setConfirmpassword(String confirmpassword) {
        this.confirmpassword = confirmpassword;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public List<String> getQuestionList() {
        return questionList;
    }

    public void setQuestionList(List<String> questionList) {
        this.questionList = questionList;
    }

    public String getCommoMessage() {
        return commoMessage;
    }

    public void setCommoMessage(String commoMessage) {
        this.commoMessage = commoMessage;
    }

    public String getMobile_number() {
        return mobile_number;
    }

    public void setMobile_number(String mobile_number) {
        this.mobile_number = mobile_number;
    }

    public String getFailed_NextPage() {
        return failed_NextPage;
    }

    public void setFailed_NextPage(String failed_NextPage) {
        this.failed_NextPage = failed_NextPage;
    }

    @Override
    public String execute() throws Exception {
        return super.execute(); //To change body of generated methods, choose Tools | Templates.
    }

    public GetDefaultInformationAction() {
        String paramValue = ServletActionContext.getRequest().getParameter("paramName");
        if (paramValue != null) {
            byte[] valueDecoded = Base64.decodeBase64(paramValue);
            paramValue = new String(valueDecoded);
            mobile_number = paramValue;
            try {
                if (answer == null) {
                    webserviceMethodobj = new WebServiceMethod();
                    List<SecurityQuestion> questions = webserviceMethodobj.listSecurityQuestions();
                    questionList = new ArrayList<String>();
                    for (int i = 0; i < questions.size(); i++) {
                        questionList.add(questions.get(i).getQuestion());
                    }
                }
                DbServices dbObj = new DbServices();
                UserInfoDao info = dbObj.getUserInformation(paramValue);
                userName = info.getUserId();
                firstName = info.getFname();
                salutation = info.getSalutation();
                lastName = info.getLname();
                nicNumber = info.getNic();
                contractNumber = info.getContactNumber();
                email = info.getEmail();
                language = info.getLanguage();
            } catch (Exception e) {
                //log.info("Security questoion rendering issue " + e);
            }
        }
    }

    public String display() {
        return NONE;
    }

    public String register_user() {
        String success = null;
        try {
            UserProfileRequest user = new UserProfileRequest();
            user.setUserId(userName);
            user.setSaluation(salutation);
            user.setFirstName(firstName);
            user.setLastName(lastName);
            user.setNicOrPassport(nicNumber);
            user.setLandNumber(contractNumber);
            user.setEmail(email);
            try {
                if (language.equals("1")) {
                    language = "Sinhala";
                } else if (language.equals("2")) {
                    language = "Tamil";
                } else if (language.equals("3")) {
                    language = "English";
                }
            } catch (NullPointerException e) {
                language = "Sinhala";
                System.out.println("language selection issue" + e);
            }
            user.setLanguagePref(language);
            user.setPassword(inputPassword);
            user.setVerificationMethod(1);
            SecurityQuestion newRqe = new SecurityQuestion();
            newRqe.setQuestion(question);
            newRqe.setAnswer(answer);
            user.setSecurityQuestion(newRqe);
            webserviceMethodobj = new WebServiceMethod();
            UserProfileResponse response = webserviceMethodobj.registerAccount(user);
            if (response.getStatus() == 2000) {
                UserProfileResponse status = webserviceMethodobj.addNumber(userName, mobile_number);
                if (status.getStatus() == 2003) {
                    String actCode = webserviceMethodobj.getActivationCodesForMobile(mobile_number);
                    UserProfileResponse mobileVerufySuccess = webserviceMethodobj.addNumberVerify(userName, actCode, mobile_number);
                    if (mobileVerufySuccess.getStatus() == 2004) {
                        success = "SUCCESS";
                    } else {
                        webserviceMethodobj.deleteUser(userName);
                        commoMessage = "User Registration Failed.";
                        byte[] bytesEncoded = Base64.encodeBase64((mobile_number).getBytes());
                        String mobile = new String(bytesEncoded);
                        failed_NextPage = "https://apps.mobitel.lk/AccountMigration/accountmigrationsystemerror.action?paramName=" + mobile;
                        success = "FAILED";
                    }
                } else {
                    webserviceMethodobj.deleteUser(userName);
                    commoMessage = "User Registration Failed.";
                    byte[] bytesEncoded = Base64.encodeBase64((mobile_number).getBytes());
                    String mobile = new String(bytesEncoded);
                    failed_NextPage = "https://apps.mobitel.lk/AccountMigration/accountmigrationsystemerror.action?paramName=" + mobile;
                    success = "FAILED";
                }

            } else {
                System.out.println(response.getStatus() + " ===" + response.getStatusDescription());
                commoMessage = response.getStatusDescription();
                byte[] bytesEncoded = Base64.encodeBase64((mobile_number).getBytes());
                String mobile = new String(bytesEncoded);
                failed_NextPage = "https://apps.mobitel.lk/AccountMigration/accountmigrationsystemerror.action?paramName=" + mobile;
                success = "FAILED";
            }
        } catch (Exception e) {
            System.out.println("account migration class error " + e);
            byte[] bytesEncoded = Base64.encodeBase64((mobile_number).getBytes());
            String mobile = new String(bytesEncoded);
            failed_NextPage = "https://apps.mobitel.lk/AccountMigration/accountmigrationsystemerror.action?paramName=" + mobile;
            success = "FAILED";
        }
        return success;
    }

}
