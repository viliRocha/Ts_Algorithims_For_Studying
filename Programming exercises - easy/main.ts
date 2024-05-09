//  Verifies if the number is odd or par
function verificar(number: number) {
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
    
    
    //  calculates the average between numbers
    let notas = [4.2, 7.9, 3.6, 0.9, 2.3];
    
    function media(grades: any) {
        let soma = 0;
    
        for(let i = 0; i < grades.length; i++) {
            if(grades[i] > 10 || grades[i] < 0) {
                console.error(grades[i] + `Not a possible grade!!! \n \n`)
            }
            else {
                soma += grades[i]
            }
        }
    
        let m = soma / grades.length;
        return(Math.round(m));
    }
    
    console.log(media(notas) + "\n \n");
    
    // Calculates if the value is prime or not
    function epri(valor: number) {
        if(valor == 1 && valor % 2 == 0) {
            return("false \n \n");
        }
    
        else {
        for(let c = 2; c < valor; c++) {
    
            if(valor % c == 0) {
                return("false \n \n");  
            }
        }
        }
        return("true \n \n");
    }
    
    console.log("Prime: " + epri(361));
    
    
    let f = [[3, 4, 9], 
            [12, 8, 7]];
    
    let v = [[1.5, 2, 4.5], 
            [6, 4, 3.5]];
            
    let o = [[0, 0 ,0], 
            [0, 0, 0]];
    
    function somaMatrix(m0: any, m1: any, m2: any) {
    
        for(let l = 0; l < f.length; l++) {
    
            for(let c = 0; c <= f.length; c++ ) {
                m0[l][c] = m1[l][c] + m2[l][c];
    
            }
        }
    
        return(m0);
    }
    
    console.log(somaMatrix(o, f, v));
    
    //  verifies if it is an identity matrix
    let ident = [[5, 0, 0],
                [0, 5, 0], 
                [0, 0, 5]];
    
    function e_ident(m0: any) {
        for(let l = 0; l < m0.length; l++) {
            
            for(let c = 0; c < m0.length; c++ ) {
    
                if(l == c) {
                    if(m0[l][c] != 5) {
                        return("false \n \n");
                    }
                }
    
                else if(l != c) {
                    if(m0[l][c] != 0) {
                        return("false \n \n");
                    }
                }
            }
        }
        return("true \n \n");
    }
    
    console.log(e_ident(ident) + "\n \n");
    
    // Algorithm to find the biggest number in the array
    let values = [9, 11, 13];
    
    function find_big_num(values: any) {
        let bgNum = values[0];
      
        for (let h = 0; h < values.length; h++) {
            //  11 is bigger than 9 so bgNum = 11 and finally 11 is smaller than 13 so...
            if (values[h] > bgNum) {
              bgNum = values[h];
          }
        }
      
        return bgNum;
    }
    
    
    const bgNum = find_big_num(values);
    console.log(bgNum + "\n \n");
    
    
    //Algorithm that counts till 100 and prints Buzz if the value is divisible by 5 and Fizz if divisible by 3
    
    function counter() {
        for(let k = 0; k <= 100; k++) {
            let val = "";

            //    This way Fizz Buzz can be printed in the same line without also printing Fizz and Buzz another time
            if(k % 3 == 0) {
                val = val + "Fizz";
            }
            else if(k % 5 == 0) {
                val = val + "Buzz";
            }
            else {
                val = val + k;
            }

            console.log(val);
        }
    }
    
    counter();
