/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    $( '#oquefazemos' ).css({ height: $( window ).innerHeight() - 50 });
}

$( window ).resize( function() {
    $( '#oquefazemos' ).css({ height: $( window ).innerHeight() - 50 });
});

