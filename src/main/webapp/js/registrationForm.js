/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





function registrationValidation(x) {
    if (usernameValidation(x.userName.value)) {
        if (firstnameValidation(x.firstName.value)) {
            if (lastnameValidation(x.lastName.value)) {
                if (nicnumberValidation(x.nicNumber.value)) {
                    if (contactnumberValidation(x.contractNumber.value)) {
                        if (validateemail(x.email.value)) {
                            if (confirmvalidateemail(x.confirmemail.value)) {
                                if (x.email.value.trim() === x.confirmemail.value.trim()) {
                                    $('#conrfirmemail_validation').hide();
                                    if (passwordValidation(x.inputPassword.value)) {
                                        if (confirmpasswordFunction(x.confirmpasswordId.value)) {
                                            if (x.inputPassword.value.trim() === x.confirmpasswordId.value.trim()) {
                                                $('#confirmpassword_validation').hide();
                                                if (x.questionList.value !== "-1") {
                                                    $('#question_validation').hide();
                                                    if (securityanswer(x.answer.value.trim())) {
                                                        var confirmMessage = "Are you sure you want to register this account ?";
                                                        if (confirm(confirmMessage) === false)
                                                        {
                                                            return false;
                                                        }
                                                    } else {
                                                        x.answer.focus();
                                                        return false;
                                                    }
                                                } else {
                                                    x.questionList.focus();
                                                    $('#empty_question').show();
                                                    $('#question_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
                                                    return false;

                                                }

                                            } else {
                                                x.inputPassword.focus();
                                                $('#mismatch_password').show();
                                                $('#empty_conpassword').hide();
                                                $('#confirmpassword_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
                                                return false;
                                            }
                                        }
                                        else {
                                            x.confirmpasswordId.focus();
                                            return false;
                                        }
                                    } else {
                                        x.inputPassword.focus();
                                        return false;
                                    }

                                } else {
                                    x.email.focus();
                                    $('#mismatch_mail').show();
                                    $('#empty_confirmemail').hide();
                                    $('#invalid_confirmemail').hide();
                                    $('#conrfirmemail_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
                                    return false;
                                }
                            } else {
                                x.confirmemail.focus();
                                return false;
                            }
                        } else {
                            x.email.focus();
                            return false;
                        }
                    } else {
                        x.contractNumber.focus();
                        return false;
                    }

                } else {
                    x.nicNumber.focus();
                    return false;
                }
            } else {
                x.lastName.focus();
                return false;
            }
        } else {
            x.firstName.focus();
            return false;
        }
    } else {
        x.username.focus();
        return false;
    }
}


function gotResult(t) {
    if (t) {
        $("#userNameExits").show();
        $("#userName").val("");
    } else {
        $("#userNameExits").hide();
    }

}


function usernameValidation(x) {
    var result = false;
    $('#username_validation').hide();
    if (x === "") {
        $('#username').css('border:1px solid red;');
        $('#empty_username').show();
        $('#invalid_username').hide();
        $('#username_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
        //window.alert("Please enter user name.");
    } else {
        $('#empty_username').hide();
        var usernameValidate = /^[a-zA-Z0-9]+$/;
        var spaceValidation = /[\s]/;
        if (x.trim().length < 6 || x.trim().length > 15 || !usernameValidate.test(x) || spaceValidation.test(x)) {
            $('#invalid_username').show();
            $('#username_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
            // window.alert("Username can contain only alphanumerical characters(A-Z, a-z, 0-9) without space,length should be greater than 5 and less than 15 characters.");
            return false;
        } else {
            IsUserNameExis.checkUserNameExists(x.trim(), gotResult);
            result = true;
        }
    }
    return result;
}

function firstnameValidation(x) {
    var result = false;
    $('#firstname_validation').hide();
    if (x === "") {
        $('#firstName').css('border:1px solid red;');
        $('#empty_firstname').show();
        $('#invalid_firstname').hide();
        $('#firstname_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
        // window.alert("Please enter your first name.");
    } else {
        var re = /^[a-zA-Z\s]*$/;
        if (!re.test(x.trim())) {
            $('#firstName').css('border:1px solid red;');
            $('#empty_firstname').hide();
            $('#invalid_firstname').show();
            $('#firstname_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
            // window.alert("Please enter valid first name.");
        } else {
            result = true;
        }

    }
    return result;
}
function lastnameValidation(x) {
    var result = false;
    $('#lastname_validation').hide();
    if (x === "") {
        $('#lastName').css('border:1px solid red;');
        $('#empty_lastname').show();
        $('#invalid_lastname').hide();
        $('#lastname_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
        //window.alert("Please enter your last name.");
    } else {
        var re = /^[a-zA-Z\s]*$/;
        if (!re.test(x.trim())) {
            $('#lastName').css('border:1px solid red;');
            $('#empty_lastname').hide();
            $('#invalid_lastname').show();
            $('#lastname_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
            // window.alert("Please enter valid last name.");
        } else {
            result = true;
        }

    }
    return result;
}

function nicnumberValidation(x) {
    var result = false;
    $('#nic_validation').hide();
    if (x === "") {
        $('#nicNumber').css('border:1px solid red;');
        $('#empty_nic').show();
        $('#invalid_nic').hide();
        $('#nic_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
        //window.alert("Please enter NIC number");
    } else {
        var re = /^[0-9]{9}[V,v,X,x]+$/;
        if (!re.test(x.trim())) {
            $('#nicNumber').css('border:1px solid red;');
            $('#empty_nic').hide();
            $('#invalid_nic').show();
            $('#nic_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
            // window.alert("Please enter valid NIC number");
        } else {
            result = true;
        }
    }

    return result;
}

function contactnumberValidation(x) {
    var result = false;
    $('#contact_validation').hide();
    if (x === "") {
        $('#contractNumber').css('border:1px solid red;');
        $('#empty_contact').show();
        $('#invalid_contact').hide();
        $('#contact_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
        //  window.alert("Please enter your contact no.");
    } else {
        var re = /^[0][1-9][0-9]{8}$/;
        if (!re.test(x.trim())) {
            $('#contractNumber').css('border:1px solid red;');
            $('#empty_contact').hide();
            $('#invalid_contact').show();
            $('#contact_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
            // window.alert("Please enter valid contact No.");
        } else {
            result = true;
        }

    }
    return result;
}

function validateemail(x) {
    var result = false;
    $('#email_validation').hide();
    if (x === "") {
        $('#email').css('border:1px solid red;');
        $('#empty_email').show();
        $('#invalid_email').hide();
        $('#email_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
        // window.alert("Please enter your E-mail address.");
    } else {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(x.trim())) {
            $('#email').css('border:1px solid red;');
            $('#empty_email').hide();
            $('#invalid_email').show();
            $('#email_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
            // window.alert("Please enter valid E-mail address.");
        } else {
            result = true;
        }

    }
    return result;
}

function confirmvalidateemail(x) {
    var result = false;
    $('#conrfirmemail_validation').hide();
    if (x === "") {
        $('#confirmemail').css('border:1px solid red;');
        $('#empty_confirmemail').show();
        $('#invalid_confirmemail').hide();
        $('#mismatch_mail').hide();

        $('#conrfirmemail_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
        // window.alert("Please confirm your E-mail address.");
    } else {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(x.trim())) {
            $('#confirmemail').css('border:1px solid red;');
            $('#empty_confirmemail').hide();
            $('#mismatch_mail').hide();
            $('#invalid_confirmemail').show();
            $('#conrfirmemail_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
            // window.alert("Please enter valid E-mail address.");
        } else {
            if ($('#email').val().trim() === $('#confirmemail').val().trim()) {
                $('#conrfirmemail_validation').hide();
                result = true;
            } else {
                $('#confirmemail').css('border:1px solid red;');
                $('#empty_confirmemail').hide();
                $('#mismatch_mail').show();
                $('#invalid_confirmemail').hide();
                $('#conrfirmemail_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
            }

        }

    }
    return result;
}

function passwordValidation(x) {
    var result = false;
    $('#password_validation').hide();
    if (x === "") {
        $('#inputPassword').css('border:1px solid red;');
        $('#empty_password').show();
        $('#invalid_password').hide();
        $('#password_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
        //window.alert("Please enter your password .");
    } else {
        var re = /[0-9]/;
        var reletter = /[a-z]/;
        var reCapitalLetters = /[A-Z]/;
        var spaceValidation = /[\s]/;
        if (x.trim().length < 6 || x.trim().length > 18 || !re.test(x.trim()) || !reletter.test(x.trim()) || !reCapitalLetters.test(x.trim()) || spaceValidation.test(x)) {
            $('#inputPassword').css('border:1px solid red;');
            $('#empty_password').hide();
            $('#invalid_password').show();
            $('#password_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
            // window.alert("Passwords must contain at least 6 but not exceed 18 characters, including uppercase, lowercase letters and numbers without space.");
            return false;
        } else {
            result = true;
        }
    }
    return result;
}

function confirmpasswordFunction(x) {
    var result = false;
    $('#confirmpassword_validation').hide();
    if (x === "") {
        // $('#confirmpasswordFunction').css('border:1px solid red;');
        $('#empty_conpassword').show();
        $('#mismatch_password').hide();
        $('#confirmpassword_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
        //  window.alert("Please confirm your password .");

    } else {
        if ($('#inputPassword').val().trim() === $('#confirmpasswordId').val().trim()) {
            $('#confirmpassword_validation').hide();
            result = true;
        } else {
            $('#empty_conpassword').hide();
            $('#mismatch_password').show();
            $('#confirmpassword_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
        }
    }
    return result;
}

function securityanswer(x) {
    var result = false;
    $('#securityanswer_validation').hide();
    if (x.trim() === "") {
        $('#answer').css('border:1px solid red;');
        $('#empty_answers').show();
        $('#securityanswer_validation').show().css('visibility: visible;opacity: 1;transition: opacity 2s linear;');
        //window.alert("Please enter your security answer.");
    } else {
        result = true;
    }
    return result;
}