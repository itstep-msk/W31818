var doc = {
	element: null,
	find: function(el) {
		var elements = document.querySelectorAll(el);
		
		if(elements.length  > 1) {
			this.element = elements;
		} else {
			this.element = document.querySelector(el);
		}
		return this;
	},
	html: function(value) {
		if(value == undefined) {
			return this.element.innerHTML;
		} else {
			this.element.innerHTML = value;
		}
		return this;
	},
	css: function(value) {
		if(this.element.getAttribute("style") == null) {
			this.element.setAttribute("style","");
		}
		var oldStyle = this.element.getAttribute("style");
		this.element.setAttribute("style", oldStyle + value + ";");
		return this;
	},
	event: function(eventName, functionText) {
		this.element.addEventListener(eventName, functionText);
		return this;
	},
	addClass: function(value) {
		this.element.classList.add(value);
		return this;
	},
	removeClass: function(value) {
		this.element.classList.remove(value);
		return this;
	},
	hasClass: function(value) {
		return this.element.classList.contains(value);
	},
	toggleClass: function(value) {
		this.element.classList.toggle(value);
		return this;
	},
	hide: function() {
		this.element.style.display = "none";
		return this;
	},
	show: function() {
		this.element.style.display = "block";
		return this;
	}
}