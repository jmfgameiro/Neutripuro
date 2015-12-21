/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

$( function() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    
    var v_height = $( window ).innerHeight();
    if( $( '#home' ).height > v_height )
        v_height = $( '#home' ).height;
    
	$( '#home' ).css({ height: v_height });
	$( window ).resize( function() {
		$( '#home' ).css({ height: v_height });
	});
    
});
