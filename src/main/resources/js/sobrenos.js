/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    $( '#sobrenos' ).css( { height: $( window ).innerHeight() - $( '#navbarIncluded' ).height() } );
    $( '#featurette-divider' ).css( { margin-top: $( '#navbarIncluded' ).height() } );
}

$( window ).resize( function() {
    $( '#sobrenos' ).css( { height: $( window ).innerHeight() - $( '#navbarIncluded' ).height() } );
    $( '#featurette-divider' ).css( { margin-top: $( '#navbarIncluded' ).height() } );
});

