//Verifies if number is odd or par
function verify(number) {
if(number == 0) {
    return("null \n \n");
}
else if(number % 2 == 0) {
    return("pair \n \n");
}
else{
    return("odd \n \n");
}
}

let userInput = prompt("Type a number: ");

console.log(verify(userInput));
