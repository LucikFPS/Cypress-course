console.log('Трішки знаю функції'); //string
console.log('Some random text we will divide on number' / 2); //NaN

function showSumOfNumbers(a, b){
    return a + b;
}
console.log(showSumOfNumbers(1, 2)); //number

function showInfinity (){
    return 1 / 0;
}
console.log(showInfinity()); //infinity


function showTrueOrFalse (a, b) {
 
    if (a + b >= 10){
        return true;
    } else {
        return false;
    };

}
 console.log(showTrueOrFalse(10, 2)); //true
 console.log(showTrueOrFalse(5,2)); //false

 let a;
 console.log(a); //undefined

 let b = null;
 console.log(b); //null

 let c = {
    name: 'Vitalya',
    sex: 'male'
};
 console.log(c); //will show object, with structure