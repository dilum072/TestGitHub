/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function checkEbill() {

    $('#div_ebillActivation').hide();
    $('#div_ebillContent_1').hide();
//    $('#div_ebillContent_2').hide();
    $('#div_ebillDeactivation').hide();
    ebillDetailsAJAX.checkebillActivation(gotCheckEbill);

//    alert($('#div_id').val());

    if ($('#div_id').val() != "") {
        var ids = document.getElementById("div_id").value;
        var spiltValue = ids.split("|");
        if (spiltValue[0] == "1") {
            if(spiltValue[1]=="true"){
                alert("E-bill service has been activated successfully ");
            }
            $('#div_currentBillmain').hide();
            $('#div_ebillContent').show();
            $('#div_ebillContent_1').show();
//            $('#div_ebillContent_2').show();
            $('#div_ebillActivation').hide();

        } else if (spiltValue[0] == "2") {
            if(spiltValue[1]=="false"){
                alert("E-bill service activated successfull.Because of "+spiltValue[2]);
            }
            $('#div_currentBillmain').hide();
            $('#div_ebillActivation').show();
        } else if (spiltValue[0] == "3") {
            if(spiltValue[1]=="true"){
                alert(" E-bill service has been deactivated successfully");
            }
            $('#div_currentBillmain').show()();
            $('#div_ebillContent').show();
        } else if (spiltValue[0] == "4") {
             if(spiltValue[1]=="false"){
                alert(" E-bill service deactivation  unsuccessfull." + spiltValue[2]);
            }
            $('#div_currentBillmain').hide();
            $('#div_ebillDeactivation').show();
        }
    }
}

function gotCheckEbill(t) {

    if (t[0] == false) {

        $('#div_ebillActivation').show();
        $('#div_ebillContent_1').hide();
//        $('#div_ebillContent_2').hide();
        $('#div_ebillDeactivation').hide();

    } else {
//        alert("---==--=-=-=-=" + t[1]);
        $('#div_ebillContent_1').show();
//        $('#div_ebillContent_2').show();
        if (t[1] == "1") {
            $('#div_detailBill').hide();
            $('#div_summaryBill').hide();

        } else if (t[1] == "2") {
            $('#div_detailBill').show();
            $('#div_summaryBill').hide();

        } else if (t[1] == "3") {
            $('#div_detailBill').show();
            $('#div_summaryBill').hide();

        }
        $('#div_ebillActivation').hide();
        $('#div_ebillDeactivation').hide();
    }
}

function lthrEbill() {
    //pop('popDiv');
    var currentMonth = (new Date).getMonth() + 1;
    // alert(currentMonth);
    switch (currentMonth) {
        case 1:
            $('#billMenu').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">December</a></li><li><a href="#" onclick="ebillPageload(2);">November</a></li><li><a href="#" onclick="ebillPageload(3);">October</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" ><li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>December</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >November</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3">October</label></div></li></ul>');
            break;
        case 2:
            $('#billMenu').empty();
            //$('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">January</a></li><li><a href="#" onclick="ebillPageload(2);">December</a></li><li><a href="#" onclick="ebillPageload(3);">November</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>January</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >December</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >November</label></div></li></ul>');
            break;
        case 3:
            $('#billMenu').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">February</a></li><li><a href="#" onclick="ebillPageload(2);">January</a></li><li><a href="#" onclick="ebillPageload(3);">December</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" ><li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>February</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >January</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >December</label></div></li></ul>');
            break;
        case 4:
            $('#billMenu').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">March</a></li><li><a href="#" onclick="ebillPageload(2);">February</a></li><li><a href="#" onclick="ebillPageload(3);">January</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>March</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >February</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >January</label></div></li></ul>');
            break;
        case 5:
            $('#billMenu').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">April</a></li><li><a href="#" onclick="ebillPageload(2);">March</a></li><li><a href="#" onclick="ebillPageload(3);">February</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>April</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >March</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios31" value="3" >February</label></div></li></ul>');
            break;
        case 6:
            $('#billMenu').empty();
            //$('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">May</a></li><li><a href="#" onclick="ebillPageload(2);">April</a></li><li><a href="#" onclick="ebillPageload(3);">March</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>May</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >April</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >March</label></div></li></ul>');
            break;
        case 7:
            $('#billMenu').empty();
            //$('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">June</a></li><li><a href="#" onclick="ebillPageload(2);">May</a></li><li><a href="#" onclick="ebillPageload(3);">April</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>June</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >May</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >April</label></div></li></ul>');
            break;
        case 8:
            $('#billMenu').empty();
            //$('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">July</a></li><li><a href="#" onclick="ebillPageload(2);">June</a></li><li><a href="#" onclick="ebillPageload(3);">May</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>July</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >June</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >May</label></div></li><ul>');
            break;
        case 9:
            $('#billMenu').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">August</a></li><li><a href="#" onclick="ebillPageload(2);">July</a></li><li><a href="#" onclick="ebillPageload(3);">June</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>August</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >July</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >June</label></div></li></ul>');
            break;
        case 10:
            $('#billMenu').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">September</a></li><li><a href="#" onclick="ebillPageload(2);">August</a></li><li><a href="#" onclick="ebillPageload(3);">July</a></li></ul>');
            //alert("in in in");
            $('#billMenu').append(' <ul class="radio-list" ><li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>September</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >August</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >July</label></div></li></ul>');
            break;
        case 11:
            $('#billMenu').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">October</a></li><li><a href="#" onclick="ebillPageload(2);">September</a></li><li><a href="#" onclick="ebillPageload(3);">August</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>October</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >September</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >August</label></div></li></ul>');
            break;
        case 12:
            $('#billMenu').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">November</a></li><li><a href="#" onclick="ebillPageload(2);">October</a></li><li><a href="#" onclick="ebillPageload(3);">September</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>November</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >October</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >September</label></div></li></ul>');
            break;
        default:
            alert('Nobody Wins!');
    }
}

