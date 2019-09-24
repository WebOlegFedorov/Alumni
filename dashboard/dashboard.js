jQuery(document).ready(() => new Dashboard().init());

class Dashboard {
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