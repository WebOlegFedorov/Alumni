import { MDCRipple } from '@material/ripple';
import { MDCChipSet } from '@material/chips';
import { MDCDrawer } from "@material/drawer";
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCMenu } from '@material/menu';
import { MDCTextField } from '@material/textfield';


window.onload = function() {
    
    if ($('div').hasClass('mdc-chip-set')) {
        const chipSetEl = document.querySelector('.mdc-chip-set');
        const chipSet = new MDCChipSet(chipSetEl);
    }

    /*Dropdown menu*/
    const menu = new MDCMenu(document.querySelector('.mdc-menu'));
    $('#header-menu-button').click(function() {
        $('#header-dropdown-menu').toggleClass('mdc-menu-surface--open');
    })

    if($('div').hasClass('mdc-button')) { /* Check if current page contains mdc-button  - then initialize Ripple effect*/
        const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));//button
    }
    
    if($('div').hasClass('mdc-text-field')) { /* Check if current page contains inputs*/
        const textField1 = new MDCTextField(document.querySelector('.mdc-text-field1'));
        const textField2 = new MDCTextField(document.querySelector('.mdc-text-field2'));
        const textField3 = new MDCTextField(document.querySelector('.mdc-text-field3'));
        const textField4 = new MDCTextField(document.querySelector('.mdc-text-field4'));
    }
    

    /*Check the number of notifications in the header of the page
    (If notifications number is less then 10, or more then 10).
    According to it - change "left" css property of number(inside heart icon)*/ 
    function checkNotifNumber() {
        /*Check if current page header contains div with notification number(inside heart)*/
        if($('p').hasClass('header-notifications--number') ){
            let notifNumberBlock = document.getElementById("header-notifications--number");
            let notifNumberText = document.getElementById("header-notifications--number").innerText;
            if (notifNumberText < 10 ) {
                notifNumberBlock.style.right = "12px";
            }
            else {
                notifNumberBlock.style.right = "8px";
            }
        }
        
    }
    setInterval(checkNotifNumber, 500);
}



	