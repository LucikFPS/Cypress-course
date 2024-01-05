// Reversed Ihor
function reverseString (string) {
    return string.split('').reverse().join('');
}

console.log(reverseString('Ihor'));


//Palindrom function

function isPalindrom(text){
    return text.toUpperCase() === text.toUpperCase().split('').reverse().join('');
}

console.log(isPalindrom("aba"));
console.log(isPalindrom("abc"));

//Get paired digits array
function getPaired (arr) {
    let arrayWithPairedDigits = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            arrayWithPairedDigits.push(arr[i]);
        }
    }

    return arrayWithPairedDigits;
}

console.log(getPaired([1, 2, 3, 4, 5, 6]));