/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getDashboardDetails() {
    $body = $("body");
    $body.addClass("loading");

    dashboardDetailsAJAX.packageDetailsBroadband(gotPackageDetailsBroadband);
//    dashboardDetailsAJAX.getCustomerPackageDetails(gotPackDetails);
    //0711932494//0715582146
}

function gotPackDetails(t) {
    document.getElementById("h_pacageName").innerHTML = t.packageName + "<small>( Broadband )</small>";
    document.getElementById("h_mobileNo").innerHTML = t.mobileNumber;
}

function gotPackageDetailsBroadband(t) {
    $body = $("body");
    if (t[0] != null) {
        document.getElementById("small_usageDetailsAsat").innerHTML = "As at " + t[0].asAt;
        if (t[0].isDataNrml == true) {
            $('#div_nrmlData').show();
            document.getElementById("dataNrmlUsage").innerHTML = t[0].dataNrmlUsed + "MB/" + t[0].dataNrmlEligible + "MB";
            document.getElementById("dataNrmlExcess").innerHTML = t[0].dataNrmlExcessUsage + "MB";
            document.getElementById("dataNrmlProgress").style.width = t[0].dataNrmlPresentage;

        } else {
            $('#div_nrmlData').hide();
        }

        if (t[0].isUpaharaData == true) {
            $('#div_dataUpahara').show();
            $('#div_dataUpaharaNght').show();
            document.getElementById("div_dayUpaharaDataUsage").innerHTML = t[0].upaharaDayUsed + "MB/" + t[0].upaharaDayEligible + "MB";
            document.getElementById("span_excessUsage").innerHTML = t[0].dataNrmlExcessUsage + "MB";
            document.getElementById("upaharaPresentage").style.width = t[0].upaharaDayPresentage;

            document.getElementById("div_nghtUpaharaDataUsage").innerHTML = t[0].upaharaNghtUsed + "MB/" + t[0].upaharaNghtEligible + "MB";
            document.getElementById("upaharaNghtPresentage").style.width = t[0].upaharaNghtPresentage;

        } else {
            $('#div_dataUpahara').hide();
            $('#div_dataUpaharaNght').hide();

        }

        if (t[0].isRSdata == true) {
            $('#div_dataSR').show();
            $('#div_dataSRNght').show();

            document.getElementById("div_daysrDataUsage").innerHTML = t[0].rSDayUsed + "MB/" + t[0].rSDayEligible + "MB";
            document.getElementById("span_excessUsage").innerHTML = t[0].dataNrmlExcessUsage + "MB";
            document.getElementById("srPackegePresentage").style.width = t[0].rSDayPrecentage;

            document.getElementById("div_srDataUsageNght").innerHTML = t[0].rSNghtUsed + "MB/" + t[0].rSNghtEligible + "MB";
            document.getElementById("srPackegeNghtPresentage").style.width = t[0].rSNghtPrecentage;


        } else {
            $('#div_dataSR').hide();
            $('#div_dataSRNght').hide();

        }
        if (t[0].isSMSActive == false) {
            $('#div_SMSUsage').hide();
        } else {
            $('#div_SMSUsage').show();
            document.getElementById("lbl_smsUsage").innerHTML = t[0].smsMMUsage + "/" + t[0].smsMMEligible;
            document.getElementById("div_smsProgress").style.width = t[0].smsMMPrecentage;
        }


        if (t[0].isLatActive == false) {
            $('#div_dataLateNight').hide();

        } else {
            $('#div_dataLateNight').show();
            document.getElementById("dataLateUsage").innerHTML = t[0].dataLteUsed + "MB/" + t[0].dataLteEligible + "MB";
//            document.getElementById("dataLateExcess").innerHTML = t[0].dataLteExcessUsage + "MB";
            document.getElementById("dataLateProgress").style.width = t[0].dataLtePresentage;
        }

        if (t[0].isVoiceActive == false) {
            $('#div_voiceUsage').hide();
        } else {
            $('div_voiceUsage').show();
            document.getElementById("lbl_voiceUsage").innerHTML = t[0].voiceMMUsed + "mins/" + t[0].voiceMMEligible + "mins"
            document.getElementById("div_voiceProgress").style.width = t[0].voiceMMPresentage;
        }
    }
//    alert(t[1])
    if (t[1] != null) {

        document.getElementById("span_currbillDate").innerHTML = "<small>As at " + t[1].asAt + "</small> <small class='right'><strong>Bill Run Date :</strong>" + t[1].billrunDate + "</small>";
        if (t[1].disconected == false) {
            document.getElementById("span_monthlyRental").innerHTML = "Rs. " + t[1].monthlyRental;
            document.getElementById("span_billedValue").innerHTML = "Rs. " + t[1].billedValue;
            document.getElementById("span_dueAmount").innerHTML = "Rs. " + t[1].dueAmount;

        } else {
            $('#div_currentBill').hide();
        }
    }


    $body.removeClass("loading");
}

