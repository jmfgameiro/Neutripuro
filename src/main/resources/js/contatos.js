/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

$( function() {
	$( '#contatos' ).css({ height: $( window ).innerHeight() - 50 });
	$( window ).resize( function() {
		$( '#contatos' ).css({ height: $( window ).innerHeight() - 50 });
	});
    
    
    $( '#footerYear' ).text( new Date().getFullYear() );
});

