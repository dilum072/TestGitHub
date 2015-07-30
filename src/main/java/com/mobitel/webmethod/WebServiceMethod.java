/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mobitel.webmethod;

import com.mobitel.selfcare.user.AccountVerify;
import com.mobitel.selfcare.user.AccountVerifyE;
import com.mobitel.selfcare.user.AddNumber;
import com.mobitel.selfcare.user.AddNumberE;
import com.mobitel.selfcare.user.AddNumberVerify;
import com.mobitel.selfcare.user.AddNumberVerifyE;
import com.mobitel.selfcare.user.AuthenticateUser;
import com.mobitel.selfcare.user.AuthenticateUserE;
import com.mobitel.selfcare.user.ChangePassword;
import com.mobitel.selfcare.user.ChangePasswordE;
import com.mobitel.selfcare.user.DeleteUser;
import com.mobitel.selfcare.user.DeleteUserE;
import com.mobitel.selfcare.user.DeleteUserRequest;
import com.mobitel.selfcare.user.FindUserNameForMoblieNumber;
import com.mobitel.selfcare.user.FindUserNameForMoblieNumberE;
import com.mobitel.selfcare.user.GetSecurityQuestionForUser;
import com.mobitel.selfcare.user.GetSecurityQuestionForUserE;
import com.mobitel.selfcare.user.GetUser;
import com.mobitel.selfcare.user.GetUserE;
import com.mobitel.selfcare.user.GetVerificationCodeForMobileNumber;
import com.mobitel.selfcare.user.GetVerificationCodeForMobileNumberE;
import com.mobitel.selfcare.user.IsAccVerified;
import com.mobitel.selfcare.user.IsAccVerifiedE;
import com.mobitel.selfcare.user.ListMobileNumbersForUser;
import com.mobitel.selfcare.user.ListMobileNumbersForUserE;
import com.mobitel.selfcare.user.ListSecurityQuestions;
import com.mobitel.selfcare.user.ListSecurityQuestionsE;
import com.mobitel.selfcare.user.LoginRequest;
import com.mobitel.selfcare.user.LoginResponse;
import com.mobitel.selfcare.user.RegisterAccount;
import com.mobitel.selfcare.user.RegisterAccountE;
import com.mobitel.selfcare.user.RemoveNumber;
import com.mobitel.selfcare.user.RemoveNumberE;
import com.mobitel.selfcare.user.RemoveNumberFromAccountRequest;
import com.mobitel.selfcare.user.ResendAccVerificationCode;
import com.mobitel.selfcare.user.ResendAccVerificationCodeE;
import com.mobitel.selfcare.user.ResendVerificationCode;
import com.mobitel.selfcare.user.ResendVerificationCodeE;
import com.mobitel.selfcare.user.ResetPassword;
import com.mobitel.selfcare.user.ResetPasswordE;
import com.mobitel.selfcare.user.ResetPasswordRequest;
import com.mobitel.selfcare.user.SecurityQuestion;
import com.mobitel.selfcare.user.SendForgotPasswordVerificationCode;
import com.mobitel.selfcare.user.SendForgotPasswordVerificationCodeE;
import com.mobitel.selfcare.user.UserStub;
import com.mobitel.selfcare.user.UpdateAccount;
import com.mobitel.selfcare.user.UpdateAccountE;
import com.mobitel.selfcare.user.UserDetails;
import com.mobitel.selfcare.user.UserProfileRequest;
import com.mobitel.selfcare.user.UserProfileResponse;
import com.mobitel.selfcare.user.VerifyForgotPasswordVerificationCode;
import com.mobitel.selfcare.user.VerifyForgotPasswordVerificationCodeE;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.Arrays;
import org.apache.axis2.AxisFault;
import java.util.List;
import java.util.logging.Level;
import org.apache.log4j.Logger;

/**
 *
 * @author manjulas
 */
public class WebServiceMethod {
//by manjula

    private static final Logger log = Logger.getLogger(WebServiceMethod.class);

    public UserProfileResponse addNumber(java.lang.String userId, java.lang.String mobile) {
        UserProfileResponse userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            AddNumber addNumber = new AddNumber();
            addNumber.setMobile(mobile);
            addNumber.setUserId(userId);
            AddNumberE addNumbere = new AddNumberE();
            addNumbere.setAddNumber(addNumber);
            userResponse = selfRegStub.addNumber(addNumbere).getAddNumberResponse().get_return();
        } catch (Exception e) {
            System.out.println("Error in add number web method  " + e);
        }
        return userResponse;
    }
