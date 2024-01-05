//#1

car1 = {
    name: "Audi",
    subname: "R8",
    type: "Supercar",
    hp: 700
}

car2 = {
    name: "BMW",
    subname: "M5",
    type: "Sedan",
    hp: 500
}

car3 = {
    name: "Ford",
    subname: "Taurus",
    type: "Sedan",
    hp: 350
}


//#2
let car4 = new Object ({
    name: "Hyundai",
    subname: "Sonata",
    type: "Sedan",
    hp: 200
})

let car5 = new Object ({
    name: "Hyundai",
    subname: "Santa Fe",
    type: "SUV",
    hp: 250
})

let car6 = new Object ({
    name: "Volkswagen",
    subname: "Tiguan",
    type: "Crossover",
    hp: 220
})


//#3
let car7 = Object.create(car6);
car7.name = "Ford";
car7.subname = "Edge";
car7.type = "SUV";
car7.hp = 270;

console.log(car7);


//#3.1.
let car8 = {
    name: "Audi",
    subname: "TT",
    type: "Roadster",
    hp: 350,
    __proto__: car6
}

console.log(car8.__proto__.name);
console.log(car8.__proto__.subname);
console.log(car8.__proto__.type);
console.log(car8.__proto__.hp);

//#4
let engineer = {
    name: "Anton",
    surname: "Skillovskiy",
    exp: 10
}

let qaEngineer = Object.create(engineer);
qaEngineer.name = "NeAnton";
qaEngineer.surname = "Unskillnyi";
qaEngineer.exp = 0.1;

console.log(engineer);
console.log(qaEngineer);


//#5
let person = {
    name: "AvgAnton",
    surname: "Average",
    exp: 5
}

Object.setPrototypeOf(engineer, person)

console.log(engineer.name);
console.log(engineer.surname);
console.log(engineer.exp);