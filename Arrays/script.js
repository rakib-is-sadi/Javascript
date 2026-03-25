let arr = [1, 2, 3, 4, 5];
arr.push(6, 7, 8, 9);
arr.pop();
arr.shift();
arr.unshift(0, 1);
arr.splice(5, 2)
arr.reverse();

// let newArr = arr.slice(1, 4);

// // console.log(arr);
// // console.log(newArr);

let p = [33, 64, 84, 23, 56, 24, 75];

let q = p.sort(function(a, b) {
  return a - b;
})

console.log(q);

let r = p.sort(function(a, b) {
  return b - a;
})  

console.log(r);

//----------------------------------------------------------------------------------------------------

// let a = [23, 54, 73, 3, 15, 84];

// a.forEach(function(val) {
//   console.log(val);
// })

// let b = a.sort(function(a, b) {
//   return a - b;
// })
// console.log(b);

// b.forEach(function(val) {
//   console.log(val);
// })

// let fruits = ["apple", "banana"];
// fruits[1] = "kiwi";
// console.log(fruits);


let food = ["Icecream", "Burger", "Pizza"];
food.push("Noodles");
console.log(food);

let games = ["Free Fire", "PUBG", "Call Of Duty"];
games.splice(1, 1, "Blood Strike")
console.log(games);

// let colors = ["red", "green", "blue"];
// colors.push("yellow");
// colors[1] = "black"
// console.log(colors);

// let nums = [10, 20, 30, 40];
// nums.push(50);
// nums[0] = 5;
// nums.pop();
// console.log(nums.length);

// let arr = [10, 20, 30];
// arr.shift();
// arr.unshift(5);
// console.log(arr); --> 5, 20, 30

let fruits = ["apple", "banana", "mango"];

if (fruits.includes("banana")) {
  console.log(fruits.indexOf("banana"));
} else {
  console.log("Not Found");
}

// let nums = [1, 2, 3, 4];
// let newArr = nums.slice(1, 3); 
// nums.splice(1, 2);
// console.log(newArr); --> newarr = [2, 3]
// console.log(nums); --> nums = [1, 4];


// let colors = ["red", "green", "blue", "yellow"];

// colors.splice(1, 1, "black");
// console.log(colors);

// let a = [1, 2];
// let b = [3, 4];

// let c = a.concat(b);
// c.reverse();

// console.log(c.join("-")); --> 4-3-2-1

//--------------------------------------------------------------

// let nums = [5, 10];

// nums.forEach(function(x, y) {
//   console.log(y + x); --> 5, 11
// });


// let nums = [1, 2, 3, 4];
// nums.forEach((num) => {
//   console.log(num * 2);
// })


// let names = ["rahim", "karim", "sakib"];

// names.forEach(function(val) {
//   console.log("Hello " + val);
// }) // hint: first letter capital করতে হবে 😏 --> I didn't learn.


// let nums = [10, 20, 30];
// let sum = 0;

// nums.forEach((val) => {
//   sum += val;
// })
// console.log(sum);

//-------------------------------------------------------------------------------------------

// let students = ["rahim", "karim", "sakib", "jamal"];

// students.forEach(function(name) {
//   let capital = name[0].toUpperCase() + name.slice(1);
//   console.log("welcome " + capital);
// })


// let numbers = [5, 10, 15, 20];

// numbers.forEach((num) => {
//   console.log(num * 2);
// })



// let marks = [40, 55, 70, 80, 90];
// let total = 0;

// marks.forEach((mark) => {
//   total += mark
//   if(mark > 75) {
//     console.log("High mark: " + mark)
//   }
// })


// let items = ["apple", "banana", "mango", "orange"];

// items.forEach((item) => {
//   if (item === "banana") {
//     console.log("I found banana");
//   } else {
//     console.log("item: " + item)
//   }
// })


// let names = ["rahim", "karim", "sakib", "jamal"];
// let capitalNames = [];

// names.forEach((name) => {
//   let capital = name[0].toUpperCase() + name.slice(1);
//   capitalNames.push(capital)
// })
// console.log(capitalNames)

// let nums = [1, 2, 3];

// let doubled = nums.map(function(num) {
//   return num * 2;
// });

// console.log(doubled);

//__________________________________________________________________________________________________

// let nums = [5, 10, 15];

// let numberss = nums.map(num => num * 2);
// console.log(numberss);



// let names = ["rahim", "karim", "sakib"];

// let capitalNames = names.map((name) => {
//   return name[0].toUpperCase() + name.slice(1);
// })
// console.log(capitalNames);



// let prices = [100, 200, 300];

// let disPrice = prices.map((price) => {
//   return price - (price * 0.1);
// })
// console.log(disPrice);



// let numbers = [1, 2, 3, 4];

// let newNumbers = numbers.map((num) => {
//   if (num  % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// })

// console.log(newNumbers);

//__________________________________________________________________________________

// let nums = [2, 4, 6, 8];

// let newNums = nums.map(num => num + 1);
// console.log(newNums);



// let words = ["hello", "world", "javascript"];

// let newWords = words.map((word) => {
//   return word.toUpperCase();
// })

// console.log(newWords);



// let nums = [1, 2, 3, 4, 5];

// let newNums = nums.map((num) => {
//   if (num % 2 === 0) {
//     return num * 2;
//   } else {
//     return num * 3;
//   }
// })
// console.log(newNums);



