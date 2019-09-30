import { MDCDrawer } from "@material/drawer";
import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCTextField } from "@material/textfield";
import { MDCSelect } from '@material/select';
import {MDCRipple} from "@material/ripple";

jQuery(document).ready(() => new CV().init());

class CV {
    constructor () {
        this.state = {
            fixedSideBar: true,
            drawer: null
        };
        this.drawer(this.state);
    }

    drawer (state) {
        state.drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
        const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
        // topAppBar.setScrollTarget(document.getElementById('main-content'));
        topAppBar.listen('MDCTopAppBar:nav', () => state.drawer.open = !state.drawer.open);
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

    initAnimation () {
        document.querySelectorAll('.mdc-select').forEach(select => new MDCSelect(select));
        document.querySelectorAll('.mdc-text-field').forEach(input => new MDCTextField(input));
        document.querySelectorAll('.mdc-button').forEach(elem => new MDCRipple(elem));
    }

    init () {
        const state = this.state;
        this.initAnimation();
        const changeSideBarType = this.changeSideBarType;
        jQuery(window).resize(function () { changeSideBarType(this, state) });
        this.initSideBar(window, state);
    }
}


