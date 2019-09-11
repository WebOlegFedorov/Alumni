import {MDCRipple} from '@material/ripple';//button
import {MDCChipSet} from '@material/chips';//chips
import {MDCDataTable} from '@material/data-table';

window.onload = function() {
    console.log(document.querySelector('.mdc-data-table'))
    // const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
    // const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));//button



    const chipSetEl = document.querySelector('.mdc-chip-set');//chips
    const chipSet = new MDCChipSet(chipSetEl);//chips


    /*Check the number of notifications in the header of the page
    (If notifications number is less then 10, or more then 10).
    According to it - change "left" css property of number(inside heart icon)*/ 

    function checkNotifNumber() {
        let notifNumberBlock = document.getElementById("header-notifications--number");
        let notifNumberText = document.getElementById("header-notifications--number").innerText;
        if (notifNumberText < 10 ) {
            notifNumberBlock.style.right = "12px";
        }
        else {
            notifNumberBlock.style.right = "8px";
        }
    }
    setInterval(checkNotifNumber, 500);
}

$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});