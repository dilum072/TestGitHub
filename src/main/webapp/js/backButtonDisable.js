/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function backButtonOverride() {
    setTimeout("backButtonOverrideBody()", 1);
}

function backButtonOverrideBody() {
    var x = 1312;
    window.history.forward(1);
}
