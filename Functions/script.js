// Function Statement

function abcd() {
  console.log("Rakibul Islam");
  console.log("Rakibul Islam");
  console.log("Rakibul Islam");
  console.log("Rakibul Islam");
  console.log("Rakibul Islam");
  console.log("Rakibul Islam");
}

abcd();

// Function Expression

let rakib = function (a) {
  console.log("Rakibul Islam Sadi " + a);
};

rakib(0);

// Fat arrow Function

let sadi = () => {
  console.log("Rakibul Sadi");
};

sadi();
//_________________________________________________________________________________________________________

function fn(a = "Sadi") {
  console.log(`${a} is singing`);
}

fn();
fn("Sani");
fn("Yasin");

//______________________________________________________________________________________________________________

function add(v1 = 0, v2 = 0) {
  console.log(v1 + v2);
}

add(3, 4);
add();

//--------------------------------------------------------------------------------------------------------------------

function pqr(...val) {
  console.log(val);
}

pqr(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

//------------------------------------------------------------------------------------------------------------------------

function meow(a1, a2) {
  return a1 + a2;
}

let val = meow(20, 20);

console.log(val);

// first class functon----------------------------------------------------------------------------------

function fc(val) {
  val();
}

fc(function () {
  console.log("This is Rakibul Islam"); // we can treat function as value
});

function discountCalculator(discount) {
  let price = 100;
  return price - price * (discount / 100);
}

console.log(discountCalculator(10));
console.log(discountCalculator(20));

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

console.log(counter());
console.log(counter());
console.log(counter());

let c = counter();
console.log(c());
console.log(c());
console.log(c());

function calculateTotal(price, discountPercentage) {
  return price - price * (discountPercentage / 100);
}

console.log(calculateTotal(200, 20));

function analyzeNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 2 === 1) {
      console.log(`${i} is Odd and Divisible by 3`);
    } else if (i % 3 === 0 && i % 2 === 0) {
      console.log(`${i} is Even and Divisible by 3`);
    } else if (i % 2 === 1) {
      console.log(`${i} is Odd`);
    } else {
      console.log(`${i} is Even.0`);
    }
  }
}
analyzeNumbers(10);