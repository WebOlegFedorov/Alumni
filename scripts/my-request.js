
import { MDCDataTable } from './@material/data-table';

console.log("HIII");
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));/*My Requests page*/

/*My Requests page. Show/hide menu after click on 3 dots*/
$('.mdc-data-table__cell-dots').click(function() {

    if( $(this).parent().find('.mdc-menu-surface').hasClass("mdc-menu-surface--open")) {
        $(this).parent().find('.mdc-menu-surface').removeClass("mdc-menu-surface--open");
    }
    else {
        $('.mdc-data-table__cell-dots').parent().find('.mdc-menu-surface').removeClass("mdc-menu-surface--open");
        $(this).parent().find('.mdc-menu-surface').addClass("mdc-menu-surface--open");
    }
}) 