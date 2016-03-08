/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    $( '#contatos' ).css( { height: $( window ).innerHeight() - $( '#navbarIncluded' ).height() } );
}

$( window ).resize( function() {
    $( '#contatos' ).css( { height: $( window ).innerHeight() - $( '#navbarIncluded' ).height() } );
});
