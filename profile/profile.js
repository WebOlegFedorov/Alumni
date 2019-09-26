import { MDCRipple } from '@material/ripple';
import { MDCMenu } from '@material/menu';
jQuery(document).ready(() => new Profile().init());

class Profile {

    constructor () {

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
    }
}


