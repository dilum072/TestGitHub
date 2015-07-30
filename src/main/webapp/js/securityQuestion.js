/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//
//function loadSecurityQuestion() {
//    var userId = $('#userId').val();
//    getSecurityQuestion.getSqcurityQuestion(userId, gotQuestion);
//}
//
//function gotQuestion(t) {
//    if (t === "Invalid") {
//        alert("Invalid username!");
//        $('#userId').attr("readonly", false)
//        $('#questionRest').hide();
//        $('#resetMessage').show();
//        $('#messageWindow').hide();
//        $('#getInfoButton').show();
//
//    } else {
//
//        $('#userId').attr("readonly", true)
//        $('#getInfoButton').hide();
//        $('#messageWindow').show();
//        $('#questionDiv').val(t);
//        $('#questionRest').show();
//        $('#resetMessage').hide();
//    }
//}

function resetForm() {
    $('#userId').attr("readonly", false)
    $('#errormessage').html("");
    $('#successmessage').html("");
    $('#userId').val(" ");
    $('#questionRest').hide();
    $('#getInfoButton').show();
    //   $('#question_error').html("");
    $('#chg_pass_success').html("");
    
  

}