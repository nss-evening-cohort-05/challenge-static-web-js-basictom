var userHeight = document.getElementById("height");
var userChar = document.getElementById("char");
var button = document.getElementById("btn");


function getValues(){
  var char = userChar.value;
  var height = userHeight.value;
  var myTree = {
    height: height,
    char: char
  };
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

function enterKeyPress(keypress) {
	if (keypress.which === 13) {
		getValues();
	}
}

button.addEventListener("click", getValues);
document.addEventListener("keypress", enterKeyPress);
