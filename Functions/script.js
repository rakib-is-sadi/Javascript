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
}

rakib(0);

// Fat arrow Function

let sadi = () => {
  console.log("Rakibul Sadi");
}

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
  console.log(val)
}

pqr(1,2,3,4,5,6,7,8,9,0);

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
  console.log("This is Rakibul Islam") // we can treat function as value
});