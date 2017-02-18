// var userInput = document.getElementByID("");
// var myVarOne = 3;
var userHeight = document.getElementById("height");
var userChar = document.getElementById("char");
var button = document.getElementById("btn");

button.addEventListener("click", getValues);

function getValues(){
  var char = userChar.value;
  var height = userHeight.value;
  var myTree = {
    height: height,
    char: char
  }
  if (char === "" || height === ""){
    alert("Add values please");
  }
  treeMaker(myTree);
}

function treeMaker(tree){
  for(var i=0; i<tree.height; i++){
    var spaces = tree.height - (i + 1);
    var numChar = 2 * i + 1;
    console.log(" ".repeat(spaces) + tree.char.repeat(numChar));
  }
}

// function enterkeyPress(keypress){
//   if (keypress.which === 13){
//     treeMaker();
//   }
// }
//
// document.addEventListener("keypress", enterKeyPress);
