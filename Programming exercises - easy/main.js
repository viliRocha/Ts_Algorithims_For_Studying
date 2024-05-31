//Verifies if number is odd or par
function verificar(number) {
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

document.addEventListener("keypress", e=>{
    if(e.which == 48){
        console.log(verificar(0));
    }
    if(e.which == 49){
        console.log(verificar(1));
    }
    if(e.which == 50){
        console.log(verificar(2));
    }
    if(e.which == 51){
        console.log(verificar(3));
    }
    if(e.which == 52){
        console.log(verificar(4));
    }
    if(e.which == 53){
        console.log(verificar(5));
    }
    if(e.which == 54){
        console.log(verificar(6));
    }
    if(e.which == 55){
        console.log(verificar(7));
    }
    if(e.which == 56){
        console.log(verificar(8));
    }
    if(e.which == 57){
        console.log(verificar(9));
    }
});