//by manjula

    public UserProfileResponse addNumberVerify(java.lang.String userId, java.lang.String verificationCode, java.lang.String mobileNumber) {
        UserProfileResponse userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            AddNumberVerify addnumberverify = new AddNumberVerify();
            addnumberverify.setMobileNumber(mobileNumber);
            addnumberverify.setUserId(userId);
            addnumberverify.setVerificationCode(verificationCode);
            AddNumberVerifyE addnumberveritye = new AddNumberVerifyE();
            addnumberveritye.setAddNumberVerify(addnumberverify);
            userResponse = selfRegStub.addNumberVerify(addnumberveritye).getAddNumberVerifyResponse().get_return();
        } catch (Exception e) {
            System.out.println("Error in mobile verify web method");
        }
        return userResponse;
    }
//by manjula

    public UserProfileResponse removeNumber(java.lang.String userName, java.lang.String mobileNumber) {
        UserProfileResponse userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            RemoveNumber removenumber = new RemoveNumber();
            RemoveNumberFromAccountRequest rnfar = new RemoveNumberFromAccountRequest();
            rnfar.setMobileNumber(mobileNumber);
            rnfar.setUserId(userName);
            rnfar.setRequestedBy("Web User");
            removenumber.setRemoveNumber(rnfar);
            RemoveNumberE removenumbere = new RemoveNumberE();
            removenumbere.setRemoveNumber(removenumber);
            userResponse = selfRegStub.removeNumber(removenumbere).getRemoveNumberResponse().get_return();
        } catch (Exception e) {
            System.out.println("Error in remove number " + e);
        }
        return userResponse;
    }

//by manjula
    public UserProfileResponse deleteUser(java.lang.String userId) {
        UserProfileResponse userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            DeleteUser delUser = new DeleteUser();
            DeleteUserRequest delUserobj = new DeleteUserRequest();
            delUserobj.setRequestBy("Web User");
            delUserobj.setUserId(userId);
            delUser.setDeleteUser(delUserobj);
            DeleteUserE delUsere = new DeleteUserE();
            delUsere.setDeleteUser(delUser);
            userResponse = selfRegStub.deleteUser(delUsere).getDeleteUserResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;
    }
//by manjula

    public UserProfileResponse changePassword(java.lang.String userId, java.lang.String oldPassword, java.lang.String newPassword) {
        UserProfileResponse userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            ChangePassword cngPass = new ChangePassword();
            cngPass.setUserId(userId);
            cngPass.setOldPassword(oldPassword);
            cngPass.setNewPassword(newPassword);
            ChangePasswordE cngPasse = new ChangePasswordE();
            cngPasse.setChangePassword(cngPass);
            userResponse = selfRegStub.changePassword(cngPasse).getChangePasswordResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;
    }
//by manjula

    public UserProfileResponse registerAccount(UserProfileRequest user) {
        UserProfileResponse userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            RegisterAccount regUser = new RegisterAccount();
            regUser.setUser(user);
            RegisterAccountE regUserE = new RegisterAccountE();
            regUserE.setRegisterAccount(regUser);
            userResponse = selfRegStub.registerAccount(regUserE).getRegisterAccountResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;
    }

    public boolean isAccVerified(java.lang.String userName) {
        boolean isVerifyAccount = false;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            IsAccVerified veyUser = new IsAccVerified();
            veyUser.setUserName(userName);
            IsAccVerifiedE veyUserE = new IsAccVerifiedE();
            veyUserE.setIsAccVerified(veyUser);
            isVerifyAccount = selfRegStub.isAccVerified(veyUserE).getIsAccVerifiedResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return isVerifyAccount;
    }
// by manjula

    public UserProfileResponse accountVerify(java.lang.String userId, java.lang.String verificationCode) {
        UserProfileResponse userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            AccountVerify accVerify = new AccountVerify();
            accVerify.setUserId(userId);
            accVerify.setVerificationCode(verificationCode);
            AccountVerifyE accVerifyE = new AccountVerifyE();
            accVerifyE.setAccountVerify(accVerify);
            userResponse = selfRegStub.accountVerify(accVerifyE).getAccountVerifyResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;
    }

    public LoginResponse authenticateUser(LoginRequest loginCredintials) {
        LoginResponse logresponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            AuthenticateUser autUser = new AuthenticateUser();
            autUser.setLoginCredintials(loginCredintials);
            AuthenticateUserE autUserE = new AuthenticateUserE();
            autUserE.setAuthenticateUser(autUser);
            logresponse = selfRegStub.authenticateUser(autUserE).getAuthenticateUserResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return logresponse;
    }
