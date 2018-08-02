var popupLink = document.querySelector(".popup-link");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup-close");
var body = document.body;

popupLink.addEventListener("click", function() {
	popup.style.display = "block";
	body.classList.add("shadow");
})

popupClose.addEventListener("click", function() {
	popup.style.display = "none";
	body.classList.remove("shadow");
})