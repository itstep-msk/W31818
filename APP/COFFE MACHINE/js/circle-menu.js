var box;
var boxCount;
var step;
var item;
var menu = $(".circle-menu");
var button = $(".circle-menu__button");
var coffeList = bosch.coffeList();
var keyCoffeList = Object.keys(coffeList);

for(var i = 0; i < keyCoffeList.length; i++) {
	menu.append("<div class='circle-menu__item'></div>");
	menu.find(".circle-menu__item").last().attr("data-coffe", keyCoffeList[i]);
}
// Находим все item
item = menu.find(".circle-menu__item");

// Оборачиваем все item в box
item.wrap("<div class='circle-menu__box'></div>");

// Прослушиваем событие клик на item
item.on("click", function() {
	var coffe = $(this).attr("data-coffe");
	// УДАЛИТЬ
	bosch.waterAmount(1000);
	bosch.changeCoffe(coffe);
	bosch.run();
})

//Находим все box
box = menu.find(".circle-menu__box");
boxCount = box.length;
step = 360/boxCount;

// Применяем css на все box
for(var i = 0; i < boxCount; i++) {
	box.eq(i).css({"transform":"rotateZ(" + step*i + "deg)"})
}

button.on("click", function() {
	item.toggleClass("active");
	menu.toggleClass("active");
})