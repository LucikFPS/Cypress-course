//Option 1
console.log("Option #1 with arrays:");

let carFuel = ["Gas", "Disel"];
let carSize = ["S", "M", "L", "XL"];

function gasStation(carFuel, carSize){
    console.log(`Заправка для ${carSize}, тип палива ${carFuel}`);
}

for (let fuel of carFuel){
    for (let car of carSize)
        switch (fuel) {
            case "Gas":
            case "Disel":
                gasStation(fuel, car);
                break;
            default:
                console.log("Машин нема.")
    }
}

console.log("-------------------------Just for better readability-----------------------------");

console.log("Option #2")

//Option 2
let carFuel1 = "Gas";
let carSize1 = "S";

function gasStation1(carFuel1, carSize1){
    console.log(`Заправка для ${carSize1}, тип палива ${carFuel1}`);
}

gasStation1(carFuel1, carSize1);


let carFuel2 = "Gas";
let carSize2 = "M";

function gasStation2(carFuel2, carSize2){
    console.log(`Заправка для ${carSize2}, тип палива ${carFuel2}`);
}

gasStation2(carFuel2, carSize2);


let carFuel3 = "Gas";
let carSize3 = "L";

function gasStation3(carFuel3, carSize3){
    console.log(`Заправка для ${carSize3}, тип палива ${carFuel3}`);
}

gasStation3(carFuel3, carSize3);


let carFuel4 = "Gas";
let carSize4 = "XL";

function gasStation4(carFuel4, carSize4){
    console.log(`Заправка для ${carSize4}, тип палива ${carFuel4}`);
}

gasStation4(carFuel4, carSize4);


let carFuel5 = "Diesel";
let carSize5 = "S";

function gasStation5(carFuel5, carSize5){
    console.log(`Заправка для ${carSize5}, тип палива ${carFuel5}`);
}

gasStation5(carFuel5, carSize5);


let carFuel6 = "Diesel";
let carSize6 = "M";

function gasStation6(carFuel6, carSize6){
    console.log(`Заправка для ${carSize6}, тип палива ${carFuel6}`);
}

gasStation6(carFuel6, carSize6);


let carFuel7 = "Diesel";
let carSize7 = "L";

function gasStation7(carFuel7, carSize7){
    console.log(`Заправка для ${carSize7}, тип палива ${carFuel7}`);
}

gasStation7(carFuel7, carSize7);


let carFuel8 = "Diesel";
let carSize8 = "XL";

function gasStation8(carFuel8, carSize8){
    console.log(`Заправка для ${carSize8}, тип палива ${carFuel8}`);
}

gasStation8(carFuel8, carSize8);