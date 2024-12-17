//Verifies if the string is a palindrome
function is_pal (text: string): boolean {
    //replace: removes all spaces
    //toLowerCase: turns all characters to lowercase
    const str = text.replace(/\s/g, "").toLowerCase();

    /*
    *split: transforms values into arrays
    *reverse: reverses values of a matrix
    *join: joins matrix indexes(opposite of matrices)
    */
    const backwards = str.split("").reverse().join("");

    if (str == backwards) {
        return true;
    }
    else {
        return false;
    }
}
console.log(is_pal("A base do teto desaba"));

//shows how many vowels the string has
function is_vowel(text: string) {
    //vowels: "a", "u", "e", "i", "o"

    let numVowels = 0;

    let string = text.toLowerCase().split("");

    let vogais = "aeiou";

    for (let char of string) {
        if (vogais.includes(string[i])) {
            numVowels += 1;
        }
    }

    return numVowels;
}

console.log(is_vowel("Ola Aninha e Mariazinha"));

//Verifies its factorial
function e_Fatorial(number: number) {
    number = Math.round(number);

    if (number < 0) {
        number *= -1;
    }

    let val = 1;

    if (number == 0) {
        return 1;
    }

    for (let f = 1; f <= number; f++) {
        //val = 1*1
        val *= f;
    }
    return val;
}

console.log(e_Fatorial(0));


function selectionSort(array: number[]): number[] {
    const n = array.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i; // Assume that the first unordered element is the smallest

        // Finds the smallest element in the unordered part
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j; // Updates the index of the smallest element
            }
        }

        // Swap the smallest element found with the first unordered element
        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;
}

let matrix: number[] = [64, 25, 12, 22, 11];
console.log(selectionSort(matrix));
