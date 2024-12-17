//Verifies if number is odd or par
function verify(number: number): string|null {
    if (number == 0) {
        return null;
    }
    else if (number % 2 == 0) {
        return "pair";
    }
    else {
        return "odd";
    }
}

let userInput = prompt("Type a number: ");

console.log(verify(Number(userInput)));

//  calculates the average between numbers
let notas = [4.2, 7.9, 3.6, 0.9, 2.3];
    
function media(grades: number[]): number {
    let sum = 0;
    
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > 10 || grades[i] < 0) {
            console.error(grades[i] + `Not a possible grade!!! \n \n`)
        }
        else {
            sum += grades[i]
        }
    }
    
    let m = sum / grades.length;
    return Math.round(m);
}
    
console.log(media(notas));
    
// Calculates if the value is prime or not
function isPri(val: number): boolean {
    if (val == 1 && val % 2 == 0) {
        return false;
    }
    
    else {
        for (let c = 2; c < val; c++) {
    
            if (val % c == 0) {
                return false;  
            }
        }
    }
    return true;
}
    
console.log("Prime: ", isPri(361));
    
    
const matrixA = [[3, 4, 9], 
                [12, 8, 7]];
    
const matrixB = [[1.5, 2, 4.5], 
                [6, 4, 3.5]];
            
const resultMatrix = [[0, 0, 0], 
                    [0, 0, 0]];
    
function addMatrices(result: number[][], matrix1: number[][], matrix2: number[][]): number[][] {
    // checks if the matrices have the same dimensions
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        throw new Error("The matrices must have the same dimensions!");
    }

    for (let row = 0; row < matrix1.length; row++) {
        for (let col = 0; col < matrix1[row].length; col++) {
            result[row][col] = matrix1[row][col] + matrix2[row][col];
        }
    }
    
    return result;
}

console.log(addMatrices(resultMatrix, matrixA, matrixB));
    
//  verifies if it is an identity matrix (but it also handles other numbers than 1)
let ident = [[5, 0, 0],
            [0, 5, 0], 
            [0, 0, 5]];
    
function e_ident(m0: number[][]): boolean {
    for (let l = 0; l < m0.length; l++) {
            
        for (let c = 0; c < m0.length; c++ ) {
    
            if (l == c) {
                if (m0[l][c] != 5) {
                    return false;
                }
            }
    
            else if (l != c) {
                if (m0[l][c] != 0) {
                    return false;
                }
            }
        }
    }
    return true;
}
    
console.log(e_ident(ident));
    
// Algorithm to find the biggest number in the array
let values = [9, 11, 13];
    
function find_big_num(values: number[]): number {
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
console.log(bgNum);
    
    
//Algorithm that counts till 100 and prints Buzz if the value is divisible by 5 and Fizz if divisible by 3   
function counter() {
    for(let k = 0; k <= 100; k++) {
        let val = "";

        //    This way Fizz Buzz can be printed in the same line without also printing Fizz and Buzz another time
        if (k % 3 == 0) {
            val = val + "Fizz";
        }
        else if (k % 5 == 0) {
            val = val + "Buzz";
        }
        else {
            val = val + k;
        }

        console.log(val);
    }
}
    
counter();
