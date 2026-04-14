// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// for(let i = 1; i <= 50; i++) {
//   let result = "";
//   if(i % 3 === 0) result += "Fizz";
//   if(i % 5 === 0) result += "Buzz";
//   console.log(result || i);
// }

// const arr = [1, 2, 3, 2, 4, 3, 5, 1];

// let unique = [...new Set(arr)];
// console.log(unique);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(newArr);

// const students = [
//   { name: "Rahim", marks: 80 },
//   { name: "Karim", marks: 45 },
//   { name: "Jamal", marks: 72 },
//   { name: "Salam", marks: 38 },
// ];

// const stName = [];

// for (let data of students) {
//   if (data.marks > 50) {
//     stName.push(data.name);
//   }
// }

// console.log(stName);

// const result = students
//   .filter((student) => student.marks > 50)
//   .map((student) => student.name);

// console.log(result);

const products = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Broccoli", category: "Vegetable" },
  { name: "Mango", category: "Fruit" },
];

let productFilter = products.reduce((acc, curr) => {
  if (!acc[curr.category]) {
    acc[curr.category] = [];
  }

  acc[curr.category].push(curr.name);
  return acc;
}, {});

console.log(productFilter);

// const people = [
//   { name: "Rahim", age: 25 },
//   { name: "Karim", age: 32 },
//   { name: "Jamal", age: 28 },
//   { name: "Salam", age: 19 },
// ];

// let elder = people.reduce(
//   (acc, curr) => (curr.age > acc.age ? curr : acc),
//   people[0],
// );
// console.log(elder);

const nested = [1, [2, 3], [4, [5, 6]], 7];

console.log(nested.flat(Infinity));

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let fruitCount = fruits.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 0;
  }

  acc[curr]++;

  return acc;
}, {});

console.log(fruitCount);

const words = ["hello", "world", "javascript", "is", "awesome"];

let upperWords = words.map((word) => word[0].toUpperCase() + word.slice(1));

console.log(upperWords);

const numbers = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

// let newNums = numbers.flat(Infinity).reduce((acc, curr) => acc + curr, 0);

// console.log(newNums);

// const nums = [1, 2, 3, 5, 6, 7, 8, 9, 10];

// let total = (10 * 11) / 2;

// let sum = nums.reduce((acc, curr) => acc + curr, 0);

// console.log(total - sum);

const word = "racecar";

let isPilandrome = word === word.split("").reverse().join("");
console.log(isPilandrome);

const celsius = [0, 20, 37, 100];

let fahrenheit = celsius.map((c) => (c * 9) / 5 + 32);

console.log(fahrenheit);

const sentence = "I love programming in JavaScript";
let bigWord = sentence
  .split(" ")
  .reduce(
    (acc, curr) => (curr.length > acc.length ? curr : acc),
    sentence.split(" ")[0],
  );
console.log(bigWord);

// const person = {
//   name: "Rahim",
//   age: 25,
//   city: "Dhaka",
//   job: "Developer",
// };

// let arrPerson = Object.entries(person);

// console.log(arrPerson);

// const students = [
//   { name: "Rahim", marks: 80 },
//   { name: "Karim", marks: 45 },
//   { name: "Jamal", marks: 72 },
//   { name: "Salam", marks: 38 },
// ];

// let smallToBig = students.sort((a, b) => a.marks - b.marks);

// console.log(smallToBig);

// const nums = [1, 2, 3, 4, 5, -1, -2, -1];

// let newNums = nums.every(num => num > 0);

// console.log(newNums);

// const nums = [1, 2, 3, -4, 5];

// console.log(nums.some(num => num < 0));

// const arr = [0, 1, false, 2, "", 3, null, 4, undefined, 5];

// // let newArr = arr.filter(item => item)

// let newArr = arr.filter(Boolean);

// console.log(newArr);

// const str = "Hello World";

