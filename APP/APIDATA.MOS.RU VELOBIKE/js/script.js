var apikey = "?api_key=14829ea065bd232db3c4f1796acecbf3";
var link = "https://apidata.mos.ru/v1/datasets/";
var id = "2624";
var param = "/features/"
var query = link + id + param + apikey;

$.getJSON(query, function(data) {

	ymaps.ready(init);

	function init(){    
	    var myMap = new ymaps.Map("map", {
	        center: [55.76, 37.64],
	        zoom: 10
	    });

	    for(var i = 0; i < data.features.length; i++) {
	    	var x = data.features[i].geometry.coordinates[1];
	    	var y = data.features[i].geometry.coordinates[0];

	    	myMap.geoObjects.add(new ymaps.Circle([[x, y], 50]));
	    }
	}
})

