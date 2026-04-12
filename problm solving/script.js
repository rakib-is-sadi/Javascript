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

const arr = [1, 2, 3, 2, 4, 3, 5, 1];

let unique = [...new Set(arr)];
console.log(unique);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(newArr);

const students = [
  { name: "Rahim", marks: 80 },
  { name: "Karim", marks: 45 },
  { name: "Jamal", marks: 72 },
  { name: "Salam", marks: 38 },
];

const stName = [];

for (let data of students) {
  if (data.marks > 50) {
    stName.push(data.name);
  }
}

console.log(stName);

const result = students
  .filter((student) => student.marks > 50)
  .map((student) => student.name);

console.log(result);


const products = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Broccoli", category: "Vegetable" },
  { name: "Mango", category: "Fruit" },
];

let productFilter = products.reduce((acc, curr) => {

  if(!acc[curr.category]) {
    acc[curr.category] = [];
  }

  acc[curr.category].push(curr.name)
  return acc;
},{})

console.log(productFilter);



const people = [
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 32 },
  { name: "Jamal", age: 28 },
  { name: "Salam", age: 19 },
];


let elder = people.reduce((acc, curr) => curr.age > acc.age ? curr : acc, people[0]);
console.log(elder);

const nested = [1, [2, 3], [4, [5, 6]], 7];

console.log(nested.flat(Infinity));

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let fruitCount = fruits.reduce((acc, curr) => {
  if(!acc[curr]) {
    acc[curr] = 0;
  }

  acc[curr]++
  
  return acc;

},{})

console.log(fruitCount);
