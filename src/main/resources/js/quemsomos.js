/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    $( '#quemsomos' ).css({ height: $( window ).innerHeight() - 50 });
}

$( window ).resize( function() {
    $( '#quemsomos' ).css({ height: $( window ).innerHeight() - 50 });
});