function getPOSDashboardDetails() {
    $body = $("body");
    $body.addClass("loading");

    dashboardDetailsAJAX.packageDetailsPospaid(gotPacakageDetailsPOS);
}

function gotPacakageDetailsPOS(t) {
    $body = $("body");
    document.getElementById("span_currbillDate").innerHTML = "<small>As at " + t[0].asAt + "</small> <small class='right'><strong>Bill Run Date :</strong>" + t[0].billrunDate + "</small>";

    if (t[0] != null) {
//        alert("-----------------1----------------");
        if (t[0].disconected == false) {
//            alert("-----------------2----------------");
            $('#div_currentBill').show();
            $('#div_unbill').show();
//            alert("====="+t[0].callCharge+"====="+t[0].eServiceCharge+"====="+t[0].smsCharge+"====="+t[0].dataCharge+"====="+t[0].roamCharge
//                    +"====="+t[0].otherCharge+"====="+t[0].iddCharge+"====="+t[0].totalUnbill+"=====");
            document.getElementById("span_callCharge").innerHTML = t[0].callCharge;
            document.getElementById("span_eService").innerHTML = t[0].eServiceCharge;
            document.getElementById("span_sms").innerHTML = t[0].smsCharge;
            document.getElementById("span_data").innerHTML = t[0].dataCharge;
            document.getElementById("span_roaming").innerHTML = t[0].roamCharge;
            document.getElementById("span_other").innerHTML = t[0].otherCharge;
            document.getElementById("span_idd").innerHTML = t[0].iddCharge;
            document.getElementById("div_totalUnbill").innerHTML = "Rs. " + t[0].totalUnbill;

            document.getElementById("span_monthlyRental").innerHTML = "Rs. " + t[0].monthlyRental;
            document.getElementById("span_dueAmount").innerHTML = "Rs. " + t[0].dueAmount;
            document.getElementById("span_creditLimit").innerHTML = "Rs. " + t[0].crediLimit;
            document.getElementById("span_refundabalDep").innerHTML = "Rs. " + t[0].refundableDep;
            document.getElementById("small_usageDetailsAsat_1").innerHTML = "As at " + t[0].asAt;
        } else {
            $('#div_currentBill').hide();
            $('#div_unbill').hide();
        }

    }

    if (t[1] != null) {
        document.getElementById("small_usageDetailsAsat").innerHTML = "As at " + t[0].asAt;
        if (t[1].isDataNrml == true) {
            $('#div_nrmlData').show();
            document.getElementById("dataNrmlUsage").innerHTML = t[1].dataNrmlUsed + "MB/" + t[1].dataNrmlEligible + "MB";
            document.getElementById("dataNrmlExcess").innerHTML = t[1].dataNrmlExcessUsage + "MB";
            document.getElementById("dataNrmlProgress").style.width = t[1].dataNrmlPresentage;

        } else {
            $('#div_nrmlData').hide();
        }
        if (t[1].isUpaharaData == true) {
            $('#div_dataUpahara').show();
            $('#div_dataUpaharaNght').show();
            document.getElementById("div_dayUpaharaDataUsage").innerHTML = t[1].upaharaDayUsed + "MB/" + t[1].upaharaDayEligible + "MB";
            document.getElementById("span_excessUsage").innerHTML = t[1].dataNrmlExcessUsage + "MB";
            document.getElementById("upaharaPresentage").style.width = t[1].upaharaDayPresentage;

            document.getElementById("div_nghtUpaharaDataUsage").innerHTML = t[1].upaharaNghtUsed + "MB/" + t[1].upaharaNghtEligible + "MB";
            document.getElementById("upaharaNghtPresentage").style.width = t[1].upaharaNghtPresentage;

        } else {
            $('#div_dataUpahara').hide();
            $('#div_dataUpaharaNght').hide();

        }
        if (t[1].isRSdata == true) {
            $('#div_dataSR').show();
            $('#div_dataSRNght').show();

            document.getElementById("div_daysrDataUsage").innerHTML = t[1].rSDayUsed + "MB/" + t[1].rSDayEligible + "MB";
            document.getElementById("span_excessUsage").innerHTML = t[1].dataNrmlExcessUsage + "MB";
            document.getElementById("srPackegePresentage").style.width = t[1].rSDayPrecentage;

            document.getElementById("div_srDataUsageNght").innerHTML = t[1].rSNghtUsed + "MB/" + t[1].rSNghtEligible + "MB";
            document.getElementById("srPackegeNghtPresentage").style.width = t[1].rSNghtPrecentage;


        } else {
            $('#div_dataSR').hide();
            $('#div_dataSRNght').hide();

        }

        /* document.getElementById("dataNrmlUsage").innerHTML = t[1].dataNrmlUsed + "MB/" + t[1].dataNrmlEligible + "MB";
         document.getElementById("dataNrmlExcess").innerHTML = t[1].dataNrmlExcessUsage + "MB";
         document.getElementById("dataNrmlProgress").style.width = t[1].dataNrmlPresentage;
         document.getElementById("small_usageDetailsAsat").innerHTML = "As at " + t[1].asAt*/
//
////        alert("uuuuuuuuuuuuuuuu--------------" + t[0].smsMMUsage + "/" + t[0].smsMMEligible);
//
        if (t[1].isSMSActive == false) {
            $('#div_SMSUsage').hide();
        } else {
            $('#div_SMSUsage').show();
            document.getElementById("lbl_smsUsage").innerHTML = t[1].smsMMUsage + "/" + t[1].smsMMEligible;
            document.getElementById("div_smsProgress").style.width = t[1].smsMMPrecentage;
        }
        if (t[1].isLatActive == false) {
//            alert("====" + t[0].isLatActive);
            $('#div_dataLateNight').hide();

        } else {
//            alert(t[0].isLatActive);
            $('#div_dataLateNight').show();
            document.getElementById("dataLateUsage").innerHTML = t[1].dataLteUsed + "MB/" + t[1].dataLteEligible + "MB";
//            document.getElementById("dataLateExcess").innerHTML = t[1].dataLteExcessUsage + "MB";
            document.getElementById("dataLateProgress").style.width = t[1].dataLtePresentage;
        }

        if (t[1].isVoiceActive == false) {
//            alert("voice====3333=====" + t[0].isVoiceActive);
            $('#div_voiceUsage').hide();
        } else {
            $('div_voiceUsage').show();
            document.getElementById("lbl_voiceUsage").innerHTML = t[1].voiceMMUsed + "mins/" + t[1].voiceMMEligible + "mins";
            document.getElementById("div_voiceProgress").style.width = t[1].voiceMMPresentage;
        }
    }
    if (t[2] != null) {
        document.getElementById("div_pukCode").innerHTML = "<p>" + t[2] + "</p>";
    }


    $body.removeClass("loading");
}

