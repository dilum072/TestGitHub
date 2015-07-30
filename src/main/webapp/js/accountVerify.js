/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*$(document).ready(function() {
 IsVerifyUserAccount.checkUserAccountVerification(accountStatusCheck);
 });
 
 
 function accountStatusCheck(t) {
 if (!t) {
 $('#select_mobile').hide();
 $('#div_verficationMobile').show();
 } else {
 $('#select_mobile').show();
 // AccountmobileList();
 }
 }*/


function reSet() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("success").innerHTML = "";
    document.getElementById("mobileNumber").value = "";
    document.getElementById("verifyNumber").value = "";
    document.getElementById("verification_error").innerHTML = "";
    document.getElementById("success_resend").innerHTML = "";

    $('#verify_success').hide();

}
/*
 function AccountmobileList() {
 
 xmlHttpUInfo = GetXmlHttpObject();
 if (xmlHttpUInfo == null) {
 alert("Your browser does not support AJAX!");
 return;
 }
 var url = "select_number_list.jsp";
 xmlHttpUInfo.onreadystatechange = loadMobileNumberListPage;
 xmlHttpUInfo.open("GET", url, true);
 xmlHttpUInfo.send(null);
 return;
 
 }
 
 function loadMobileNumberListPage() {
 if (xmlHttpUInfo.readyState == 4) {
 document.getElementById("numberList").innerHTML = xmlHttpUInfo.responseText;
 
 }
 }
 */