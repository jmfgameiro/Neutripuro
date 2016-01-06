/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    $( '#comofazemos' ).css({ height: $( window ).innerHeight() - 50 });
}

$( window ).resize( function() {
    $( '#comofazemos' ).css({ height: $( window ).innerHeight() - 50 });
});

