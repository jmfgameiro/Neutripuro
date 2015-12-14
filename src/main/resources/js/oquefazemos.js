/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

$( function() {
	$( '#oquefazemos' ).css({ height: $( window ).innerHeight() - 50 });
	$( window ).resize( function() {
		$( '#oquefazemos' ).css({ height: $( window ).innerHeight() - 50 });
	});
    
    
    $( '#footerYear' ).text( new Date().getFullYear() );
});

