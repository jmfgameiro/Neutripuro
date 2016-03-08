/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

function body_load() {
    $( '#footerYear' ).text( new Date().getFullYear() );
    $( '#contatos' ).css( { height: $( window ).innerHeight() - $( '#navbarIncluded' ).height() } );
}

$( window ).resize( function() {
    $( '#contatos' ).css( { height: $( window ).innerHeight() - $( '#navbarIncluded' ).height() } );
});

function initialize() {
	//
	var position = new google.maps.LatLng( 39.426260, -9.161524 );
	var positionA8 = new google.maps.LatLng( 39.419033, -9.152726 );
	
	//
	var mapOptions = {
			center: position,
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map( document.getElementById( "map-container" ), mapOptions );
	
	//
	var marker = new google.maps.Marker( { position: position, map: map, title: 'Neutripuro', label: 'Neutripuro' } );
	var bounds = new google.maps.LatLngBounds();
	bounds.extend( position );
	bounds.extend( positionA8 );
	map.fitBounds( bounds );
}

google.maps.event.addDomListener( window, 'load', initialize );
