'use strict';

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = {
    name: "John",
    age: 25,
    isMarried: false
};


console.log(person["age"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[0]);

// alert("Hello world!");

// let answer = confirm("Are you alive?");

// console.log(answer);

// let answer = +prompt("Are you 18 y.o.?", "Yes");

// console.log(typeof(answer));

// console.log("arr" + " - object");

// console.log(4 + +" - object");

let incr = 10,
    decr = 10;


console.log(++incr);
console.log(decr--);

console.log(5%2); /* остаток от деления */

console.log("2" === 2); /* двойное равно сравнивает значения а тройное конкретно данные с учетом их типа */

let isChecked = true,
    isClosed = false;

console.log(isChecked && isClosed);   /* и */
console.log(isChecked || isClosed);     /* или */


console.log(isChecked || !isClosed);  /* не */






