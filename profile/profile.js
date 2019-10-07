import { MDCRipple } from '@material/ripple';
import { MDCMenu } from '@material/menu';
import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";
import { MDCTextField } from '@material/textfield';

jQuery(document).ready(() => new Profile().init());

class Profile {

    constructor () {
        this.state = {
            fixedSideBar: true,
            drawer: null
        };
        this.drawer(this.state);
            
    if($('div').hasClass('mdc-text-field')) { /* Check if current page contains inputs*/
        const textField1 = new MDCTextField(document.querySelector('.mdc-text-field1'));
        const textField2 = new MDCTextField(document.querySelector('.mdc-text-field2'));
        const textField3 = new MDCTextField(document.querySelector('.mdc-text-field3'));
        const textField4 = new MDCTextField(document.querySelector('.mdc-text-field4'));
    }
    }

    drawer (state) {
        state.drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
        const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
        topAppBar.setScrollTarget(document.getElementById('main-content'));
        topAppBar.listen('MDCTopAppBar:nav', () => state.drawer.open = !state.drawer.open);
    }

    dropDown (context) {
        new MDCMenu(jQuery(context).parent().find('.mdc-menu')[0]).open = true;
    }

    changeSideBarType (context, state) {
        if (context.innerWidth < 1024 && state.fixedSideBar) {
            console.log('hew1');
            state.fixedSideBar = false;
            jQuery('.mdc-drawer').addClass('mdc-drawer--modal');
        }

        if (context.innerWidth > 1024 && !state.fixedSideBar) {
            state.drawer.open = false;
            state.fixedSideBar = true;
            jQuery('.mdc-drawer').removeClass('mdc-drawer--modal');
        }
    }

    initSideBar (context, state) {
        if (context.innerWidth < 1024) {
            state.fixedSideBar = false;
            jQuery('.mdc-drawer').addClass('mdc-drawer--modal');
        } else {
            state.fixedSideBar = true;
            jQuery('.mdc-drawer').removeClass('mdc-drawer--modal');
        }
    }

    buttonAnimation () {
        document.querySelectorAll('.mdc-button').forEach(elem => new MDCRipple(elem));
    }

    openMenu () {
        const menu = new MDCMenu(document.querySelector('.mdc-menu'));
        menu.open = !menu.open;
    }

    init () {
        this.buttonAnimation();
        jQuery('.open-submenu').click(() => this.openMenu());
        const state = this.state;
        const dropDown = this.dropDown;
        const changeSideBarType = this.changeSideBarType;
        jQuery(window).resize(function () { changeSideBarType(this, state) });
        this.initSideBar(window, state);
    }
}


