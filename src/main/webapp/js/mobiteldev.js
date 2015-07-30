/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * @author manjulas
 */


var mobileNumber;
var xmlHttpUInfo;
var addressLine1;
var addressLine2;
var addressLine3;
var disCode;
var city;
var saluation;
var fname;
var lname;
var email;
var contactNo;
function GetXmlHttpObject() {
    var xmlHttpUInfo = null;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttpUInfo = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try {
            xmlHttpUInfo = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            xmlHttpUInfo = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttpUInfo;
}

function gotStringTest(t) {
    if (t[0] === "Fail") {
        document.getElementById("error_addnumber").innerHTML = t[1];
    } else {
        $('#div_addMobile').hide();
        $('#div_verficationMobile').show();
    }
}

function  vefifynumber() {
    var verify_number = document.getElementById("verifyNumber").value;
    var mob_id = document.getElementById("mobileNumber").value;
    AddMobileVerify.sendOtpCode(mob_id, gotStringTest);
}



$(document).ready(function() {
    loadExistingBillingAddress();
    loadChangeInfo();
    if ($("#div_id").val() !== "") {
        var ids = document.getElementById("div_id").value;
        var spiltValue = ids.split("|");
        if (spiltValue[0] === "add_mobile") {
            if (spiltValue[1] === "div_verficationMobile" & spiltValue[2] !== "fail") {
                $('#' + spiltValue[1]).show();
                $('#' + spiltValue[2]).hide();
            } else {
                $('#div_verficationMobile').show();
                $('#div_addMobile').hide();

            }

        } else {
            $('#div_addMobile').show();
        }
    }
// Start to message time set jquerys
    $('#error').show(0).delay(5000).hide(0);
    $('#chg_pass_error').show(0).delay(5000).hide(0);
    $('#chg_pass_success').show(0).delay(5000).hide(0);
    $('#success').show(0).delay(5000).hide(0);
    $('#verification_error').show(0).delay(5000).hide(0);
    $('#error_delete_account').show(0).delay(5000).hide(0);
    $('#Success_delete_account').show(0).delay(5000).hide(0);
    $('#error_remove').show(0).delay(5000).hide(0);
    $('#success_remove').show(0).delay(5000).hide(0);
    $('#ebill_chg_error').show(0).delay(5000).hide(0);
    $('#ebill_suc_success').show(0).delay(5000).hide(0);
    $('#edit_info_error').show(0).delay(5000).hide(0);
    $('#edit_info_success').show(0).delay(5000).hide(0);
    // End to message time set jquerys


/// Start to hide district option div
    $('#disOptionList').hide();
    $('#saluationList').hide();
    // end to hid district option div   
});
///start existing billing address load
function loadExistingBillingAddress() {

    ebillDetailsAJAX.getExistingEbillAddress(setBillAddressValues);
}
function setBillAddressValues(t) {

    $('#address1').attr('value', t.adrsLine1);
    $('#address2').attr('value', t.adrsLine2);
    $('#address3').attr('value', t.adrsLine3);
    $('#city').attr('value', t.city);
    $('#disCode').attr('value', t.disCode);
    addressLine1 = t.adrsLine1;
    addressLine2 = t.adrsLine2;
    addressLine3 = t.adrsLine3;
    disCode = t.disCode;
    city = t.city;
}
///end existing billing address load

// start billing address isChange
function isChangeInfo(x) {
// alert(x.address1.value.trim() === addressLine1.trim());
    if (addressline1(x.address1.value)) {
        if (addressline2(x.address2.value)) {
            if (addressline3(x.address3.value)) {
                if (cityvalidation(x.city.value)) {
                    if ((x.address1.value.trim() === addressLine1.trim()) & (x.city.value.trim() === city.trim()) & (x.address2.value.trim() === addressLine2.trim()) & (x.address3.value.trim() === addressLine3.trim()) & (x.disCode.value.trim() === disCode.trim())) {
                        alert("Please change at least one field!");
                        return false;
                    } else {
                        var confirmMessage = "Are you sure you want to update billing address information?";
                        if (confirm(confirmMessage) === false)
                        {
                            return false;
                        }
                        return true;
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

function addressline1(x) {
    var result = false;
    if (x.trim() === "") {
        window.alert("Address 1 Field Cannot Be Empty.");
    } else {
        result = true;
    }
    return result;

}
function addressline2(x) {
    var result = false;
    if (x.trim() === "") {
        window.alert("Address 2 Field Cannot Be Empty.");
    } else {
        result = true;
    }
    return result;

}
function addressline3(x) {
    var result = false;
    if (x.trim() === "") {
        window.alert("Address 3 Field Cannot Be Empty.");

    } else {
        result = true;
    }
    return result;

}

function cityvalidation(x) {
    var result = false;
    if (x.trim() === "") {
        window.alert("City Field Cannot Be Empty.");
    } else {
        var re = /^[a-zA-Z0-9\s]+$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter a valid city.");
        } else {
            result = true;
        }

    }
    return result;

}
// end 


//Start edit info default loading
function loadChangeInfo() {
    editInformation.getEditInformation(setUserInfoSetValues);
}
function setUserInfoSetValues(t) {

    $('#salutation').attr('value', t.salutation);
    $('#firstName').attr('value', t.firstName);
    $('#lastName').attr('value', t.lastName);
    $('#email').attr('value', t.email);
    $('#conNumber').attr('value', t.contractNo);
    saluation = t.salutation;
    fname = t.firstName;
    lname = t.lastName;
    email = t.email;
    contactNo = t.contractNo;
}

//End edit info default loading
//start  isInformation change
function isInformationChange(x) {
    if (firstname(x.firstName.value)) {
        if (lastname(x.lastName.value)) {
            if (validateemail(x.email.value)) {
                if (contactnumber(x.conNumber.value)) {
                    if ((x.salutation.value.trim() === saluation.trim()) & (x.firstName.value.trim() === fname.trim()) & (x.lastName.value.trim() === lname.trim()) & (x.email.value.trim() === email.trim()) & (x.conNumber.value.trim() === contactNo.trim())) {
                        alert("Please change at least one field!");
                        return false;
                    } else {
                        var confirmMessage = "Are you sure you want to update user information?";
                        if (confirm(confirmMessage) === false)
                        {
                            return false;
                        }
                        return true;
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
//edit my information 
function firstname(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter your first name.");
    } else {
        var re = /^[a-zA-Z]+$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter a valid first name.");
        } else {
            result = true;
        }

    }
    return result;
}
function lastname(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter your last name.");
    } else {
        var re = /^[a-zA-Z]+$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter a valid last name.");
        } else {
            result = true;
        }

    }
    return result;
}

function validateemail(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter your E-mail address.");
    } else {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter a valid E-mail address.");
        } else {
            result = true;
        }

    }
    return result;
}
function contactnumber(x) {
    var result = false;
    if (x === "") {
        window.alert("Please enter your contact no.");
    } else {
        var re = /^[0][1-9][0-9]{8}$/;
        if (!re.test(x.trim())) {
            window.alert("Please enter a valid contact no.");
        } else {
            result = true;
        }

    }
    return result;
}

//edit my information
//end

function deteleconfirmation() {
    var confirmMessage = "Are you sure you want to delete this account ?";
    if (confirm(confirmMessage) === false)
    {
        return false;
    }
}


function reSet() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("success").innerHTML = "";
    document.getElementById("mobileNumber").value = "";
    document.getElementById("verifyNumber").value = "";
    document.getElementById("verification_error").innerHTML = "";
    $('#verify_success').hide();
}
function reSetNumberRemoveForm() {

    document.getElementById("mobileNo").value = "";
    document.getElementById("error_remove").innerHTML = "";
    document.getElementById("success_remove").innerHTML = "";
}
function reSetChgForm() {
    document.getElementById("chg_pass_error").innerHTML = "";
    document.getElementById("chg_pass_success").innerHTML = "";
    document.getElementById("oldPassword").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";
}
//////Start set values billing address change form  
function loadDistrictOption() {
    $('#disOptionList').show(100);
}

function setDistrict() {

    $('#disCode').val($('#dis_code').val());
    $('#disOptionList').hide(100);
}
//////End reset billing address change form 


// Start to value bind edit info form
function loadSalutationOption() {
    $('#saluationList').show(100);
}
function setSalutation() {

    $('#salutation').val($('#salutationOption').val());
    $('#saluationList').hide(100);
}

//End to value bind edit info form

function editInfoReset() {
    $('#saluationList').hide();
    $('#invalidfName').html("");
    $('#invalidlName').html("");
    $('#invalidEmail').html("");
    $('#invalidMobile').html("");
}

function ebillInfoReset() {
    $('#disOptionList').hide();
    $('#invalidCity').html("");
}