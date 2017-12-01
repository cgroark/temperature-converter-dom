var submitButton = document.getElementById("submit");
var input = document.getElementById("inputField");
var output = document.getElementById("degreesOut");

var convertTemp = function(){
	output.innerHTML = (((input.value -32)/(9/5)).toFixed(2) + " degrees celsius")
}

submitButton.addEventListener("click", convertTemp);




