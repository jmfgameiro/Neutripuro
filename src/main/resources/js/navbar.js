$( function(){
    var getImport = $( '#navbar-file' );
    var getContent = getImport.import.querySelector( '#navbar-container' );
    $( "#navbarIncluded" ).html( document.importNode( getContent, true ) ); 
} );