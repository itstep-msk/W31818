var accordionLink = document.querySelectorAll(".accordion-link");
var accordionContent = document.querySelectorAll(".accordion-content");

for(var i = 0; i < accordionLink.length; i++) {
	accordionLink[i].addEventListener("click", function() {
		var linkId = +this.getAttribute("data-link-id");

		for(var j = 0; j < accordionLink.length; j++) {
			accordionLink[j].classList.remove("active");
		}

		this.classList.add("active");

		for(var j = 0; j < accordionContent.length; j++) {
			accordionContent[j].style.display = "none";
		}

		accordionContent[linkId].style.display = "block";
	})
}