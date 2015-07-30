/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getLedger() {
    // alert("====alert====");
    cooparateHome.getLedgerDetails(gotledger);
}

function gotledger(t) {
    var tableStr_1 = "<table class='table table-striped table-bordered'><thead><tr><th>Date</td><td>Narration</th><th>Document Code</th><th>Document No</th><th>Dr/Cr</th><th>Amount</th><th>Balanace</th></tr></thead><tbody>";
    if (t != null) {
        // alert(t[0]);
        if (t[0] == true) {
            var ledgerList = t[1];
            for (var i = 0; i < ledgerList.length; i++) {
//                alert("-----num -----"+i);
//                alert("======"+ledgerList[i].transDate+"======"+ledgerList[i].narration+"======"+ledgerList[i].amount);
                tableStr_1 += "<tr><td>" + ledgerList[i].transDate + "</td><td>" + ledgerList[i].narration + "</td><td>" +
                        ledgerList[i].transTypeCode + "</td><td>" + ledgerList[i].transDocNo + "</td><td>" + ledgerList[i].transactionType + "</td><td>" +
                        ledgerList[i].amount.toFixed(2) + "</td><td>"+ledgerList[i].balanlce.toFixed(2)+"</td></tr>";
            }
            tableStr_1 += "</tbody></table>";
//            alert(tableStr_1);
            document.getElementById("div_ledgerView").innerHTML = tableStr_1;

        } else {
            document.getElementById("div_ledgerView").innerHTML = t[1];

        }
    }
}

function getCoparateUsageList() {
    document.getElementById("div_copUsageList").innerHTML = "Please Wait...";
    cooparateHome.getCoparateUsageList(gotCoparateUsageList);
}
function gotCoparateUsageList(t) {
    $body = $("body");
    if (t[0]) {
        var usageList = t[1];
        var str = ""
        var tableStr_1 = "<table class='table table-striped table-bordered'><thead><tr><th rowspan='2' scope='col'>Service Number</th>" +
                "<th colspan='3' scope='col'>Data Usage</th><th  rowspan='2' scope='col'>Voice</th><th rowspan='2' scope='col'>SMS</th>" +
                "</tr><tr><th scope='col'>Day</th><th scope='col'>Night</th><th>Excess</th></tr></thead><tbody>";
        for (i = 0; i < usageList.length; i++) {
            str += "<tr><td>" + usageList[i].mobile_no + "</td>";
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
            str += "<td>" + usageList[i].dataNrmlExcessUsage + "</td>";
            if (usageList[i].isVoiceActive) {
                str += "<td>" + usageList[i].voiceMMUsed + "</td>";
            } else {
                str += "<td> -- </td>";
            }

            if (usageList[i].isSMSActive) {
                str += "<td>" + usageList[i].smsMMUsage + "</td>";
            } else {
                str += "<td> -- </td>";
            }
            str += "</tr>"

        }


        var tableStr_2 = "</tbody></table>";
        str += tableStr_2;
        tableStr_1 += str;
        document.getElementById("div_copUsageList").innerHTML = tableStr_1;

    } else {
        document.getElementById("div_copUsageList").innerHTML = t[1];
    }
}


