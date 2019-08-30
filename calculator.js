var inp1,inp2,answer;

function getInputs() {
	inp1 = Number(document.getElementById("inp1").value);
	inp2 = Number(document.getElementById("inp2").value);
};

 function sum() {
 	getInputs()
 	document.getElementById("answer").value=inp1 + inp2;
 };

function multiply() {
 	getInputs()
 	document.getElementById("answer").value=inp1 * inp2;
 };

 function subtract() {
 	getInputs()
 	document.getElementById("answer").value=inp1 - inp2;
 };

 function divide() {
 	getInputs()
 	document.getElementById("answer").value=inp1 / inp2;
 };