// console.log(str.split("").reverse().join(""));

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = nums
  .filter((num) => num % 2 === 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(newNums);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// const arr3 = [];

// arr1.forEach((num) => {
//   if (arr2.includes(num)) {
//     arr3.push(num);
//   }
// });
// console.log(arr3);

// let common = arr1.filter((num) => arr2.includes(num));

// console.log(common);

// const str = "Hello World";

// let vowel = ["a", "e", "i", "o", "u"];

// let strVowel = str.toLowerCase().split("").filter(num => vowel.includes(num));

// console.log(strVowel.length);

// const str = "Apple Mango Orange";

// let vowel = ["a", "e", "i", "o", "u"];

// let strVowel = str
//   .toLowerCase()
//   .split("")
//   .filter((v) => vowel.includes(v));

// console.log(strVowel.length);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// let arr3 = [];

// // for(let num of arr1) {
// //   if(arr2.includes(num)) {
// //     arr3.push(num);
// //   }
// // }
// // console.log(arr3);

// let common = arr1.filter((num) => arr2.includes(num));

// console.log(common);

// const str = "abc123def456ghi7890";

// const strToNumber = str
//   .split("")
//   .filter((num) => !isNaN(num) && num !== " ")
//   .map(Number);

// console.log(strToNumber);

// const arr = [1, 2, 3, 2, 4, 3, 5, 1];
// const duplicate = arr.filter(num => arr.indexOf(num) !== arr.lastIndexOf(num));

// let duplicateSort = [...new Set(duplicate)];

// console.log(duplicateSort);

// const arr = ["Hello", "World", "JavaScript", "is", "awesome"];

// let arrToStr = arr.join(" ");
// console.log(typeof arrToStr);

// const cart = [
//   { name: "Apple", price: 30, quantity: 3 },
//   { name: "Banana", price: 15, quantity: 5 },
//   { name: "Mango", price: 50, quantity: 2 },
// ];

// let total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
// console.log(total);

const str1 = "listen";
const str2 = "silent";

let str1Value = str1.split("").sort().join("");
let str2Value = str2.split("").sort().join("");

console.log(str1Value === str2Value);

const arr = [1, 2, 3, 4, 5];
const removeNum = 3;

let newArr = arr.filter((num) => num !== removeNum);
console.log(newArr);

let a = 5;
let b = 10;

[a, b] = [b, a];
console.log(a, b);

const person = {
  name: "Rahim",
  age: 25,
  city: "Dhaka",
};

const { name, city } = person;
console.log(name);
console.log(city);

function add(a, b = 10) {
  return a + b;
}

console.log(add(2));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// const arr3 = arr1.concat(arr2);
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// const user = {
//   name: "Rahim",
//   address: {
//     city: "Dhaka",
//     zip: "1200"
//   }
// };

// console.log(user?.address?.city);

// const user2 = { name: "Karim" };
// console.log(user2?.address?.city);

const user = {
  name: "Rahim",
  age: null,
};
console.log(user.age ?? "Age not provided");

const colors = ["red", "green", "blue", "yellow", "purple"];

let randomColor = Math.floor(Math.random() * colors.length);

console.log(colors[randomColor]);

const original = { name: "Rahim", age: 25 };

let copy = { ...original };
console.log(copy);

function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());




const students = [
  { name: "Rahim", marks: 80 },
  { name: "Karim", marks: 45 },
  { name: "Jamal", marks: 72 },
  { name: "Salam", marks: 38 },
];


const bigMarks = students.filter(student => student.marks > 50).map(student => student.name);
console.log(bigMarks);



const cart = [
  { name: "Apple", price: 30, quantity: 3 },
  { name: "Banana", price: 15, quantity: 5 },
  { name: "Mango", price: 50, quantity: 2 },
];

let totalPeice = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

console.log(totalPeice);


const str = "abc123def456ghi7890";

let strToNum = str.split("").filter(num => !isNaN(num)).map(Number);

console.log(strToNum);


const people = [
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 32 },
  { name: "Jamal", age: 28 },
  { name: "Salam", age: 19 },
];


let elder = people.reduce((acc, curr) => acc.age > curr.age ? acc : curr, people[0]);
console.log(elder);