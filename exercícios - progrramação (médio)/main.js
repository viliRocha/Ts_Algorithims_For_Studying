//Verifica se é palíndromo
function epulavel (texto) {
    //replace: tira todos os espaços
    //toLowerCase: deixa todos o string em letra minuscula
    var str = texto.replace(/\s/g, "").toLowerCase();

    /*
    *split: transforma valores em matrizes
    *reverse: deixa em ordem reversa valores da matris
    *join: junta indices da matris(oposto das matrizes)
    */
    var reversa = str.split("").reverse().join("");

    if(str == reversa) {
        return("true");
    }
    else {
        return("false");
    }
}
console.log(epulavel("A base do teto desaba"));

//Mostra quantas vogais texto possuí
function evogal(trecho) {
    //vogais: "a", "u", "e", "i", "o"

    var nVogais = 0;

    var string = trecho.toLowerCase().split("");

    let vogais = "aeiou";

    for(let i = 0; i <= string.length; i++) {
    if(vogais.includes(string[i])) {
        nVogais += 1;
    }
}

    return(nVogais);
}

console.log(evogal("Ola Aninha e Mariazinha"));

//Verifica se é fatorial
function e_Fatorial(number) {
number = Math.round(number);

if(number < 0) {
    number = number * -1;
}

let val = 1;

if(number == 0) {
    return(1);
}

for(let f = 1; f <= number; f++) {
    //val = 1*1
    val *= f;
}
    return(val);
}

console.log(e_Fatorial(0));


let Array = [];

let big_Num = Array[0];

function o_maior_num() {
    for(let l = 0; l < Array.length; l++) {
        if(Array[l] > big_Num) {
            big_Num = Array[l];
        }
    }
}

o_maior_num();

console.log(big_Num);