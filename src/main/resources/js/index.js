/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

$( function() {
	$( '#home' ).css({ height: $( window ).innerHeight() });
	$( window ).resize( function() {
		$( '#home' ).css({ height: $( window ).innerHeight() });
	});
    
    
    $( '#footerYear' ).text( new Date().getFullYear() );
});

