;(function() {
  var header = $(".js-header");
  var headerFake = $(".js-header-fake");
  headerFake.height(header.outerHeight(true));
  headerFake.hide();

  window.addEventListener("scroll", function() {
  	if(window.scrollY > 0) {
  		headerFake.show();
  		header.addClass("header--fixed");
  	} else {
  		headerFake.hide();
  		header.removeClass("header--fixed");
  	}
  })
})(); // Самовызывающиеся анонимная функция

//console.log(header)
//function hello() { /**/ }

//hello();
//hello // function hello() { /**/ }

//var hello = function() {}
//hello()
//hello // function() {}
//!function(){}