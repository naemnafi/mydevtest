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
function greet(firstName){
    function sayHello() {
    alert('hello ' + firstName);
    }
    return sayHello();
}
greet('Naem');