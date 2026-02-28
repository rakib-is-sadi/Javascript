// let age = 8;
// switch (true) {
//   case age > 50:
//     console.log("old");
//     break;
//   case age >= 18:
//     console.log("adult");
//     break;
//   default:
//     console.log("kid");
// }

// function getAge(age) {
//   if (age > 50) return "Old";
//   if (age >= 18) return "Adult";
//   return "kid";
// }

// console.log(getAge(51));

// Write a program that prints A, B, C, D, or F based on marks

function grade(mark) {
  if (mark >= 80 && mark <= 100) return "A";
  if (mark >= 60 && mark <= 79) return "B";
  if (mark >= 40 && mark <= 59) return "C";
  if (mark >= 33 && mark <= 39) return "D";
  return "Fail";
}

console.log(grade(66));

// Given player1 and player2's choice, print winner or draw

function rps(Sadi, Sani) {
  if (Sadi === Sani) return "Draw";
  if (Sadi === "rock" && Sani === "sessor") return "Sadi";
  if (Sadi === "sessor" && Sani === "paper") return "Sadi";
  if (Sadi === "paper" && Sani === "rock") return "Sadi";
  return "Sani";
}

console.log(rps("rock", "rock"));

let isLoggedIn = true;
let isAdmin = false;
// Show different messages based on combination

function checker() {
  if (isLoggedIn && isAdmin) return "You are Admin";
  if (isLoggedIn) return "You are Member";
  return "You are Others";
}

console.log(checker());

let weather = "sunny";
// Use switch-case to print what to wear

switch (weather) {
  case "rainy":
    console.log("This is Rain");
    break;
  case "sunny":
    console.log("This is Sun");
    break;
  default:
    console.log("Another weather");
}

// Return "Kid", "Teen", "Adult", or "Senior"

function accesability(age) {
  if (age > 60) return "Senior";
  if (age >= 18) return "Adult";
  if (age >= 12) return "Teen";
  return "Kid";
}

console.log(accesability(29));

//-----------------------------------------------------------------------

// 1st question

function result(mark) {
  switch (true) {
    case mark >= 80 && mark <= 100:
      return "A+";
      break;
    case mark >= 70 && mark < 80:
      return "A";
      break;
    case mark >= 33 && mark < 70:
      return "Passed";
    case mark >= 0 && mark < 33:
      return "Failed";
    default:
      return "You are a Alien";
  }
}

console.log(result(80));

// 2nd question

let month = "December";

switch (month) {
  case "December":
  case "January":
  case "February":
    console.log("Winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("Spring");
    break;
  default:
    console.log("Other Season");
}

// 3rd question

function traficSignal(color) {
  if (color === "red") return "Stop";
  if (color === "yellow") return "Slow down";
  if (color === "green") return "Go";
  return "Signal Broken";
}

console.log(traficSignal("green"));

// Calculator

function calc(num1, num2, op) {
  if (op === "+") return num1 + num2;
  if (op === "-") return num1 - num2;
  if (op === "*") return num1 * num2;
  if (op === "/") return num1 / num2;
  if (op === "%") return num1 % num2;
}
console.log(calc(10, 2, "%"));

//--------------------------------------------------------------------------------------

function calculateDiscount(price, isMember, promoCode) {
  if (price <= 0) return "Invalid Price";
  if (!isMember) return price;
  if (promoCode === "SAVE10") return price * 0.9;
  if (promoCode === "SAVE20") return price * 0.8;
  return price * 0.95;
}

console.log(calculateDiscount(1000, true, "SAVE30"));

//--------------------------------------------------------------------------------------

let fee = 1000;

function gymFee(age, gender, hasCoupon) {
  if (age < 18) return "Not allowed for kids";
  if (age > 60) return 500;
  if (gender === "female") return fee * 0.8;
  if (hasCoupon) return fee * 0.9;
  return fee;
}

console.log(gymFee(23, "male", false));

//----------------------------------------------------------------------------------------

function courseFee(age, occupation, hasPromoCode) {
  if (age < 12) return "Not for kids";

  let fee = 1000;

  if (occupation === "student") return (fee = 500);
  if (occupation === "teacher") return (fee = 300);
  if (hasPromoCode) return fee - 50;
  return fee;
}

console.log(courseFee(21, "men", false));

//-----------------------------------------------------------------------------------------

function calculateShipping(weight, destination, isPremiumMember) {
  if (weight <= 0) return "Invalid Weight";
  if (isPremiumMember) return 0;

  let charge = 150;

  switch (destination) {
    case "Dhaka":
      charge = 60;
      break;
    case "Chittagong":
      charge = 100;
  }

  if (weight > 5) {
    charge = charge + 50;
  } else if (weight > 2) {
    charge = charge + 20;
  }

  return charge;
}

console.log(calculateShipping(4, "Jashore", false));
