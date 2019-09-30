import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";
import { MDCMenu } from '@material/menu';

jQuery(document).ready(() => new myRequests().init());

class myRequests {

    constructor () {
        this.state = {
            fixedSideBar: true,
            drawer: null
        };
        this.drawer(this.state);
    }

    dropDown (context) {
        new MDCMenu(jQuery(context).parent().find('.mdc-menu')[0]).open = true;
    }

    drawer (state) {
        state.drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
        const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
        topAppBar.setScrollTarget(document.getElementById('main-content'));
        topAppBar.listen('MDCTopAppBar:nav', () => state.drawer.open = !state.drawer.open);
    }

    changeSideBarType (context, state) {
        if (context.innerWidth < 1024 && state.fixedSideBar) {
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

    openMenu () {
        const menu = new MDCMenu(document.querySelector('.mdc-menu'));
        menu.open = !menu.open;
    }
    
    init () {
        jQuery('.open-submenu').click(() => this.openMenu());
        const state = this.state;
        const dropDown = this.dropDown;
        const changeSideBarType = this.changeSideBarType;
        jQuery(window).resize(function () { changeSideBarType(this, state) });
        setTimeout(() => {
            this.initSideBar(window, state);
        })
    }
}


