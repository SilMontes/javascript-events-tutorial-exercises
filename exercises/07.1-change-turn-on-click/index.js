var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};

window.turnChanger = function turnChanger() {
	if (currentUser == "Mario") {
		currentUser = "Juan";
	} else if (currentUser != "Juan" && "Josh") {
		currentUser = "Mario";
	} else {
		currentUser = "Josh";
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
};
