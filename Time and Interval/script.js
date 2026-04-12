// setTimeout(function() {
//     console.log("hello")
// }, 1000);

// setInterval(function() {
//   for(i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }, 1000)

// for (let i = 1; i <= 10; i++) {
//   setInterval(function() {
//     console.log(i);
//   })
// }

// setInterval(function() {
//   console.log("hello")
// }, 1000)

let count = 10;

// setInterval(function() {
//   if (count <= 0) {
//     clearInterval();
//   } else {
//     count--;
//   }
//   console.log(count);
// }, 1000)

// let intv = setInterval(function() {
//   if (count >= 0) {
//     console.log(count);
//     count--;
//   }else {
//     clearInterval(intv);
//   }
// }, 1000)

// let num = 0;

// let noNum = setInterval(() => {
//   console.log(num);

//   if (num === 20) {
//     clearInterval(noNum);
//   }

//   num++;

// }, 1000)

function format(time) {
  return time < 10 ? "0" + time : time;
}

let mn = document.querySelector("#m");
let sc = document.querySelector("#s");
let mls = document.querySelector("#ms");

let m = 0;
let s = 0;
let ms = 0;

setInterval(() => {
  ms++;

  if (ms === 100) {
    ms = 0;
    s++;
  }

  if (s === 60) {
    s = 0;
    m++;
  }

  mn.innerHTML = format(m);
  sc.innerHTML = format(s);
  mls.innerHTML = format(ms);
}, 10);

let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

// setInterval(() => {

// let currentTime = new Date();

//   hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//   min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
//   sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
// }, 1000)

setInterval(() => {
  let currentTime = new Date();

  hrs.innerHTML = format(currentTime.getHours());
  min.innerHTML = format(currentTime.getMinutes());
  sec.innerHTML = format(currentTime.getSeconds());
});

let inner = document.getElementById("inner");
let percent = document.getElementById("percent");
let loding = document.getElementById("loding");
let increse = 0;

let interval = setInterval(() => {
  if (increse < 100) {
    increse++;

    inner.style.width = `${increse}%`;
    percent.innerHTML = `${increse}%`;

    if (increse === 100) {
      loding.innerHTML = "Complete";
      clearInterval(interval);
    }
  }
}, 30);
