function initialize(){
	var mapOptions={
		zoom: 10, // 0 à 21
		center: new google.maps.LatLng(48.53,1.47), // centre de la carte
		mapTypeId: google.maps.MapTypeId.ROADMAP, // ROADMAP, SATELLITE, HYBRID, TERRAIN
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	var image = "img/marker.png";
	var myLatLng = new google.maps.LatLng(48.536389,1.476030);
	var marker = new google.maps.Marker ({
		position: myLatLng,
		map: map,
		icon: image,
		titre: "Berchères-Saint-Germain"
	});
}
