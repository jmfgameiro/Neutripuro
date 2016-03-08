/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    $( '#oquefazemos' ).css( { height: $( window ).innerHeight() - $( '#navbarIncluded' ).height() } );
}

$( window ).resize( function() {
    $( '#oquefazemos' ).css( { height: $( window ).innerHeight() - $( '#navbarIncluded' ).height() } );
});

