/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function pop(div) {
    document.getElementById(div).style.display = 'block';
}
function hide(div) {
    document.getElementById(div).style.display = 'none';
}
//To detect escape button
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        hide('popDiv');
    }
};

