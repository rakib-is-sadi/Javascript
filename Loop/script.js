// for(let i = 1; i <= 100; i++) {
//   console.log("I'm Sadi");
// }

// let i = 2;

// while(i <= 30) {
//   console.log(i);
//   i++
// }

// let i = 1;

// do{
//   console.log(i);
//   i++;
// }
// while(i < 20);

// for(let i = 1; i < 100; i++){
//   console.log(i);
//   if (i === 20) {
//     break;
//   }
// }

//Task-1: Write a loop that prints the numbers from 1 to 10 in the console.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Task-2: Write a loop that prints only the even numbers between 1 and 20.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Task-3: Create a "Blast Off" timer. Your loop should start at 10 and count down to 1. After the loop finishes, print "Blast off! 🚀" to the console.

for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log("Blast Off");
  } else {
    console.log(i);
  }
}

//Task-4: Calculate the sum of all numbers from 1 to 50.

let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum = sum + i;
}

console.log(sum);

//Task-5: Write a loop that prints every 5th number starting from 0 up to 50 (0, 5, 10, 15...).

for (let i = 0; i <= 50; i += 5) {
  console.log(i);
}

//Task-6: Pick a number (like 7) and write a loop that prints its multiplication table from 1 to 10.

for (let i = 1; i <= 10; i++) {
  let x = 7;
  console.log(`7 * ${i} = ${x * i}`);
}

//Task-7: Write a loop that calculates and prints the square (i^2) of every number from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

//Task-8: Create a loop that goes from 1 to 20. Inside the loop, only add the numbers that are greater than 10 to a total variable. Print the final total at the end.

let total = 0;

for (let i = 1; i <= 20; i++) {
  if (i > 10) {
    total = total + i;
  }
}

console.log(total);

//Task-9: Write a loop from 1 to 10. For every number, print whether it is "Odd" or "Even".

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    console.log(`${i} is odd number`);
  } else {
    console.log(`${i} is even number`);
  }
}

//Task-10: Calculate the product (multiplication) of all numbers from 1 to 5.

let inTotal = 0;

for (let i = 1; i <= 5; i++) {
  inTotal = inTotal * i;
}
console.log(inTotal); // This is 0 cause nothing can multiply by 0 like 1 * 0 = 0;

//Task-11: Create a variable let message = "";. Write a loop that runs 5 times. Each time it runs, add the letter "A" to the message variable. Print the message at the very end.

let massage = "";

for (let i = 1; i <= 5; i++) {
  massage = massage + "A";
}

console.log(massage);

let marker = "";

for (let i = 1; i <= 6; i++) {
  if (i % 2 === 1) {
    marker = marker + "*";
  } else {
    marker = marker + "#";
  }
}
console.log(marker);

let result = "";

for (let i = 1; i <= 5; i++) {
  result = result + i;
}

console.log(result);

let odd = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 1) {
    odd = odd + i;
  }
}
console.log(odd);

let strings = "";

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    strings+= "FizzBuzz-";
  } else if (i % 5 === 0) {
    strings += "Buzz-";
  } else if (i % 3 === 0) {
    strings += "Fizz-";
  } else {
    strings += `${i}-`;
  }
}

console.log(strings);


//ask 13: The Battery Charger

let battery = 10;

while(battery <= 100) {

  if(battery === 50) {
    console.log("50% reached - Power Saving Mode Off");
  }
  else if (battery === 100){
    console.log("Phone Fully Charged! ⚡");
  }
  else{
    console.log("Current charge: " + battery + "%")
  }
  battery += 5;
}
