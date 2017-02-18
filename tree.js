var userHeight = document.getElementById("height");
var userChar = document.getElementById("char");
var button = document.getElementById("btn");



function getValues(){
  var char = userChar.value;
  var height = userHeight.value;
  var myTree = {
    height: height,
    char: char
  }
  treeMaker(myTree);
  if (char === "" || height === ""){
    alert("Add values please");
  }
}

function treeMaker(tree){
  for(var i=0; i<tree.height; i++){
    var spaces = tree.height - (i + 1);
    var numChar = 2 * i + 1;
    console.log(" ".repeat(spaces) + tree.char.repeat(numChar));
  }
}

document.addEventListener("keypress", enterKeyPress);

function enterKeyPress(keypress) {
	if (keypress.which === 13) {
    console.log("ioeroj");
		treeMaker();
	}
}

button.addEventListener("click", getValues);
