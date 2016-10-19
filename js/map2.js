var villes = [
	['Chartres', '4 Rue du Préau, 28300' ,  48.448452, 1.491448, 'img/markerG.png'],
	['Berchères-Saint-Germain', '34 rue de la tannerie 28000', 48.536389, 1.476030, 'img/markerY.png']
];

function initialize(){
	var mapOptions={
		zoom: 9, // 0 à 21
		center: new google.maps.LatLng(48.48,1.48), // centre de la carte
		mapTypeId: google.maps.MapTypeId.ROADMAP, // ROADMAP, SATELLITE, HYBRID, TERRAIN
	}
	var map = new google.maps.Map(document.getElementById("MapBrechere"), mapOptions);
	setMarkers(map,villes);
}

function setMarkers(map,locations){
	for(var i=0; i<locations.length; i++){
		var villes = locations[i];
		var myLatLng = new google.maps.LatLng(villes[2],villes[3]);
		var infoWindow = new google.maps.InfoWindow();
		var marker = new google.maps.Marker ({
			position: myLatLng,
			map: map,
			icon: villes[4],
			animation: google.maps.Animation.DROP
		});
		(function(i){
			google.maps.event.addListener(marker, "click", function(){
				var villes = locations[i];
				infoWindow.close();
				infoWindow.setContent('<div style="color:#000;">'+villes[0]+'<br />'+villes[1]+'</div>');
				infoWindow.open(map, this);
			});
		})(i);
	}
}
