var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");
var clock = document.querySelector(".clock");
var date;

function timer() {
	date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();

	hours.style.transform = "rotateZ(" + h*30 + "deg)";
	minutes.style.transform = "rotateZ(" + m*6 + "deg)";
	
	clock.style.background = "rgb(" + h*4 + "," + m*4 + "," + s*4 + ")";
}

function timerSeconds() {
	date = new Date();
	var s = date.getSeconds();
	var ms = date.getMilliseconds();

	seconds.style.transform = "rotateZ(" + (s+(ms/1000))*6 + "deg)";
}

setInterval(timer,1000);
setInterval(timerSeconds);