/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/

$( function() {
	$( '#home' ).css({ height: $( window ).innerHeight() - 50 });
	//$( '#quemsomos, #oquefazemos, #ondeestamos' ).css({ height: $( window ).innerHeight() });
	$( window ).resize( function() {
		$( '#home' ).css({ height: $( window ).innerHeight() - 50 });
		//$( '#quemsomos, #oquefazemos, #ondeestamos' ).css({ height: $( window ).innerHeight() });
	});
});

/*function init_map() {
	var var_location = new google.maps.LatLng( 45.430817, 12.331516 );
	var var_mapoptions = { center: var_location, zoom: 14 };
	var var_marker = new google.maps.Marker( { position: var_location, map: var_map, title:"Venice"} );
	var var_map = new google.maps.Map( document.getElementById( "map-container" ), var_mapoptions );
	var_marker.setMap( var_map );
}

google.maps.event.addDomListener( window, 'load', init_map );*/

function initialize() {
	//
	var position = new google.maps.LatLng( 39.426260, -9.161524 );
	var positionA8 = new google.maps.LatLng( 39.419033, -9.152726 );
	
	//
	var mapOptions = {
			center: position,
			zoom: 16,
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

