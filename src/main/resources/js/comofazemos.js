/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    $( '#comofazemos' ).css( { height: $( window ).innerHeight() - $( '#navbarIncluded' ).height() } );
    $( '#featuretteDivider' ).css( { margin-top: $( '#navbarIncluded' ).height() } );
}

$( window ).resize( function() {
    $( '#comofazemos' ).css( { height: $( window ).innerHeight() - $( '#navbarIncluded' ).height() } );
    $( '#featuretteDivider' ).css( { margin-top: $( '#navbarIncluded' ).height() } );
});

