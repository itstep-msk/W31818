function Slider(el, prev, next) {
	this.el = $(el);
	this.arrow = {};
	this.arrow.prev = $(prev);
	this.arrow.next = $(next);
}

var activity = new Slider(".js-activity", ".js-activity-nav-arrow-left", ".js-activity-nav-arrow-right");
var reviews = new Slider(".js-reviews-items", ".js-reviews-nav-arrow-up", ".js-reviews-nav-arrow-down");

reviews.count = {};
reviews.count.current = $(".js-reviews-count-current");
reviews.count.total = $(".js-reviews-count-total");

// ACTIVITY
activity.el.slick({
	slidesToShow: 4,
	prevArrow: activity.arrow.prev,
	nextArrow: activity.arrow.next
})
// REVIEWS
reviews.el.on("init", function(event, slick) {
	var slideCount = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;

	reviews.count.current.html("01");
	reviews.count.total.html(slideCount);
});

reviews.el.on('afterChange', function(event, slick, currentSlide){
	var slideCount = slick.slideCount < 10 ? "0" + slick.slideCount : slick.slideCount;
	var currentCount = currentSlide < 10 ? "0" + (currentSlide + 1) : currentSlide + 1;

    reviews.count.current.html(currentCount);
	reviews.count.total.html(slideCount);
});

reviews.el.slick({
	vertical: true,
	verticalSwiping: true,
	prevArrow: reviews.arrow.prev,
	nextArrow: reviews.arrow.next,
	dots: true,
	appendDots: $(".js-reviews-nav-dots")
})