$.fn.preloader = function(n) {
	var time = n || 1000
	var self = this;
	var template = `<div style='
						background-image: url(img/preloader.gif);
						background-repeat: no-repeat;
						background-position: center;
						background-color: #676d89;
						position: absolute;
						width: 100%;
						height: 100%;
						left: 0;
						top:0;
						'></div>`

	self.before(template);
	self.hide();

	$(window).on("load", function() {
		self.show();
		self.prev().fadeOut(time);
	})
}

$(".js-preloader").preloader(); 