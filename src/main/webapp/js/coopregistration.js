/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function coopregistrationConfirmation(x) {
    if (accountnumber(x.accountNumber.value)) {
        if (contactnumber(x.contractNumber.value)) {
            if (companyName(x.comName.value)) {
                if (customerName(x.customerName.value)) {
                    if (validateemail(x.email.value)) {
                        if (confirmvalidateemail(x.confirmemail.value)) {
                            if (password(x.inputPassword.value)) {
                                if (confirmpassword(x.confirmpassword.value)) {
                                    if (securityanswer(x.answer.value)) {
                                        var confirmMessage = "Are you sure to register this account ?";

                                        if (confirm(confirmMessage) === false)
                                        {
                                            return false;
                                        }
                                    } else {
                                        return false;
                                    }
                                } else {
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }

        } else {
            return false;
        }
    } else {
        return false;
    }


}


function accountnumber(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter a account number.");
    } else {
        var re = /^[0-9]+$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter a valid account number.");
        } else {
            result = true;
        }

    }
    return result;
}

function contactnumber(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter a contact number.");
    } else {
        var re = /^[0][1-9][0-9]{8}$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter a valid contact number.");
        } else {
            result = true;
        }

    }
    return result;
}
function companyName(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter a valid company name field.");
    } else {
        result = true;
    }
    return result;
}

function customerName(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter a customer name.");
    } else {
        var re = /^[a-zA-Z]+$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter a valid customer name.");
        } else {
            result = true;
        }

    }
    return result;
}
function validateemail(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter a e-mail.");
    } else {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter a valid e-mail.");
        } else {
            result = true;
        }

    }
    return result;
}
function confirmvalidateemail(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter a confirm e-mail.");
    } else {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter a valid confirm e-mail.");
        } else {
            result = true;
        }

    }
    return result;
}

function password(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter a password field.");
    } else {
        result = true;
    }
    return result;
}
function confirmpassword(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter a confirm password field.");
    } else {
        result = true;
    }
    return result;
}

function securityanswer(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter a answer field.");
    } else {
        result = true;
    }
    return result;
}


function resetForm() {

    $('#accountNumber').attr('value', "");
    $('#contractNumber').attr('value', "");
    $('#comName').attr('value', "");
    $('#customerName').attr('value', "");
    $('#email').attr('value', "");
    $('#confirmemail').attr('value', "");
    $('#inputPassword').attr('value', "");
    $('#confirmpassword').attr('value', "");
    $('#answer').attr('value', "");


    $('#invalidAccountNumber').attr('value', "");
    $('#invalidContratNumber').attr('value', "");
    $('#invalidCompanyName').attr('value', "");
    $('#invalidcustomername').attr('value', "");
    $('#invalidEmail').attr('value', "");
    $('#invalidConfirmEmail').attr('value', "");
    $('#invalidPassword').attr('value', "");
    $('#invalidCocfirmPassword').attr('value', "");
    $('#invalidAnswear').attr('value', "");

}
