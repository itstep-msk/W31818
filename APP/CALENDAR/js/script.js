var date = new Date();
var el = {
	days: $(".days"),
	month: {
		prev: $(".month-prev"),
		current: $(".month-current"),
		next: $(".month-next")
	},
	year: {
		current: $(".year-current")
	}
}
var template = {
	day: "<div class='day'></div>"
}
var monthList = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]

Date.prototype.getDayInMonth = function() {
	return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
}

function outputMonth() {
	el.month.prev.on("click", switchMonth.bind(null, -1));
	el.month.next.on("click", switchMonth.bind(null, 1));
	el.month.current.html(monthList[date.getMonth()]);
	el.year.current.html(date.getFullYear());

	function switchMonth(n) {
		date = new Date(date.getFullYear(), date.getMonth() + n);
		el.year.current.html(date.getFullYear());
		el.month.current.html(monthList[date.getMonth()]);
		addDays();
		selectThisDay();
	}
}

function addDays() {
	el.days.empty();

	for(var i = 1; i <= date.getDayInMonth(); i++) {
		el.days.append(template.day).find(".day").last().html(i).attr("data-day", i);
	}
}

function selectThisDay() {
	var thisDate = new Date();

	if(thisDate.getFullYear() == date.getFullYear() && thisDate.getMonth() == date.getMonth()) {
		$(".day[data-day='" + thisDate.getDate() + "']").addClass("current-day")
	}
}

function init() {
	addDays();
	outputMonth();
	selectThisDay();
}

init();