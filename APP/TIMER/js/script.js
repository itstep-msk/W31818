var el = {
	minutes: document.querySelector(".minutes"),
	seconds: document.querySelector(".seconds"),
	numbers: document.querySelector(".numbers"),
	circle: document.querySelector(".circle"),
}

var minutes = 0;
var lastSeconds = 0;
var step = 6;
var timer;
var propeller = new Propeller(el.numbers);

el.numbers.addEventListener("mouseup", function() {
	timer = setInterval(startTimer, 10)
})

// Собственный
propeller.getSeconds = function() {
	return Math.floor(this.angle/step);
}

// Стандартный
propeller.onRotate = function() {
	setValue(this.getSeconds());
	checkValue(this.getSeconds())
}

function checkValue(s) {
	if(s >= 0 && s <= 10 && lastSeconds <= 59 && lastSeconds >= 50) {
		minutes++;
	}
	if(s <= 59 && s >= 50 && lastSeconds >= 0 && lastSeconds <= 10) {
		minutes--;
	}

	lastSeconds = s;
}

function startTimer() {
	if(propeller.getSeconds() == 0 && minutes == 0) {
		clearInterval(timer);
		propeller.angle = step;
	}

	propeller.angle -= step;
}

function setValue(s) {
	el.seconds.innerHTML = s;
	el.minutes.innerHTML = minutes;
	
	if(el.seconds.innerHTML.length < 2) {
		el.seconds.innerHTML = "0" + el.seconds.innerHTML
	}

	if(el.minutes.innerHTML.length < 2) {
		el.minutes.innerHTML = "0" + el.minutes.innerHTML
	}
}

function setDefaultValue() {
	el.minutes.innerHTML = "00";
	el.seconds.innerHTML = "00";
}

setDefaultValue();