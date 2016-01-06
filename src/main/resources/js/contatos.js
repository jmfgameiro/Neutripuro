/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    $( '#contatos' ).css({ height: $( window ).innerHeight() - 50 });
}

$( window ).resize( function() {
    $( '#contatos' ).css({ height: $( window ).innerHeight() - 50 });
});
