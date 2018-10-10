var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");

clock();

function clock() {
	var date = new Date();
	hour.style.transform = "rotateZ(" + (360 / 12 * date.getHours()) + "deg)";
	minute.style.transform = "rotateZ(" + (360 / 60 * date.getMinutes()) + "deg)";
	second.style.transform = "rotateZ(" + (360 / 60 * date.getSeconds()) + "deg)";
}

setInterval(clock,1000)