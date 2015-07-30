/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var popupWindow = null;
function popup(mypage, myname, w, h, pos, infocus) {

    if (pos == 'random')
    {
        LeftPosition = (screen.width) ? Math.floor(Math.random() * (screen.width - w)) : 100;
        TopPosition = (screen.height) ? Math.floor(Math.random() * ((screen.height - h) - 75)) : 100;
    }
    else
    {
        LeftPosition = (screen.width) ? (screen.width - w) / 2 : 100;
        TopPosition = (screen.height) ? (screen.height - h) / 2 : 100;
    }
    settings = 'width=' + w + ',height=' + h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
    popupWindow = window.open('', myname, settings);
    if (infocus == 'front') {
        popupWindow.focus();
        popupWindow.location = mypage;
    }
    if (infocus == 'back') {
        popupWindow.blur();
        popupWindow.location = mypage;
        popupWindow.blur();
    }

}


function getOnlinePaymentURL(serviceNo) {
//    window.open("/MyAccount/onlinePayemnt.jsp", "_blank", "toolbar=yes, scrollbars=yes, resizable=no, top=550, left=550, width=550, height=550");
    popup('/MyAccount/onlinePayemnt.jsp', 'pagename', '650', '750', 'random', 'front');
//    var serviceNumber = '<%= Session["selectedAcc_no"] %>';
//    var selectdMobile_no = "<%= Session["+selectedMobile+"] %>";

//    document.getElementById('div_serviceNumber').innerHTML = serviceNo;

    updateServiceNo();

}

function getOnlinePaymentCoopURL(serviceNo) {
//    window.open("/MyAccount/coopIndPayOnline.jsp", "_blank", "toolbar=yes, scrollbars=yes, resizable=no, top=550, left=550, width=550, height=550");
    popup('/MyAccount/coopIndPayOnline.jsp', 'pagename', '650', '750', 'random', 'front');
//    var serviceNumber = '<%= Session["selectedAcc_no"] %>';
//    var selectdMobile_no = "<%= Session["+selectedMobile+"] %>";

//    document.getElementById('div_serviceNumber').innerHTML = serviceNo;

    updateServiceNo();

}
function updateServiceNo() {
    var serviceNo = getURLParameter('service_no');
//    document.getElementById('div_serviceNumber').innerHTML = serviceNo;
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}

function validatePayAmount() {
    var payAmount = document.getElementById("txt_payAmount").value;
//    alert(payAmount)

//    var regex = /^\d+(?:\.\d{0,2})?$/;
    var regex = /^[1-9][0-9]*(?:\.\d{2})?$/;
    if (payAmount) {
        if (!regex.test(payAmount)) {
            alert("Please enter a valid input.(Ex : xx.xx)");
            return false;
        }
//        else {
//            if (payAmount < 0) {
//                alert("Payment value should be grater than zero");
//                return false;
//            }
//            if (payAmount == 0) {
//                alert("Payment value should be grater than zero");
//                return false;
//            }
//        }
    } else {
        alert("Payment value cannot be empty");
        return false;
    }

//    alert("----" + payAmount);
}