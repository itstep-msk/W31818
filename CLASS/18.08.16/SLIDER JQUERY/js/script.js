var box = $(".box");
var prev = $(".prev");
var next = $(".next")
var count = 0;

console.log(box)

next.on("click", function() {
	count++;
	box.animate({"margin-left": count*(-400) + "px"})
})