// let prices = [100, 250, 400, 150];

// let disPrices = prices.map((price) => {
//   if (price > 200) {
//     return price - (price * 0.2);
//   } else {
//     return price - (price * 0.1);
//   }
// })
// console.log(disPrices);



// let names = ["rahim", "karim", "sakib", "jamal", "sadi"];


// let newNames = names.map((name) => {
//   return name[0].toUpperCase() + name.slice(1) + ` (${name.length})`;
// })

// console.log(newNames);



// let nums = [10, 20, 30, 40];
// let sum = 0;

// nums.forEach(num => sum += num);
// console.log(sum);

// let newNums = nums.map(num => num - (num * 0.5));
// console.log(newNums);


// let items = ["apple", "banana", "mango", "banana", "orange"];

// let newItems = items.map((item) => {
//   if (item === "banana") {
//     return "";
//   } else {
//     return item.toUpperCase();
//   }
// })


//___________________________________________________________________________________

// let nums = [5, 10, 15, 20, 25];

// let newNums = nums.filter(num => num > 15);
// console.log(newNums);



// let nums = [1, 2, 3, 4, 5, 6];

// let newNums = nums.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNums);



// let words = ["apple", "hi", "banana", "ok", "mango"];

// let newWords = words.filter(word => word.length > 3);
// console.log(newWords);



// let prices = [100, 250, 80, 400, 150];

// let newPrices = prices.filter((price) => {
//   if (price >= 150) return price - (price * 0.1);
// })
// console.log(newPrices);

// let prices = [100, 250, 80, 400, 150];

// let newPrices = prices
// .filter(price => price >= 150)
// .map(price => price - (price * 0.1));

// console.log(newPrices);



// let names = ["rahim", "karim", "sakib", "jamal", "sadi"];

// let newNames = names
// .filter(name => name.length === 5)
// .map(name => name.toUpperCase());
// console.log(newNames);

//_______________________________________________________________________

// let nums = [10, 25, 30, 45, 50];

// let newNums = nums.filter(num => num > 30);
// console.log(newNums);



// let nums = [2, 4, 6, 8];

// let newNums = nums.map(num => num * num);
// console.log(newNums)



// let nums = [5, 10, 15, 20, 25];

// let newNums = nums
// .filter(num => num > 10)
// .map(num => num * 2);

// console.log(newNums);



let names = ["rahim", "karim", "sakib", "jamal", "sadi"];

let newNames = names.filter(name => name.length !== 5);
console.log(newNames);



// let words = ["apple", "banana", "mango"];

// let newWords = words.map(word => word + "!");
// console.log(newWords);



// let prices = [100, 200, 300, 400, 150];

// let newPrices = prices
// .filter(price => price >= 200)
// .map(price => price - (price * 0.2));

// console.log(newPrices);



let users = ["rahim", "karim", "sakib", "jamal", "sadi"];

let reUsers = users
.filter(user => user.length >= 5)
.map((user) => {
  return "User: " + user[0].toUpperCase() + user.slice(1);
})

console.log(reUsers);


// let numbers = [5, 12, 18, 7, 30, 25, 40];
// let words = ["apple", "hi", "banana", "ok", "mango"];

// let newNumbers = numbers
// .filter(num => num % 2 === 0)
// .map(num => num * 2);

// let newWords = words
// .filter(word => word.length > 3)
// .map(word => word.toUpperCase());

// let newArr = newNumbers.concat(newWords);

// newArr.forEach(a => console.log(a));


//______________________________________________________________________________________________________

// let nums = [5, 10, 15, 20];

// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);



// let nums = [2, 4, 6, 8];

// let multiply = nums.reduce((acc, curr) => acc * curr);
// console.log(multiply);



// let nums = [10, 5, 25, 15];

// let small = nums.reduce((acc, curr) {
//   if (curr < acc) {
//     return acc;
//   } else {
//     return 
//   }
// }, nums[0])

// সবচেয়ে ছোট number বের করো  --> I didn't understand this topic


// let prices = [100, 200, 300];

// let total = prices.reduce((acc, curr) => acc + curr);
// total = total + (total * 0.1);
// console.log(total);


let words = ["hello", "world", "js"];

let newWords = words.reduce((acc, curr) => acc + " " + curr);

console.log(newWords);

//---------------------------------------------------------------------------------


let numbers = [10, 25, 30, 45, 50, 60, 5];

let newNumbers = numbers
.filter(num => num >= 20)
.map(num => num % 2 === 0 ? num * 2 : num * 3)
.reduce((acc, curr) => acc + curr, 0);

console.log(newNumbers);


//---------------------------------------------------------------------

let items = ["apple", "banana", "mango", "orange"];
let prices = [100, 50, 200, 70];
let quantities = [2, 5, 1, 3];


//________________________________________________________________________

// let nums = [5, 12, 8, 20];

// let newNums = nums.find(num => num > 10);
// console.log(newNums);


// let nums = [1, 3, 5, 7];

// let newNums  = nums.some(num => num % 2 === 0);
// console.log(newNums);


let nums = [2, 4, 6, 8];

let newNums = nums.every(num => num % 2 === 0);
console.log(newNums);


// let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b];
// console.log(c);


let colors = ["red", "green", "blue"];

let [a, b] = colors;