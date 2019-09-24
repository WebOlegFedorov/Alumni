import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";

jQuery(document).ready(() => new myRequests().init());

class myRequests {

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
        topAppBar.setScrollTarget(document.getElementById('main-content'));
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

    changeTab (context) {//context = clicked element
        console.log(context);
        $('.graph-tab').removeClass("graph-tab-active");
        $(context).addClass("graph-tab-active");
		var currentId = $('.graph-tab').index(context);
        console.log(currentId);
        $('.one-tab-info').css('display','none');
        $('.one-tab-info').eq(currentId).css('display','block');
    }

    init () {
        const state = this.state;
        const changeSideBarType = this.changeSideBarType;
        jQuery(window).resize(function () { changeSideBarType(this, state) });
        setTimeout(() => {
            this.initSideBar(window, state);
        })

        const changeTab = this.changeTab;
        jQuery('.graph-tab').click(function () { changeTab(this) })
    }
}


