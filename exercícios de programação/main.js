
//Função para verificar se número é par, nulo ou impar
function verificar(number) {
if(number == 0) {
    return("null  \n \n");
}
else if(number % 2 == 0) {
    return("par \n \n");
}
else{
    return("impar \n \n");
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


//calcula média
let notas = [4.2, 7.9, 3.6, 0.9, 2.3];

function media(grades) {
    let soma = 0;

    for(let i = 0; i < grades.length; i++) {
        if(grades[i] > 10 || grades[i] < 0) {
            console.error(grades[i] + `não é uma possível nota!!! \n \n`)
        }
        else {
            soma += grades[i]
        }
    }

    let m = soma / grades.length;
    return(Math.round(m));
}

console.log(media(notas) \n \n);

// Calcula se valor é primo
function epri(valor) {
    if(valor == 1 && valor % 2 == 0) {
        return("false");
    }

    else {
    for(let c = 2; c < valor; c++) {

        if(valor % c == 0) {
            return("false");  
        }
    }
    }
    return("true");
}

console.log("é primo: " + epri(361) \n \n);


let f = [[3, 4, 9], 
        [12, 8, 7]];

let v = [[1.5, 2, 4.5], 
        [6, 4, 3.5]];
        
let o = [[0, 0 ,0], 
        [0, 0, 0]];

function somaMatrix(m0, m1, m2) {

    for(let l = 0; l < f.length; l++) {

        for(let c = 0; c <= f.length; c++ ) {
            m0[l][c] = m1[l][c] + m2[l][c];

        }
    }

    return(m0);
}

console.log(somaMatrix(o, f, v));

//Verifica se matriz é matriz identidade
let ident = [[5, 0, 0],
            [0, 5, 0], 
            [0, 0, 5]];

function e_ident(m0) {
    for(let l = 0; l < m0.length; l++) {
        
        for(let c = 0; c < m0.length; c++ ) {

            if(l == c) {
                if(m0[l][c] != 5) {
                    return("false");
                }
            }

            else if(l != c) {
                if(m0[l][c] != 0) {
                    return("false");
                }
            }
        }
    }
    return("true");
}

console.log(e_ident(ident) \n \n);
