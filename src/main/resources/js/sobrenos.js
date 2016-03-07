/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    $( '#sobrenos' ).css({ height: $( window ).innerHeight() - 50 });
}

$( window ).resize( function() {
    $( '#sobrenos' ).css({ height: $( window ).innerHeight() - 50 });
});

