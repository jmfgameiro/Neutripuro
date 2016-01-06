/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    
    var v_height = $( window ).height();
    if( $( 'html' ).height() > v_height )
        v_height = $( '#html' ).height();
    
	$( '#home' ).css({ height: v_height });
}

$( window ).resize( function() {
    var v_height = $( window ).height();
    if( $( '#html' ).height() > v_height )
        v_height = $( '#html' ).height();
    
    $( '#home' ).css({ height: v_height });
});