// by manjula

    public LoginResponse listMobileNumbersForUser(java.lang.String userId) {
        LoginResponse logresponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            ListMobileNumbersForUser listMibileForUser = new ListMobileNumbersForUser();
            listMibileForUser.setUserId(userId);
            ListMobileNumbersForUserE listMibileForUserE = new ListMobileNumbersForUserE();
            listMibileForUserE.setListMobileNumbersForUser(listMibileForUser);
            logresponse = selfRegStub.listMobileNumbersForUser(listMibileForUserE).getListMobileNumbersForUserResponse().get_return();

        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return logresponse;
    }
// by manjula

    public java.util.List<SecurityQuestion> listSecurityQuestions() {
        List<SecurityQuestion> userResponse = new ArrayList<SecurityQuestion>();
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            ListSecurityQuestions listQuestion = new ListSecurityQuestions();
            ListSecurityQuestionsE questionListe = new ListSecurityQuestionsE();
            questionListe.setListSecurityQuestions(listQuestion);
            SecurityQuestion[] dataObj = selfRegStub.listSecurityQuestions(questionListe).getListSecurityQuestionsResponse().get_return();
            if (dataObj != null && dataObj.length > 0) {
                for (int i = 0; i < dataObj.length; i++) {
                    userResponse.add(dataObj[i]);
                }
            }
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;

    }
// by manjula

    public UserProfileResponse updateAccount(UserProfileRequest user) {
        UserProfileResponse userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            UpdateAccount updateAccount = new UpdateAccount();
            updateAccount.setUser(user);
            UpdateAccountE upAccount = new UpdateAccountE();
            upAccount.setUpdateAccount(updateAccount);
            userResponse = selfRegStub.updateAccount(upAccount).getUpdateAccountResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;
    }
// by manjula

// by manjula
    public UserDetails getUser(java.lang.String userId) {
        UserDetails userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            GetUser gUser = new GetUser();
            gUser.setUserId(userId);
            GetUserE gUsere = new GetUserE();
            gUsere.setGetUser(gUser);
            userResponse = selfRegStub.getUser(gUsere).getGetUserResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;
    }
