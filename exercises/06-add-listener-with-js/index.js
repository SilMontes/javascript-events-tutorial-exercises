window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
function alertMessage() {
	alert("wuju");
}
var boton = document.getElementById("theGreen");
boton.addEventListener("click", alertMessage);
