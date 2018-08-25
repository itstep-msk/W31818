var weatherTemp = $(".weather-temp");
var weatherCity = $(".weather-city");
var weatherIcon = $(".weather-icon");
var current = 273.15;
var iconLink = "http://openweathermap.org/img/w/";

$.getJSON("https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=ca8c2c7970a09dc296d9b3cfc4d06940",
	function(data) {
		var temp = data.main.temp - current;
		temp = temp.toFixed()

		weatherTemp.html(temp)
		weatherCity.html(data.name);
		weatherIcon.attr("src", iconLink + data.weather[0].icon + ".png");

		console.log(data)
	})