// by manjula

    public UserProfileResponse resendAccVerificationCode(java.lang.String userName, int verificationMethod) {
        UserProfileResponse userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            ResendAccVerificationCode reSendVerifyCode = new ResendAccVerificationCode();
            reSendVerifyCode.setUserName(userName);
            reSendVerifyCode.setVerificationMethod(verificationMethod);
            ResendAccVerificationCodeE reSendVerifyCodeE = new ResendAccVerificationCodeE();
            reSendVerifyCodeE.setResendAccVerificationCode(reSendVerifyCode);
            userResponse = selfRegStub.resendAccVerificationCode(reSendVerifyCodeE).getResendAccVerificationCodeResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;
    }

    public SecurityQuestion getSecurityQuestionForUser(java.lang.String userId) {
        SecurityQuestion userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            GetSecurityQuestionForUser getSeuForUser = new GetSecurityQuestionForUser();
            getSeuForUser.setUserId(userId);
            GetSecurityQuestionForUserE getSeuForUserE = new GetSecurityQuestionForUserE();
            getSeuForUserE.setGetSecurityQuestionForUser(getSeuForUser);
            userResponse = selfRegStub.getSecurityQuestionForUser(getSeuForUserE).getGetSecurityQuestionForUserResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;

    }

    public boolean resetPassword(java.lang.String userName, java.lang.String newPassword) {
        boolean resetPass = false;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            ResetPassword resetUser = new ResetPassword();
            ResetPasswordRequest reSetNewObj = new ResetPasswordRequest();
            reSetNewObj.setNewPassword(newPassword);
            reSetNewObj.setRequestedBy("Web User");
            reSetNewObj.setUserId(userName);
            resetUser.setResetPassword(reSetNewObj);
            ResetPasswordE resetUserE = new ResetPasswordE();
            resetUserE.setResetPassword(resetUser);
            resetPass = selfRegStub.resetPassword(resetUserE).getResetPasswordResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return resetPass;
    }

    public UserProfileResponse resendVerificationCode(java.lang.String userName, java.lang.String mobileNumber) {

        UserProfileResponse userResponse = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            ResendVerificationCode reSendVerifyCode = new ResendVerificationCode();
            reSendVerifyCode.setUserName(userName);
            reSendVerifyCode.setMobileNumber(mobileNumber);
            ResendVerificationCodeE reSendVerifyCodeE = new ResendVerificationCodeE();
            reSendVerifyCodeE.setResendVerificationCode(reSendVerifyCode);
            userResponse = selfRegStub.resendVerificationCode(reSendVerifyCodeE).getResendVerificationCodeResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;
    }

    public boolean isCheckvalidUserForPassWordReset(java.lang.String userId, java.lang.String shortCode) {
        boolean userResponse = false;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            VerifyForgotPasswordVerificationCode verifyResetPassword = new VerifyForgotPasswordVerificationCode();
            verifyResetPassword.setUserId(userId);
            verifyResetPassword.setShortCode(shortCode);
            VerifyForgotPasswordVerificationCodeE verifyResetPassworde = new VerifyForgotPasswordVerificationCodeE();
            verifyResetPassworde.setVerifyForgotPasswordVerificationCode(verifyResetPassword);
            userResponse = selfRegStub.verifyForgotPasswordVerificationCode(verifyResetPassworde).getVerifyForgotPasswordVerificationCodeResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;
    }

    public boolean sendResetPassWordVerifyCode(java.lang.String userId) {
        boolean userResponse = false;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            SendForgotPasswordVerificationCode verifyCode = new SendForgotPasswordVerificationCode();
            verifyCode.setUserId(userId);
            SendForgotPasswordVerificationCodeE verifyCodeObj = new SendForgotPasswordVerificationCodeE();
            verifyCodeObj.setSendForgotPasswordVerificationCode(verifyCode);
            userResponse = selfRegStub.sendForgotPasswordVerificationCode(verifyCodeObj).getSendForgotPasswordVerificationCodeResponse().get_return();
        } catch (AxisFault ex) {
            log.error(ex);
        } catch (RemoteException ex) {
            log.error(ex);
        }
        return userResponse;
    }

    public String getUserNameForMobileNumber(java.lang.String mobileNumber) {
        String userResponce = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            FindUserNameForMoblieNumber usrName = new FindUserNameForMoblieNumber();
            usrName.setMobile(mobileNumber);
            FindUserNameForMoblieNumberE useNameObj = new FindUserNameForMoblieNumberE();
            useNameObj.setFindUserNameForMoblieNumber(usrName);
            userResponce = selfRegStub.findUserNameForMoblieNumber(useNameObj).getFindUserNameForMoblieNumberResponse().get_return();
        } catch (AxisFault ex) {
            java.util.logging.Logger.getLogger(WebServiceMethod.class.getName()).log(Level.SEVERE, null, ex);
        } catch (RemoteException ex) {
            java.util.logging.Logger.getLogger(WebServiceMethod.class.getName()).log(Level.SEVERE, null, ex);
        }
        return userResponce;
    }

    public String getActivationCodesForMobile(java.lang.String mobileNumber) {
        String actCode = null;
        try {
            UserStub selfRegStub = new UserStub();
            selfRegStub._getServiceClient().getOptions().setTimeOutInMilliSeconds(60000);
            GetVerificationCodeForMobileNumber act = new GetVerificationCodeForMobileNumber();
            act.setMobile(mobileNumber);
            GetVerificationCodeForMobileNumberE actObj = new GetVerificationCodeForMobileNumberE();
            actObj.setGetVerificationCodeForMobileNumber(act);
            actCode = selfRegStub.getVerificationCodeForMobileNumber(actObj).getGetVerificationCodeForMobileNumberResponse().get_return();
        } catch (AxisFault ex) {
            java.util.logging.Logger.getLogger(WebServiceMethod.class.getName()).log(Level.SEVERE, null, ex);
        } catch (RemoteException ex) {
            java.util.logging.Logger.getLogger(WebServiceMethod.class.getName()).log(Level.SEVERE, null, ex);
        }
        return actCode;
    }

}
