/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    var navbarHeight = $( '#navbarIncluded' ).height();
    $( '#oquefazemos' ).css( { height: $( window ).innerHeight() - navbarHeight } );
    $( '.featurette-divider' ).css( 'margin-top': '' + navbarHeight + 'px' );
}

$( window ).resize( function() {
    var navbarHeight = $( '#navbarIncluded' ).height();
    $( '#oquefazemos' ).css( { height: $( window ).innerHeight() - navbarHeight } );
    $( '.featurette-divider' ).css( 'margin-top': '' + navbarHeight + 'px' );
});

