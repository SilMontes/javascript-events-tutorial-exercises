window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		var x = event.target.getAttribute("id");
		alert(x);
	});
};
