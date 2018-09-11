var box;
var boxCount;
var step;
var menu = $(".circle-menu");
var button = $(".circle-menu__button");
var item = $(".circle-menu__item");

// Находим все item и оборачиваем в box
item.wrap("<div class='circle-menu__box'></div>");

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
})