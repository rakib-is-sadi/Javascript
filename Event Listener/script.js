let inp = document.querySelector("input");
let input = document.querySelector(".input");

inp.addEventListener("input", (a) => {
  console.log(a.data);
})

input.addEventListener("click", () => {
  inp.focus();
})


let h4 = document.querySelector("h4");
let sel = document.querySelector("select");

sel.addEventListener("change", (val) => {
  h4.textContent = `You selected ${val.target.value}`;
})


let bgc = document.querySelectorAll(".bgc");

bgc.forEach(val => {
  val.addEventListener("mouseover", () => {
  val.style.background = "yellow";
})
val.addEventListener("mouseout", () => {
  val.style.background = "red";
})
})


let follower = document.querySelector(".follower");

window.addEventListener("mousemove", (dets) => {
  follower.style.top = dets.clientY + "px";
  follower.style.left = dets.clientX + "px";
})

let ul = document.querySelector("ul");

ul.addEventListener("click", (dets) => {
  dets.target.classList.toggle("lt");
})