function lthrEbillS(){
    //pop('popDiv');
    var currentMonth = (new Date).getMonth() + 1;
    // alert(currentMonth);
    switch (currentMonth) {
        case 1:
            $('#billMenuS').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">December</a></li><li><a href="#" onclick="ebillPageload(2);">November</a></li><li><a href="#" onclick="ebillPageload(3);">October</a></li></ul>');
            $('#billMenuS').append('<ul class="radio-list" ><li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>December</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >November</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3">October</label></div></li></ul>');
            break;
        case 2:
            $('#billMenuS').empty();
            //$('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">January</a></li><li><a href="#" onclick="ebillPageload(2);">December</a></li><li><a href="#" onclick="ebillPageload(3);">November</a></li></ul>');
            $('#billMenuS').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>January</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >December</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >November</label></div></li></ul>');
            break;
        case 3:
            $('#billMenuS').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">February</a></li><li><a href="#" onclick="ebillPageload(2);">January</a></li><li><a href="#" onclick="ebillPageload(3);">December</a></li></ul>');
            $('#billMenuS').append('<ul class="radio-list" ><li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>February</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >January</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >December</label></div></li></ul>');
            break;
        case 4:
            $('#billMenuS').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">March</a></li><li><a href="#" onclick="ebillPageload(2);">February</a></li><li><a href="#" onclick="ebillPageload(3);">January</a></li></ul>');
            $('#billMenuS').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>March</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >February</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >January</label></div></li></ul>');
            break;
        case 5:
            $('#billMenuS').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">April</a></li><li><a href="#" onclick="ebillPageload(2);">March</a></li><li><a href="#" onclick="ebillPageload(3);">February</a></li></ul>');
            $('#billMenuS').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>April</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >March</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios31" value="3" >February</label></div></li></ul>');
            break;
        case 6:
            $('#billMenuS').empty();
            //$('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">May</a></li><li><a href="#" onclick="ebillPageload(2);">April</a></li><li><a href="#" onclick="ebillPageload(3);">March</a></li></ul>');
            $('#billMenu').append('<<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>May</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >April</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >March</label></div></li></ul>');
            break;
        case 7:
            $('#billMenuS').empty();
            //$('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">June</a></li><li><a href="#" onclick="ebillPageload(2);">May</a></li><li><a href="#" onclick="ebillPageload(3);">April</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>June</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >May</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >April</label></div></li></ul>');
            break;
        case 8:
            $('#billMenuS').empty();
            //$('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">July</a></li><li><a href="#" onclick="ebillPageload(2);">June</a></li><li><a href="#" onclick="ebillPageload(3);">May</a></li></ul>');
            $('#billMenuS').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>July</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >June</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >May</label></div></li><ul>');
            break;
        case 9:
            $('#billMenuS').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">August</a></li><li><a href="#" onclick="ebillPageload(2);">July</a></li><li><a href="#" onclick="ebillPageload(3);">June</a></li></ul>');
            $('#billMenuS').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>August</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >July</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >June</label></div></li></ul>');
            break;
        case 10:
            $('#billMenuS').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">September</a></li><li><a href="#" onclick="ebillPageload(2);">August</a></li><li><a href="#" onclick="ebillPageload(3);">July</a></li></ul>');
            //alert("in in in");
            $('#billMenuS').append(' <ul class="radio-list" ><li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>September</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >August</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >July</label></div></li></ul>');
            break;
        case 11:
            $('#billMenuS').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">October</a></li><li><a href="#" onclick="ebillPageload(2);">September</a></li><li><a href="#" onclick="ebillPageload(3);">August</a></li></ul>');
            $('#billMenuS').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>October</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >September</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >August</label></div></li></ul>');
            break;
        case 12:
            $('#billMenuS').empty();
            // $('#billMenu').append('<ul><li><a href="#" onclick="ebillPageload(1);">November</a></li><li><a href="#" onclick="ebillPageload(2);">October</a></li><li><a href="#" onclick="ebillPageload(3);">September</a></li></ul>');
            $('#billMenu').append('<ul class="radio-list" > <li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios1" value="1" checked>November</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios2" value="2" >October</label></div></li>' +
                    '<li class="col-md-6"><div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios3" value="3" >September</label></div></li></ul>');
            break;
        default:
            alert('Nobody Wins!');
    }
}



