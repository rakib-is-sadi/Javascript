const username = {Name: "Rakibul"};
username.name = "Sadi";
// const username ={Name: "Rakibul Islam"}  It is not possible to change object.
console.log(username);  // It is possible to change & add value but not object.


// console.log(a); // I is not defined.
let a = 30; // It is defined but we can't access before Initialization.
// So we have to Initial first then we have to call it.


const fruit = ["apple", "mango", "banana"];
fruit.push = "orange";
console.log(fruit); // It is working the pushing data. It is not throwing error.


const Name = "Rakibul Islam Sadi";
const Address = "Jashore";
let age = 19;


let x = 12;
// let x = 32;
console.log(x); // Redeclaration isn't possible with let & const.


console.log(count);
var count = 40; // It is showing undefined result because var is just a functional block element
// but var is exist but data calling first is a bug thats why it is.

const b = 10;
// b = 11;
console.log(b); // Reassignment is not possible with const.