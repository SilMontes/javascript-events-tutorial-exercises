//This is a global variable
var counter = 0;
var counter2 = 10;

window.onload = function loadFunction() {
	//here I set the screen to the initial value when the website is fully loaded.
	document.getElementById("screen").innerHTML = "The counter value is " + counter;
	document.getElementById("screen2").innerHTML = "The counter value is " + counter2;
};

//called when the user clicks
window.increaseCounter = function increaseCounter() {
	//increase the global counter in one
	counter++;
	//update the screen with the new value
	document.getElementById("screen").innerHTML = "The counter value is " + counter;
};

window.dicreaseCounter = function dicreaseCounter() {
	counter2--;
	document.getElementById("screen2").innerHTML = "The counter value is " + counter2;
};
