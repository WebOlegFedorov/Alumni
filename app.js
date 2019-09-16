import { MDCRipple } from '@material/ripple';
import { MDCChipSet } from '@material/chips';
import { MDCDataTable } from '@material/data-table';
import { MDCDrawer } from "@material/drawer";
import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCMenu } from '@material/menu';

// const menu = new MDCMenu(document.querySelector('.mdc-menu'));
// menu.open = true;


// document.getElementById ("checkAllTopicCheckBoxes").addEventListener ("click", openMenu, false);
// function openMenu() {
//     console.log('asds');
//     menu.open = true;
// }

window.onload = function() {
    $('.mdc-data-table__cell-dots').click(function() {

        if( $(this).parent().find('.mdc-menu-surface').hasClass("mdc-menu-surface--open")) {
            $(this).parent().find('.mdc-menu-surface').removeClass("mdc-menu-surface--open");
        }
        else {
        $('.mdc-data-table__cell-dots').parent().find('.mdc-menu-surface').removeClass("mdc-menu-surface--open");

            $(this).parent().find('.mdc-menu-surface').addClass("mdc-menu-surface--open");
        
        }
    }) 
    // $('div:not(.mdc-data-table__cell-dots)').click(function() {
    //     console
    //     $(this).parent().find('.mdc-menu-surface').removeClass("mdc-menu-surface--open");
    // })
    
    /*Drawer*/ 
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
    topAppBar.setScrollTarget(document.getElementById('main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
    });

    /*popup menu for "My requests" page. Becomes visible after click on three dots.*/ 

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



	