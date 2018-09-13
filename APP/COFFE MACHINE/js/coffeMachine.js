	function CoffeMachine(capacity) {
		var waterAmount = 0;
		var count = 0;
		var i;
		var selectedCoffe;
		var resolution = false;
		var typeWaterAmout;

		var typeCoffe = {
			latte: {
				waterAmount: 500,
				count: 1
			},
			americano: {
				waterAmount: 300,
				count: 5
			},
			espresso: {
				waterAmount: 100,
				count: 3
			}
		}

		this.coffeList = function(key, valueObject) {
			if(arguments.length == 0) {
				return typeCoffe;
			} else {
				typeCoffe[key] = valueObject
			}
		}

		function onReady() {
			count--;
			console.log("Ваш " + selectedCoffe + " будет готов через: " + count);
			if(count == 0) {
				clearInterval(i);
				waterAmount -= typeWaterAmout;
				console.log("Ваше " + selectedCoffe + " готов.");
				console.log(waterAmount);
			}
			console.log(waterAmount);
		}

		this.waterAmount = function(amount) {
			if(amount == undefined) {
				console.log(waterAmount);
				return;
			}

			if(amount <= 0) {
				console.log("Недопустимое количество воды...");
				return;
			}

			if(amount >= capacity) {
				waterAmount = capacity;
			} else {
				waterAmount = amount;
			}
		}

		this.changeCoffe = function(type) {
			selectedCoffe = type;
			typeWaterAmout = typeCoffe[type].waterAmount;
			var typeCount = typeCoffe[type].count;

			if (waterAmount < typeWaterAmout) {
				console.log("Недостаточно воды для выбранного напитка...");
				return;
			} else {
				resolution = true;
				count = typeCount;
			}
		}

		this.run = function() {
			if(waterAmount <= 0) {
				console.log("Технический сбой. Ошибка №423573675...");
				return;
			}
			if(resolution) {
				console.log("Начинаем готовить ваш " + selectedCoffe + "...");
				i = setInterval(onReady,1000);
			}
		}
	}

	var bosch = new CoffeMachine(1000);
	//bosch.waterAmount(1000);
	//bosch.changeCoffe("latte");
	//bosch.run();

	console.log(bosch.coffeList())
	bosch.coffeList("Nescfik",{waterAmount: 123, count: 231});
	console.log(bosch.coffeList())