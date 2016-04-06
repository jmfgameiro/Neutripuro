/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/


function bodyLoad() {
    $('#footerYear').text(new Date().getFullYear());
}
$(function () {
    $('#navbarIncluded').load("/global/navbar.html");
});