function ebillPageload() {
    var bill_id = $('input[name=optionsRadios]:checked').val();

    window.open('/MyAccount/ebill_preview.jsp?mID=' + bill_id, '_blank');
}

function ebillLoad() {
    $body = $("body");
    $body.addClass("loading");

    var sPageURL = window.location.search.substring(1);
    var sParameterName = sPageURL.split('=');

//    alert("teetssssssssssssssssssss " + sParameterName[1]);
    ebillDetailsAJAX.getEbill(sParameterName[1], gotEbill);
//    alert("teetssssssssssssssssssss ");
}

function ebillPageloadCoopDetail(x){
    var bill_id = $('input[name=optionsRadios]:checked').val();
    window.open('/MyAccount/ebill_lastMonths_preview_coop.jsp?cat='+ x+'&mID=' + bill_id, '_blank');
    
}

function gotEbill(t) {
    $body = $("body");
//    var data = Convert.ToBase64String(t);
//alert("--------------"+t[0]);
    if (t != null) {
      //  alert(t[0]);
        if (t[0] == true) {

//            var decodedData = window.atob(t[1]);
            var decodedData = base64.decode(t[1]);
        alert(decodedData);
//        var appendImag = document.createElement('img');
//        alert('data:application/pdf;base64,' + decodedData);
//        appendImag.src = 'data:application/pdf;base64,' + decodedData;
//            var htmlText = '<embed width=100% height=100%'
//                    + ' type="application/pdf"'
//                    + ' src="data:application/pdf,'
//                    + escape(decodedData)
//                    + '"></embed>';

//            var htmlText = '<embed width=100% height=100% type="application/pdf" src="data:application/pdf,'+ escape(decodedData)+ '"></embed>';
            var htmlText_1 = '<iframe style="width: 100%; height: 100%;min-height: 600px;" src="data:application/pdf,'+ escape(decodedData)+ '" ></iframe>';
            alert(htmlText_1);
//            document.getElementById("preview").appendChild(htmlText);
            $("#preview").append(htmlText_1);
        } else {
            alert("There is no E-Bill to load.");
        }

    }
    $body.removeClass("loading");
}

function deactEbill() {

    $('#div_ebillDeactivation').show();
    $('#div_ebillContent_1').hide();
//    $('#div_ebillContent_2').hide();
}

function coopEbillpageLoad(x) {
    window.open('/MyAccount/ebill_preview_Coop.jsp?cat='+ x, '_blank');
}

function coopEbillLoad() {
    $body = $("body");
    $body.addClass("loading");

    var sPageURL = window.location.search.substring(1);
    var sParameterName = sPageURL.split('=');
    //alert(sParameterName[1]);
    ebillDetailsAJAX.getCoopEBill(sParameterName[1], gotEbill);

}
