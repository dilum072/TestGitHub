/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validatepasswordchange(x) {
    if (password(x.newPassword.value)) {
        if (confirmpassword(x.confirmPassword.value)) {
            if (x.newPassword.value.trim() === x.confirmPassword.value.trim()) {
                var confirmMessage = "Are you sure you want to change your password?";
                if (confirm(confirmMessage) === false)
                {
                    return false;
                }
            } else {
                window.alert("Password mismatch has been detected.");
                return false;
            }
        } else {
            x.confirmPassword.focus();
            return false;
        }
    } else {
        x.newPassword.focus();
        return false;
    }

}

function password(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter password field.");

    } else {
        var re = /[0-9]/;
        var reletter = /[a-z]/;
        var reCapitalLetters = /[A-Z]/;
        var spaceValidation = /[\s]/;
        if (x.trim().length < 6 || x.trim().length > 18 || !re.test(x.trim()) || !reletter.test(x.trim()) || !reCapitalLetters.test(x.trim()) || spaceValidation.test(x)) {
            window.alert("Passwords must contain at least 6 but not exceed 18 characters, including uppercase, lowercase letters and numbers without space.");
            return false;
        } else {
            result = true;
        }
    }
    return result;
}
function confirmpassword(x) {
    var result = false;
    if (x === "") {
        window.alert("Please confirm your password");

    } else {
        result = true;
    }
    return result;
}

////reset password
function resetpassword(x) {
    if (!username(x.userId.value)) {
        return false;
    }
}

function securityanswer(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter answer field.");
    } else {
        result = true;
    }
    return result;
}
function username(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter user name field.");
    } else {
        result = true;
    }

    return result;
}
////reset password
///security answers validation
function answersValidation(x) {
    if (!securityanswer(x.answer.value)) {
        return false;
    }


}
///security answers validation
//add primary number
function addprimarynumber(x) {
    if (moblenumbervalidation(x.mobileNumber.value)) {
        var confirmMessage = "Are you sure you want to add this mobile ?";
        if (confirm(confirmMessage) === false)
        {
            return false;
        }
    } else {
        return false;
    }
}

function moblenumbervalidation(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter mobile number.");
    } else {
        var re = /^[0][7][0-1][0-9]{7}$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter valid mobile number.");
        } else {
            result = true;
        }

    }
    return result;

}
//add primary

//verify account
function verifyaccount(x) {
    if (verifynumber(x.verifyNumber.value)) {
        var confirmMessage = "Are you sure you want to verify this account ?";
        if (confirm(confirmMessage) === false)
        {
            return false;
        }
    } else {
        return false;
    }

}
function verifynumber(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter verify number.");
    } else {
        var re = /^[0-9]+$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter valid verify number.");
        } else {
            result = true;
        }

    }
    return result;

}
//verify account 


//verify primary number
function primarynumberverify(x) {
    if (primobileverify(x.verifyNumber.value)) {
        var confirmMessage = "Are you sure you want to verify this mobile number?";
        if (confirm(confirmMessage) === false)
        {
            return false;
        }
    } else {
        return false;
    }
}
function primobileverify(x) {
    var result = false;
    if (x === "") {
        window.alert("Verification code cannot be empty");
    } else {
        var re = /^[0-9]+$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter valid verify number.");
        } else {
            result = true;
        }

    }
    return result;
}
// verify primary number 

//delete account 
function removenumber(x) {
    if (moblenumbervalidation(x.mobileNo.value)) {
        var confirmMessage = "Are you sure you want to remove this number?";
        if (confirm(confirmMessage) === false)
        {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}


//delete account


//change password 
function changepasswordaccountsetting(x) {
    if (oldpassword(x.oldPassword.value)) {
        if (newpassword(x.newPassword.value)) {
            if (confirmpassword(x.confirmPassword.value)) {
                if (x.newPassword.value.trim() === x.confirmPassword.value.trim()) {
                    var confirmMessage = "Are you sure you want to change your password ?";
                    if (confirm(confirmMessage) === false)
                    {
                        return false;
                    }
                } else {
                    window.alert("A password mismatch has been detected.");
                    return false;
                }
            } else {
                x.confirmPassword.focus();
                return false;
            }
        } else {
            x.newPassword.focus();
            return false;
        }
    } else {
        x.oldPassword.focus();
        return false;
    }

}

function oldpassword(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter current password.");

    } else {
        result = true;
    }
    return result;

}
function newpassword(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter new password.");

    } else {
        var re = /[0-9]/;
        var reletter = /[a-z]/;
        var reCapitalLetters = /[A-Z]/;
        var spaceValidation = /[\s]/;
        if (x.trim().length < 6 || x.trim().length > 18 || !re.test(x.trim()) || !reletter.test(x.trim()) || !reCapitalLetters.test(x.trim()) || spaceValidation.test(x)) {
            window.alert("Passwords must contain at least 6 but not exceed 18 characters, including uppercase, lowercase letters and numbers without space.");
            return false;
        } else {
            result = true;
        }
        //else {
//            re = /[0-9]/;
//            if (!re.test(x.trim())) {
//                alert("Password must contain at least one number (0-9).");
//                return false;
//            } else {
//                result = true;
//            }
//            re = /[a-z]/;
//            if (!re.test(x.trim())) {
//                alert("Password must contain at least one lowercase letter (a-z).");
//                return false;
//            }
//            else {
//                result = true;
//            }
//            re = /[A-Z]/;
//            if (!re.test(x.trim())) {
//                alert("Password must contain at least one uppercase letter (A-Z).");
//                return false;
//
//            } else {
//                result = true;
//            }
//
//        }

    }
    return result;
}



function onlyNumbers(evt)
{
    var e = (window.event) ? event : evt; // for cross browser compatibility
    var charCode = e.which || e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function passwordReset() {
    document.getElementById("chg_pass_error").innerHTML = "";
    document.getElementById("chg_pass_success").innerHTML = "";

}

function resetSecurityAnswerForm() {
    $('#errormessage').html("");
    $('#successmessage').html("");

}

function confirmpassword(x) {
    var result = false;
    if (x === "") {
        window.alert("Please confirm your password.");

    } else {
        result = true;
    }
    return result;

}
//change password

