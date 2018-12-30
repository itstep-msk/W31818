;(function() {
	var button = $(".js-scroll-to-top");
	button.hide();

	window.addEventListener("scroll", function() {
	  	if(window.scrollY > 0) {
	  		button.fadeIn();
	  	} else {
	  		button.fadeOut();
	  	}
  	})

  	button.on("click", function() {
  		$("html").animate({ scrollTop: 0 }, "slow");
  	})
})();