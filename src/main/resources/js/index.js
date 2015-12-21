/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

$( function() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    
    var v_height = $( window ).innerHeight();
    if( $( '#home' ).height > v_height )
        v_height = $( '#home' ).height;
    
	$( '#home' ).css({ height: v_height });
	$( window ).resize( function() {
		$( '#home' ).css({ height: v_height });
	});
    
    if ( supports('textShadow') )
        $( '#cssanimations' ).text( 'true' );
    else
        $( '#cssanimations' ).text( 'false' );
});

var supports = ( function() {
   var div = document.createElement( 'div' ),
      vendors = 'Khtml Ms O Moz Webkit'.split( ' ' ),
      len = vendors.length;
 
   return function( prop ) {
      if ( prop in div.style ) return true;
 
      prop = prop.replace(/^[a-z]/, function( val ) {
         return val.toUpperCase();
      });
 
      while( len-- ) {
         if ( vendors[len] + prop in div.style ) {
            // browser supports box-shadow. Do what you need.
            // Or use a bang (!) to test if the browser doesn't.
            return true;
         } 
      }
      return false;
   };
})();
