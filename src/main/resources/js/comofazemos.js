/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    var navbarHeight = $( '#navbarIncluded' ).height();
    $( '#comofazemos' ).css( { height: $( window ).innerHeight() - navbarHeight } );
    $( '.featurette-divider' ).css( "margin-top": navbarHeight );
}

$( window ).resize( function() {
    var navbarHeight = $( '#navbarIncluded' ).height();
    $( '#comofazemos' ).css( { height: $( window ).innerHeight() - navbarHeight } );
    $( '.featurette-divider' ).css( "margin-top": navbarHeight );
});

