import { MDCRipple } from '@material/ripple';
jQuery(document).ready(() => new Profile().init());

class Profile {

    constructor () {
        console.log('here');
    }

    buttonAnimation () {
        document.querySelectorAll('.mdc-button').forEach(elem => new MDCRipple(elem));
    }

    init () {
        this.buttonAnimation();
    }
}


