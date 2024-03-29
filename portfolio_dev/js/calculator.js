// function appendCharacter(character){
//     var result = document.getElementById("result");
//     result.value += character;
// }

// function deleteLastCharacter(){
//     var result = document.getElementById("result");
//     result.value =result.value.slice(0,-1);
// }

// function clearResult(){
//     var result = document.getElementById("result");
//         result.value= "";
// }

// function calculateResult(){
//     var result = document.getElementById("result");
//     try{
//         result.value = eval(result.value);
//     }
//     catch(error){
//         result.value = "Error";
//     }
// }
const display = document.getElementById("result");

function appendToCharacter(input){
    display.value+= input;
}
function clearCharacter(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
   catch(error){
    display.value= "error";
   }
}


