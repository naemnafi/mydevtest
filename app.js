//alert("hi js");

let sum = 50 + 40;
console.log(sum);

if (sum > 100) {
console.log('Expensive');
} else {
    console.log('Cheap');
}
document.getElementById('title').innerHTML = ('hellow js');
let firstName = 'naem';
console.log(firstName);

let fruits = 'apple';
console.log(`${fruits} is my fav`);

var z = 100;
console.log(z);

// Arithmatic operator
let a = 20;
let b = 10;
let c = a + b;
console.log(c);

// Prompt, userInput, modulus,
/*let userInput = prompt('Enter a number');
let number = parseInt(userInput);
if (number % 2 === 0){
    console.log('Even');
} else {
    console.log ('Odd');
}*/

// comparison operator
let c1 = 10;
let c2 = 20;
console.log(c1 === c2);
console.log(c1 !== c2);
console.log(c1 < c2);
 
// Data Types in JS
 let name = 'naem';
 console.log(typeof name);

 //function
 function myFunction(firstName, age) {
    console.log('hello ' + firstName + ' I am ' + age );
 }
 myFunction('Naem', 30);

 //event-driven function
 function isSubscribed() {
    console.log('Subscribed');
 }

document.getElementById('btn').addEventListener('click', isSubscribed);

//self-driven function
(function(){
    console.log('self-invocking');
})();


// return, function expression, 
let maths = function(x, y){
    return x + y;
};
console.log(maths(3, 4));

// Array function
let add = (x, y) => x + y;
console.log(add(5, 6));

// nested function
/*function greet(firstName){
    function sayHello() {
    alert('hello ' + firstName);
    }
    return sayHello();
}
greet('Naem'); */

// JS object
const mobileModel = {
// key: value
brand: 'realme',
model: 'c67',
processor: 'snapdragon',
camera: ['100MP', '10MP', '20MP',],
hasFlash: true,
};

console.log(mobileModel.brand);
console.log(mobileModel['brand']);
console.log(mobileModel.hasOwnProperty('camera'));
console.log(mobileModel.hasOwnProperty('memory'));
console.log(Object.keys(mobileModel));
console.log(Object.values(mobileModel));

// JavaScript Arrays
const language = ['HTML', 'CSS', 'Js', true, 500];
const language2 = new Array('HTML', 'CSS', 'Js', true, 500);
console.log(language[2]); //to see a specific array
language[2] = 'PHP'; // to change a array value
console.log(language);
console.log(language.toString()); //to see as string
language[5] =  'vue.js';// you can increase array
console.log(language);
console.log(language.length); //to see total number of array


// JS Events
document.getElementById('win').addEventListener('click', function () {
document.getElementById('win').innerHTML = 'Hey Winter, I feel cold';
});// the best and modern way

document.getElementById('hel').onclick = function () {
    document.getElementById('hel').innerHTML = 'hello sir';
}; //another way to set event, and it is easier

function subscribe(){
    document.getElementById('btn').innerHTML = 'subscribed'; // to change text when event happen
};
function subscribe(){
    document.getElementById('btn').style.backgroundColor = '#00ff00'; // to change style when event happens
};
function keyPress(){
    document.getElementById('text').innerHTML = 'Key Pressed 👍'; // to see event when press on key
}
function onLoad(){
    document.getElementById('body-text').innerHTML = 'Website Loaded👍'; // to see event when web load
}



// JS Math
console.log(Math.pow(4, 2)); //square value
console.log(Math.pow(4, 3)); //qube value
console.log(Math.sqrt(64)); //square-root value
console.log(Math.min(0, 1, 2, 3, 4, 5)); //min value
console.log(Math.max(0, 1, 2, 3, 4, 5)); //max value
console.log(Math.PI); //pie value
console.log(Math.floor(Math.random().toFixed(2) * 10 + 1 )); //random round figure value

// Ludo
let upperValue = 6;
let lowerValue = 1;
let resultValue = Math.ceil (Math.random() * upperValue);
console.log(resultValue);

// JS string
let Name = 'Naem';
let country = 'BD';
console.log('I am ' + Name + ', from ' + country);
// another way to take string
let Name2 = 'Naem';
let country2 = 'BD';
let info = `I am ${Name2}
, I am from ${country2}.`
console.log(info);


//JS Date
const myDate = new Date();
console.log(myDate);
console.log(myDate.toLocaleString());

// JS Memory

// JS Conditional Statements
let age = 19;
if (age > 18) {
    console.log('you are adult');
} else {
    console.log('You are child');
};

let grade  = 70;
if (grade > 80) {
    console.log('A+');
} else if (grade < 80) {
    console.log('B');
};

// another way - switch, Best for many statement
let category = 'car';
let carType;
switch (category) {
    case 'car': 
    carType = 'This is a car';
    break;
    case 'Motor Bike':
        carType = 'This is a Motor Bike';
        break;
        default:
            carType = 'unknown';
};
console.log(carType);

// JS Loop
let countries = ['BD', 'India', 'usa', 'uk'];
