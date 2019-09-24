import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";
import { MDCMenu } from '@material/menu';

jQuery(document).ready(() => new myRequests().init());

class myRequests {

    constructor () {
        this.state = {
            sidebarAsModal: false,
            drawer: null
        };
        this.drawer(this.state);
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
        if (context.innerWidth < 1024 && !state.sidebarAsModal) {
            state.sidebarAsModal = true;
            jQuery('.mdc-drawer').addClass('mdc-drawer--modal');
            console.log('hide sidebar');
        }

        if (context.innerWidth > 1024 && state.sidebarAsModal) {
            state.sidebarAsModal = false;
            jQuery('.mdc-drawer').removeClass('mdc-drawer--modal');
            state.drawer.open = false;
        }
    }

    init () {
        const state = this.state;
        const dropDown = this.dropDown;
        jQuery('.mdc-data-table__cell-dots').click(function () { dropDown(this) });
        const changeSideBarType = this.changeSideBarType;
        jQuery(window).resize(function () { changeSideBarType(this, state) });
        this.changeSideBarType(window, state);
    }
}


