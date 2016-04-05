/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function bodyLoad() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    
    var vHeight = $( '#home-container' ).height();
    if( vHeight > $( window ).height() )
        $( '#home' ).css( { height: vHeight } );
}

$( window ).resize( function() {
    var vHeight = $( '#home-container' ).height();
    if( vHeight > $( window ).height() )
        $( '#home' ).css( { height: vHeight } );
});
