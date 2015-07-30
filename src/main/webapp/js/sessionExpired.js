/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



// session expired check javascript

function isSessionLive() {
    IsSessionExpired.isUserExits(sessionCheck);
}

function sessionCheck(t) {
    if (t) {
        $('#main_body').hide();
        // document.write("You will be redirected to main page in 10 sec.");
        setTimeout('Redirect()', 0);
    }
}
function Redirect()
{
    var confirmMessage = "Session expired. Re-login to continue.";
    if (confirm(confirmMessage) === false)
    {
        return false;
    } else {
        window.location = "login.jsp";
    }
}


var timeOut = 1000 * 60 * 30; // 30 minutes
var lastActivity = new Date().getTime();
var checkTimeout;
checkTimeOut = function() {
    if (new Date().getTime() > lastActivity + timeOut) {
        // redirect to timeout page
    } else {
        window.setTimeout(checkTimeOut, 1000); // check once per second
    }
}


function backButton() {
    alert("test------");
    BackButtonSession.sessionClear(success);
    alert("--------------");

}
function success(t) {
    alert(t);
}