var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var y = canvas.height-88;
var grandmas = [];

grandmas.push(canvas.width)

// В canvas загрузка изображений происходит через создание экземпляра класса Image
var grandma = new Image();

grandma.src = "img/grandma.png";

function moveGrandma() {
	for(var i = 0; i < grandmas.length; i++) {
		grandmas[i]--;
		ctx.drawImage(grandma,grandmas[i],y,130,100);

		if(grandmas[i] == 400) {
			grandmas.push(canvas.width + Math.floor(Math.random() * 100))
		}
	}
	
}

// Для отрисовки используется метов drawImage
//drawImage(Ссылка на изображение, x,y)
/*
 ИЗОБРАЖЕНИЯ ГРУЗЯТСЯ АСИНХРОННО.
*/
function draw() {
	moveGrandma();
	// requestAnimationFrame - аналог setInterval, создан для плавной анимации
	requestAnimationFrame(draw);
}

// Когда прогрузится изображение выполнится функция draw
grandma.onload = draw