function getCooparateCurrentbillDetails() {
    $body = $("body");
    $body.addClass("loading");
    dashboardDetailsAJAX.cooparateCurrentbillDetails(gotCooparateCurrentbillDetails);
}

function gotCooparateCurrentbillDetails(t) {
    $body = $("body");
    if (t[0] != null) {
        document.getElementById("span_billedValue").innerHTML = "Rs. " + t[0].account_billedValue;
        document.getElementById("span_dueAmount").innerHTML = "Rs. " + t[0].account_dueAmount;
//        document.getElementById("txt_searchMobile").value = t[0].mobile_no;
        document.getElementById("span_mobileMnthlyR").innerHTML = "Rs. " + t[0].mobile_monthlyRental;
        document.getElementById("span_mobileBilledV").innerHTML = "Rs. " + t[0].mobile_billedValue;
        document.getElementById("span_mobileDueA").innerHTML = "Rs. " + t[0].mobile_DueAmount;
        document.getElementById("span_currbillDate").innerHTML = "<small>As at " + t[0].asAt + "</small> <small class='right'><strong>Bill Run Date :</strong>" + t[0].billrunDate + "</small>";
        document.getElementById("span_mobileCurrbillDate").innerHTML = "<small>As at " + t[0].asAt + "</small> ";
        document.getElementById("span_mobileUnbillDuration").innerHTML = "<small>As at " + t[0].asAt + "</small> ";
        document.getElementById("h_usageDetailMobileNo").innerHTML = "Usage Details - <small>As at " + t[0].asAt + "</small> ";
        document.getElementById("span_callCharge").innerHTML = t[0].mobile_callCharge;
        document.getElementById("span_eService").innerHTML = t[0].mobile_eServiceCharge;
        document.getElementById("span_sms").innerHTML = t[0].mobile_smsCharge;
        document.getElementById("span_data").innerHTML = t[0].mobile_dataCharge;
        document.getElementById("span_roaming").innerHTML = t[0].mobile_roamCharge;
        document.getElementById("span_other").innerHTML = t[0].mobile_otherCharge;
        document.getElementById("div_mobiletotalUnbill").innerHTML = "Rs. " + t[0].mobile_totalUnbill;
//        document.getElementById("span_idd").innerHTML = "Rs. " + t[0].mobile_iddCharge;

    }
    if (t[1] != null) {
        var usageList = t[1];
        if (usageList[0] != null) {
//            document.getElementById("dataNrmlUsage").innerHTML = usageList[0].dataNrmlUsed + "MB/" + usageList[0].dataNrmlEligible + "MB";
//            document.getElementById("dataNrmlExcess").innerHTML = usageList[0].dataNrmlExcessUsage + "MB";
//            document.getElementById("dataNrmlProgress").style.width = usageList[0].dataNrmlPresentage;
//        document.getElementById("small_usageDetailsAsat").innerHTML = "as at " + t[1].asAt;
////        alert("uuuuuuuuuuuuuuuu--------------" + t[0].smsMMUsage + "/" + t[0].smsMMEligible);
            if (usageList[0].isDataNrml == true) {
                $('#div_nrmlData').show();
                document.getElementById("dataNrmlUsage").innerHTML = usageList[0].dataNrmlUsed + "MB/" + usageList[0].dataNrmlEligible + "MB";
                document.getElementById("dataNrmlExcess").innerHTML = usageList[0].dataNrmlExcessUsage + "MB";
                document.getElementById("dataNrmlProgress").style.width = usageList[0].dataNrmlPresentage;

            } else {
                $('#div_nrmlData').hide();
            }

            if (usageList[0].isUpaharaData == true) {
                $('#div_dataUpahara').show();
                $('#div_dataUpaharaNght').show();
                document.getElementById("div_dayUpaharaDataUsage").innerHTML = usageList[0].upaharaDayUsed + "MB/" + usageList[0].upaharaDayEligible + "MB";
                document.getElementById("span_excessUsage").innerHTML = usageList[0].dataNrmlExcessUsage + "MB";
                document.getElementById("upaharaPresentage").style.width = usageList[0].upaharaDayPresentage;

                document.getElementById("div_nghtUpaharaDataUsage").innerHTML = usageList[0].upaharaNghtUsed + "MB/" + usageList[0].upaharaNghtEligible + "MB";
                document.getElementById("upaharaNghtPresentage").style.width = usageList[0].upaharaNghtPresentage;

            } else {
                $('#div_dataUpahara').hide();
                $('#div_dataUpaharaNght').hide();

            }

            if (usageList[0].isRSdata == true) {
                $('#div_dataSR').show();
                $('#div_dataSRNght').show();

                document.getElementById("div_daysrDataUsage").innerHTML = usageList[0].rSDayUsed + "MB/" + usageList[0].rSDayEligible + "MB";
                document.getElementById("span_excessUsage").innerHTML = usageList[0].dataNrmlExcessUsage + "MB";
                document.getElementById("srPackegePresentage").style.width = usageList[0].rSDayPrecentage;

                document.getElementById("div_srDataUsageNght").innerHTML = usageList[0].rSNghtUsed + "MB/" + usageList[0].rSNghtEligible + "MB";
                document.getElementById("srPackegeNghtPresentage").style.width = usageList[0].rSNghtPrecentage;


            } else {
                $('#div_dataSR').hide();
                $('#div_dataSRNght').hide();

            }

//
            if (usageList[0].isSMSActive == false) {
                $('#div_SMSUsage').hide();
            } else {
                $('#div_SMSUsage').show();
                document.getElementById("lbl_smsUsage").innerHTML = usageList[0].smsMMUsage + "/" + usageList[0].smsMMEligible;
                document.getElementById("div_smsProgress").style.width = usageList[0].smsMMPrecentage;
            }
            if (usageList[0].isLatActive == false) {
//            alert("====" + t[0].isLatActive);
                $('#div_dataLateNight').hide();

            } else {
//            alert(t[0].isLatActive);
                $('#div_dataLateNight').show();
                document.getElementById("dataLateUsage").innerHTML = usageList[0].dataLteUsed + "MB/" + usageList[0].dataLteEligible + "MB";
//                document.getElementById("dataLateExcess").innerHTML = usageList[0].dataLteExcessUsage + "MB";
                document.getElementById("dataLateProgress").style.width = usageList[0].dataLtePresentage;
            }

            if (usageList[0].isVoiceActive == false) {
//            alert("voice====3333=====" + t[0].isVoiceActive);
                $('#div_voiceUsage').hide();
            } else {
                $('div_voiceUsage').show();
                document.getElementById("lbl_voiceUsage").innerHTML = usageList[0].voiceMMUsed + "mins/" + usageList[0].voiceMMEligible + "mins"
                document.getElementById("div_voiceProgress").style.width = usageList[0].voiceMMPresentage;
            }

            /*--Speed Test--*/
            /*var str = ""
             var tableStr_1 = "<table class='table table-striped table-bordered'><thead><tr><th rowspan='2' scope='col'>Service Number</th>" +
             "<th colspan='2' scope='col'>Data Usage</th><th  rowspan='2' scope='col'>Voice</th><th rowspan='2' scope='col'>SMS</th>" +
             "</tr><tr><th scope='col'>Day</th><th scope='col'>Night</th></tr></thead><tbody>";
             for (i = 0; i < usageList.length; i++) {
             str += "<tr><td>" + usageList[i].mobile_no + "</td>";
             //                alert("=====mobile=======" + str);
             //                alert("=====data nrml=======" + usageList[i].isDataNrml);
             if (usageList[i].isDataNrml) {
             
             if (usageList[i].dataNrmlUsed != null) {
             str += "<td>" + usageList[i].dataNrmlUsed + "</td>";
             } else {
             str += "<td> -- </td>";
             }
             
             if (usageList[i].isLatActive) {
             str += "<td>" + usageList[i].dataLteUsed + "</td>";
             } else {
             str += "<td> -- </td>";
             }
             
             }
             //                alert("======data nrml ======" + str);
             //                alert("======data lateNight ======" + usageList[i].isLatActive);
             //
             //                alert("======data lateNight ======" + str);
             //                alert("======data isUpaharaData ======" + usageList[i].isUpaharaData);
             if (usageList[i].isUpaharaData) {
             if (usageList[i].upaharaDayUsed != null) {
             str += "<td>" + usageList[i].upaharaDayUsed + "</td>";
             } else {
             str += "<td> -- </td>";
             }
             if (usageList[i].upaharaNghtUsed != null) {
             str += "<td>" + usageList[i].upaharaNghtUsed + "</td>";
             } else {
             str += "<td> -- </td>";
             }
             }
             //                alert("======data Upahara ======" + str);
             //                alert("======data isRSdata ======" + usageList[i].isRSdata);
             if (usageList[i].isRSdata) {
             if (usageList[i].rSDayUsed != null) {
             str += "<td>" + usageList[i].rSDayUsed + "</td>";
             } else {
             str += "<td> -- </td>";
             }
             if (usageList[i].rSNghtUsed != null) {
             str += "<td>" + usageList[i].rSNghtUsed + "</td>";
             } else {
             str += "<td> -- </td>";
             }
             }
             //                alert("======data isRSdata ======" + str);
             //                alert("======voicee ======" + usageList[i].isVoiceActive);
             if (usageList[i].isVoiceActive) {
             str += "<td>" + usageList[i].voiceMMUsed + "</td>";
             } else {
             str += "<td> -- </td>";
             }
             //                alert("======voicee ======" + str);
             
             if (usageList[i].smsMMUsage != null) {
             str += "<td>" + usageList[i].smsMMUsage + "</td>";
             } else {
             str += "<td> -- </td>";
             }
             str += "</tr>"
             var objectSel = document.getElementById("select_mobileNo");
             objectSel.options[i] = new Option(usageList[i].mobile_no);
             
             }
             
             
             var tableStr_2 = "</tbody></table>";
             str += tableStr_2;
             tableStr_1 += str;
             document.getElementById("div_coopUsageList").innerHTML = tableStr_1;*/
        }

        /*--Speed Test--*/

        if (t[2] != null) {
            var mobile_list = t[2];
            for (var z = 0; z < mobile_list.length; z++) {
                var objectSel = document.getElementById("select_mobileNo");
                objectSel.options[z] = new Option(mobile_list[z]);
            }

        }


    }
    $body.removeClass("loading");

}

