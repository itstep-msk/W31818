var tabsLink = document.querySelectorAll(".tabs-link");
var tabsContent = document.querySelectorAll(".tabs-content");

tabsContent[0].style.display = "block";
tabsLink[0].classList.add("active");

for(var i = 0; i < tabsLink.length; i++) {
	tabsLink[i].addEventListener("click", function() {
		var linkId = +this.getAttribute("data-link-id");

		for(var j = 0; j < tabsLink.length; j++) {
			tabsLink[j].classList.remove("active");
		}

		this.classList.add("active");

		for(var j = 0; j < tabsContent.length; j++) {
			tabsContent[j].style.display = "none";
		}

		tabsContent[linkId].style.display = "block";
	})
}