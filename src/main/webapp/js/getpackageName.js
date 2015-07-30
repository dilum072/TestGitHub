/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getPackageName() {
//    $body = $("body");
//    $body.addClass("loading");

    dashboardDetailsAJAX.getpackageName(gotPackageName);
}

function gotPackageName(t) {
    //  alert(t);
//    $body = $("body");
    if (t != null) {
        document.getElementById("h_packageName").innerHTML = t[1] + "<small></small>";
        document.getElementById("h_mobileNo").innerHTML = t[0];
    } else {
        document.getElementById("h_packageName").innerHTML = "xxxxxxxx <small>(xxxxxxx )</small>";
        document.getElementById("h_mobileNo").innerHTML = "071xxxxxx";
    }

//    $body.removeClass("loading");
}

