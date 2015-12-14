/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

$( function() {
	$( '#quemsomos' ).css({ height: $( window ).innerHeight() - 50 });
	$( window ).resize( function() {
		$( '#quemsomos' ).css({ height: $( window ).innerHeight() - 50 });
	});
    
    
    $( '#footerYear' ).text( new Date().getFullYear() );
});

