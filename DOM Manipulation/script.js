// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// h1.textContent = "Rakibul";
// div.append(h1);
// // div.innerHTML = `  <h1></h1>
// //   <p></p>
// //   <h2></h2>`;
// document.body.append(div);

// let p = document.querySelectorAll("p");

// p.forEach(function(val) {
//   val.style.color = "red";
// })

let h1 = document.querySelector("h1");
let p = document.querySelector("p");

h1.textContent = "Rakibul Islam Sadi";
p.style.color = "blue";
p.style.fontSize = "20px";

let l = document.querySelector("li:nth-child(2)");
l.style.color = "yellow";

let li = document.querySelectorAll("li");

li.forEach(function (elm) {
  elm.style.fontWeight = "bold";
});

// const div = document.getElementById("div");
// let img = document.createElement("img");

// img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74p0-GFNquBzzGLN9SazH22Wrus46aPPqYQ&s");
// div.append(img);

let box = document.querySelector(".box");
box.classList.add("active");

let btn = document.createElement("button");
btn.textContent = "Click me";
document.body.appendChild(btn);

for (let i = 1; i <= 10; i++) {
  let div = document.createElement("div");
  div.textContent = `box no ${i}`;
  if (i % 2 === 0) {
    div.style.color = "lightgray";
  } else {
    div.style.color = "blue";
  }
  document.body.append(div);
}

// const fruits = ["Mango", "Banana", "Apple", "Orange", "Grape"];
// let ul = document.createElement("ul");

// fruits.forEach((val) => {
//   let li = document.createElement("li");
//   li.textContent = val;
//   li.style.listStyle = "none";
//   if (val === "Apple") {
//     li.style.color = "red";
//   }
//   ul.append(li);
// });
// document.body.appendChild(ul);

const user = { name: "Rakib", job: "Web Designer", city: "Dhaka" };
let newDiv = document.createElement("div");

newDiv.innerHTML = `
<h2>${user.name}</h2>
<p>${user.job}</p>
<p>${user.city}</p>`;
newDiv.classList.add("deg");

document.body.append(newDiv);

let nDiv = document.createElement("div");

for (let i = 1; i <= 10; i++) {
  let p = document.createElement("p");
  p.textContent = `5 * ${i} = ${5 * i}`;
  if ((5 * i) % 2 === 0) {
    p.style.backgroundColor = "lightgreen";
  }
  nDiv.append(p);
}
document.body.appendChild(nDiv);

let name = document.getElementById("name");
let marks = document.getElementById("marks");
let addS = document.getElementById("addS");
let stDiv = document.getElementById("stDiv");
let avarage = document.getElementById("avarage");

let school = {
  students: [],

  addStudent(name, marks) {
    this.students.push({ name, marks });
  },

  getAllStudents() {
    return this.students;
  },

  getAverageMarks() {
    let total = 0;
    for (let s of this.students) {
      total += s.marks;
    }
    return total / this.students.length;
  },
};

function renderStudent() {
  stDiv.innerHTML = "";
  let ul = document.createElement("ul");

  school.students.forEach((val) => {
    let li = document.createElement("li");
    li.textContent = `${val.name} - ${val.marks}`;
    ul.append(li);
  });
  stDiv.append(ul);
}



addS.addEventListener("click", () => {
  // stDiv.innerHTML = "";
  school.addStudent(name.value, Number(marks.value));
  renderStudent();
  // stDiv.innerHTML = school.getAllStudents();
});