function getUsageMobilewise() {
    $body = $("body");
    $body.addClass("loading");
    var objectSel = document.getElementById("select_mobileNo");

    dashboardDetailsAJAX.cooparatetUsageMobilewise(objectSel.options[objectSel.selectedIndex].text, gotUsageMobilewise);
}

function gotUsageMobilewise(t) {
    $body = $("body");
    if (t[0] != null) {
        document.getElementById("span_mobileMnthlyR").innerHTML = "Rs. " + t[0].mobile_monthlyRental;
        document.getElementById("span_mobileBilledV").innerHTML = "Rs. " + t[0].mobile_billedValue;
        document.getElementById("span_mobileDueA").innerHTML = "Rs. " + t[0].mobile_DueAmount;
        document.getElementById("span_mobileCurrbillDate").innerHTML = "<small>As at " + t[0].asAt + "</small> ";
        document.getElementById("span_mobileUnbillDuration").innerHTML = "<small>As at " + t[0].asAt + "</small> ";
        document.getElementById("h_usageDetailMobileNo").innerHTML = "Usage Details - <small>As at " + t[0].asAt + "</small> ";
        document.getElementById("span_callCharge").innerHTML = t[0].mobile_callCharge;
        document.getElementById("span_eService").innerHTML = t[0].mobile_eServiceCharge;
        document.getElementById("span_sms").innerHTML = t[0].mobile_smsCharge;
        document.getElementById("span_data").innerHTML = t[0].mobile_dataCharge;
        document.getElementById("span_roaming").innerHTML = t[0].mobile_roamCharge;
        document.getElementById("span_other").innerHTML = t[0].mobile_otherCharge;
        document.getElementById("div_mobiletotalUnbill").innerHTML = "Rs. " + t[0].mobile_totalUnbill;
    }
    if (t[1] != null) {
        /* document.getElementById("dataNrmlUsage").innerHTML = t[1].dataNrmlUsed + "MB/" + t[1].dataNrmlEligible + "MB";
         document.getElementById("dataNrmlExcess").innerHTML = t[1].dataNrmlExcessUsage + "MB";
         document.getElementById("dataNrmlProgress").style.width = t[1].dataNrmlPresentage;*/

//        alert("======isDataNrml============" + t[1].isDataNrml);
        if (t[1].isDataNrml == true) {
            $('#div_nrmlData').show();
            document.getElementById("dataNrmlUsage").innerHTML = t[1].dataNrmlUsed + "MB/" + t[1].dataNrmlEligible + "MB";
            document.getElementById("dataNrmlExcess").innerHTML = t[1].dataNrmlExcessUsage + "MB";
            document.getElementById("dataNrmlProgress").style.width = t[1].dataNrmlPresentage;

        } else {
            $('#div_nrmlData').hide();
        }

//        alert("======isUpaharaData============" + t[1].isUpaharaData);
        if (t[1].isUpaharaData == true) {
            $('#div_dataUpahara').show();
            $('#div_dataUpaharaNght').show();
            document.getElementById("div_dayUpaharaDataUsage").innerHTML = t[1].upaharaDayUsed + "MB/" + t[1].upaharaDayEligible + "MB";
            document.getElementById("span_excessUsage").innerHTML = t[1].dataNrmlExcessUsage + "MB";
            document.getElementById("upaharaPresentage").style.width = t[1].upaharaDayPresentage;

            document.getElementById("div_nghtUpaharaDataUsage").innerHTML = t[1].upaharaNghtUsed + "MB/" + t[1].upaharaNghtEligible + "MB";
            document.getElementById("upaharaNghtPresentage").style.width = t[1].upaharaNghtPresentage;

        } else {
            $('#div_dataUpahara').hide();
            $('#div_dataUpaharaNght').hide();

        }
//        alert("======isRSdata============" + t[1].isRSdata);

        if (t[1].isRSdata == true) {
            $('#div_dataSR').show();
            $('#div_dataSRNght').show();

            document.getElementById("div_daysrDataUsage").innerHTML = t[1].rSDayUsed + "MB/" + t[1].rSDayEligible + "MB";
            document.getElementById("span_excessUsage").innerHTML = t[1].dataNrmlExcessUsage + "MB";
            document.getElementById("srPackegePresentage").style.width = t[1].rSDayPrecentage;

            document.getElementById("div_srDataUsageNght").innerHTML = t[1].rSNghtUsed + "MB/" + t[1].rSNghtEligible + "MB";
            document.getElementById("srPackegeNghtPresentage").style.width = t[1].rSNghtPrecentage;


        } else {
            $('#div_dataSR').hide();
            $('#div_dataSRNght').hide();

        }

//        alert("===========SMS=======");
        if (t[1].isSMSActive == false) {
            $('#div_SMSUsage').hide();
        } else {
            $('#div_SMSUsage').show();
            document.getElementById("lbl_smsUsage").innerHTML = t[1].smsMMUsage + "/" + t[1].smsMMEligible;
            document.getElementById("div_smsProgress").style.width = t[1].smsMMPrecentage;
        }
//        alert("======isLatActive============" + t[1].isLatActive);
        if (t[1].isLatActive == false) {
//            alert("====" + t[0].isLatActive);
            $('#div_dataLateNight').hide();

        } else {
//            alert(t[0].isLatActive);
            $('#div_dataLateNight').show();
            document.getElementById("dataLateUsage").innerHTML = t[1].dataLteUsed + "MB/" + t[1].dataLteEligible + "MB";
//            document.getElementById("dataLateExcess").innerHTML = t[1].dataLteExcessUsage + "MB";
            document.getElementById("dataLateProgress").style.width = t[1].dataLtePresentage;
        }

//        alert("voice====3333=====" + t[1].isVoiceActive);
        if (t[1].isVoiceActive == false) {
//            
            $('#div_voiceUsage').hide();
        } else {
//            alert("voice====3333=Done====");
            $('#div_voiceUsage').show();
            document.getElementById("lbl_voiceUsage").innerHTML = t[1].voiceMMUsed + "mins/" + t[1].voiceMMEligible + "mins";
            document.getElementById("div_voiceProgress").style.width = t[1].voiceMMPresentage;
        }

    }

    $body.removeClass("loading");
}

function getPREDashboardDetails() {
    $body = $("body");
    $body.addClass("loading");
    dashboardDetailsAJAX.packagedetailsPrepaid(gotPREDashboardDetials);
}
function gotPREDashboardDetials(t) {
    $body = $("body");
    if (t[0] != null) {
            document.getElementById("span_accBalance").innerHTML=t[0];
    }
    $body.removeClass("loading");
}

function activationAlert(package_name, pakage_value){
//    alert("Do you want to activate "+ package_name +"?(Package value Rs."+pakage_value+")");
    if(confirm("Do you want to activate "+ package_name +"?(Package value Rs."+pakage_value+".00)")==true){
        activeDelightPackeage("D"+pakage_value);
    }
}

function activeDelightPackeage(x){
    activeDeactiveFeature.activeDelightPackages(x,activatedDelightPackeage);
}

function activatedDelightPackeage(t){
    getPREDashboardDetails();
    alert(t);
}


