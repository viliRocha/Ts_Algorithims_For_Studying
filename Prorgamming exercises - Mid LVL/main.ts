//Verifies if the string is a palindrome
function epulavel (text: string) {
    //replace: removes all spaces
    //toLowerCase: turns all characters to lowercase
    let str = text.replace(/\s/g, "").toLowerCase();

    /*
    *split: transforms values into arrays
    *reverse: reverses values of a matrix
    *join: joins matrix indexes(opposite of matrices)
    */
    let reversa = str.split("").reverse().join("");

    if(str == reversa) {
        return(true);
    }
    else {
        return(false);
    }
}
console.log(epulavel("A base do teto desaba"));

//shows how many vowels the string has
function evogal(trecho: string) {
    //vowels: "a", "u", "e", "i", "o"

    let nVogais = 0;

    let string = trecho.toLowerCase().split("");

    let vogais = "aeiou";

    for(let i = 0; i <= string.length; i++) {
    if(vogais.includes(string[i])) {
        nVogais += 1;
    }
}

    return(nVogais);
}

console.log(evogal("Ola Aninha e Mariazinha"));

//Verifies its factorial
function e_Fatorial(number: number) {
    number = Math.round(number);

    if(number < 0) {
        number *= -1;
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


let matrix: number[] = [];

let big_Num = matrix[0];

function o_maior_num() {
    for(let l = 0; l < matrix.length; l++) {
        if(matrix[l] > big_Num) {
            big_Num = matrix[l];
        }
    }
}

o_maior_num();

console.log(big_Num);
