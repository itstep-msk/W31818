var button = $(".button");
var text = $(".text");
var list = $(".list");
var template = {
	item: "<div class='item'></div>",
	checkbox: "<input type='checkbox' class='checkbox'>"
}

if(localStorage.dataCheckList == undefined) {
	localStorage.dataCheckList = "";
} else {
	list.html(localStorage.dataCheckList)
}

button.on("click", function() {
	addItem();
})

text.on("keydown", function(e) {
	if(e.keyCode == 13) {
		addItem();
	}
})

$(document).on("click", ".checkbox", function() {
	if($(this).attr("checked") == "checked") {
		$(this).removeAttr("checked");
		$(this).parent().removeClass("checked");	
	} else {
		$(this).attr("checked","checked");
		$(this).parent().addClass("checked");	
		
	}
	
	localStorage.dataCheckList = list.html();
})

function addItem() {
	if(text.val() == "") return;

	list.append(template.item).find(".item").last().html(text.val()).prepend(template.checkbox)
	text.val("");
	localStorage.dataCheckList = list.html();
}