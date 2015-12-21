/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

$( function() {
	$( '#comofazemos' ).css({ height: $( window ).innerHeight() - 50 });
	$( window ).resize( function() {
		$( '#comofazemos' ).css({ height: $( window ).innerHeight() - 50 });
	});
    
    
    $( '#footerYear' ).text( new Date().getFullYear() );
});

