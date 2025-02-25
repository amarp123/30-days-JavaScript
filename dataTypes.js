//data types in javascript
//String
//Number
//Bigint
//Boolean
//Undefined
//NUll
//Symbol
//Object

//built in object Types
//Object
//Array
//Date
//Map
//Set
//int8Array
//Float32Array
//Promise

//String
let name = "Alice";
console.log(name); 

//Number
let age = 30;
let score = 98.6;
console.log(age);   // Output: 30
console.log(score); // Output: 98.6

//Bigint
let bigNum = BigInt(9007199254740991);
console.log(bigNum); // Output: 9007199254740991n

//Boolean
let isAdult = true;
let hasLicense = false;
console.log(isAdult);    // Output: true
console.log(hasLicense); // Output: false

//undefined
let job;
console.log(job);//undefined

//Null
let overs = null;
console.log(car); // Output: null

//Symbol
let sym = Symbol('id');
console.log(sym); // Output: Symbol(id)

//Example
let person = {
    name: "John",
    age: 30,
    isEmployed: true,
    salary: BigInt(10000000000),
    jobTitle: undefined,
    car: null,
    id: Symbol('id')
};

console.log(person.name);         // Output: John
console.log(person.age);          // Output: 30
console.log(person.isEmployed);   // Output: true
console.log(person.salary);       // Output: 10000000000n
console.log(person.jobTitle);     // Output: undefined
console.log(person.car);          // Output: null
console.log(person.id);           // Output: Symbol(id)


//built in object types
//object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.make);  // Output: Toyota

//Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]);  // Output: Banana

//date
let currentDate = new Date();
console.log(currentDate);  // Output: Current date and time

//Map
let map = new Map();
map.set("name", "Alice");
console.log(map.get("name"));  // Output: Alice

//set
let set = new Set([1, 2, 3, 3]);
console.log(set);  // Output: Set { 1, 2, 3 }

//int8Array
let int8 = new Int8Array([21, 31, 41]);
console.log(int8[1]);  // Output: 31

//Float32Array
let float32 = new Float32Array([5.5, 10.1, 15.6]);
console.log(float32[2]);  // Output: 15.6

//Promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
});
promise.then(result => console.log(result));  // Output: Done!
