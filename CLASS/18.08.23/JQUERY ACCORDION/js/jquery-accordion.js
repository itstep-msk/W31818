var button = $(".button");
var content = $(".accordion-content");
var link = $(".accordion-link");

button.on("click", function() {
	var parent = $(this).parent();

	if(parent.hasClass("active")) {
		parent.removeClass("active");
		parent.next().slideUp();
	} else {
		link.removeClass("active");
		parent.addClass("active");
		content.slideUp();
		parent.next().slideDown();
	}
	
})