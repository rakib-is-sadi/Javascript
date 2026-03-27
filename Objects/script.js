// let obj = {
//   name: "Rakibul Islam",
//   district: "Jashore",
//   roll: 276661
// };
// console.log(obj.name);
// console.log(obj["name"]);


// for (let sadi in obj) {
//   console.log(sadi, obj[sadi]);
// }

// // Object.keys(obj);
// // Object.entries(obj);

// let obj2 = {
//   name: "Sadi",
//   district: "Jashore",
//   roll: 197911
// };

// let mainObj = {...obj};
// console.log(mainObj);

// let obj3 = Object.assign({}, obj2);
// console.log(obj3);

// let obj4 = JSON.parse(JSON.stringify(obj)); //   <-----   Deep cloning   ----->
// console.log(obj4);

// obj.name = "Rakib";
// console.log(obj);


let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

car.year = 2022;
car.color = "Black";

console.log(car.brand);
console.log(car.model);
delete car.model;
console.log(car.model);




// let student = {
//   name: "Rahim",
//   age: 15,
//   class: 9
// };

// for(let key in student) {
//   console.log(key, student[key]);
// }




// let calculator = {
//   num1: 5,
//   num2: 3
// };

// calculator.add();

// // ✔ method add করো:

// // add()
// // subtract()   // you didn't teach me.




let result = {
  name: "Rakibul Islam",
  marks: {
    math: 80,
    english: 95,
    science: 70
  }
}
console.log(result.marks.math);




let obj = {
  name: "Sadi",
  age: 19
}

console.log(Object.keys(obj));
console.log(Object.values(obj));




// let user = {
// //   name: "Your Name",
// //   age: 17,
// //   isLoggedIn: false
// // };

// // ✔ করো:

// // login() method → isLoggedIn = true
// // logout() method → isLoggedIn = false
// // status() → console.log("Logged in" / "Logged out")   <--- You asked but didn't teach.




// let school = {
//   students: [
//     { name: "Rahim", marks: 80 },
//     { name: "Karim", marks: 65 },
//     { name: "Sadi", marks: 90 }
//   ],

//   method: function showStudents() {
//     return `${this.name} - ${this.marks}`;
//   }

// }



let user = {
  name: "Hiyashi",
  status: "Active",
  changeStatus: function(updt) {
    this.status = updt;
  },

  showProfile: function() {
    console.log(`User: ${this.name} is currently ${this.status}`)
  }

}

user.showProfile();
user.changeStatus("Offline");
user.showProfile();





// let cart = {
//   owner: "Hiyashi",
//   item: ["apple", "potato", "biskits"],
//   addItem(itemName) {
//     this.item.push(itemName);
//   },
//   totalItems() {
//     console.log(this.item.length);
//   },
//   showCart() {
//     for(let key of this.item) {
//       console.log(key);
//     }
//   }
// }

// cart.totalItems();
// cart.addItem("bag");
// cart.totalItems();
// cart.showCart();



let hero = {
  name: "Hiyashi",
  health: 100,
  power: 20,
  attack() {
    console.log(`${this.name} attacks with ${this.power} damage!`);
  },
  takeDamage(take) {
    this.health = this.health - take;
  },
  heal() {
    if (this.health === 100) {
      return this.health;
    } else if  (this.health >= 91) {
      this.health = 100;
    } else {
      this.health += 10;
    }
  },
  checkStatus () {
    if (this.health <= 0) {
      console.log(`Game Over! ${this.name} is defeated.`);
    } else {
      console.log(`${this.name} has ${this.health} HP left.`);
    }
  }
}

hero.attack();
hero.takeDamage(84);
hero.checkStatus();
hero.heal();
hero.heal();
hero.heal();
hero.heal();
hero.heal();
hero.heal();
hero.heal();
hero.heal();
hero.heal();
hero.checkStatus();





let fan = {
  brand: "RFL",
  speed: 0,
  isOn: false,

  turnOn() {
    this.isOn = true;
    console.log("Fan is ON");
  },

  increaseSpeed() {
    if (this.isOn === false) {
      console.log("Please turn on the fan first");
    } else if (this.speed < 5) {
      this.speed += 1;
      console.log(`Speed ${this.speed}`);
    } else {
      console.log("This is max power")
    }
  },

  turnOff() {
    this.isOn = false;
    this.speed = 0;
    console.log("Fan is OFF");
  },

  fanStatus () {
    let status = this.isOn ? "ON" : "OFF";
    console.log(`The fan is ${status} and speed ${this.speed}`);
  }
}

fan.fanStatus();




let account = {
  holderName: "Hiyashi",
  balance: 500,

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount} TK. New Balance: ${this.balance} TK.`)
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient Balance! You can withdraw maximum ${this.balance} TK.`);
    }else {
      this.balance -= amount;
      console.log(`Withdraw: ${amount} TK. Remaining Balance: ${this.balance} TK.`);
    }
  },

  checkBalance() {
    console.log(`Your name is ${this.holderName} and your current balance is ${this.balance} TK.`);
  }

}

account.deposit(500);
account.checkBalance();
account.withdraw(500);
account.checkBalance();
account.withdraw(400);
account.withdraw(200);



let student = {
  name: "Hiyashi",
  details: {
    age: 19,
    city: "Jashore"
  },
  marks: {
    math: 90,
    english: 100
  },

  showInfo() {
    console.log(`${this.name} lives in ${this.details.city} and got ${this.marks.math} in Math and ${this.marks.english} in English`);
  }
}

student.showInfo();


let classroom = [
  { name: "Hiyashi", city: "Jashore", marks: 90 },
  { name: "Rakib", city: "Dhaka", marks: 85 },
  { name: "Sany", city: "Khulna", marks: 95 }
];

// for (let data of classroom) {
//   if (data.marks >= 90) {
//     console.log(`${data.name} Top student, Marks: ${data.marks}`);
//   } else {
//     console.log(`${data.name}, Marks: ${data.marks}`);  }
// }


for (let data of classroom) {
  if(data.city === "Dhaka") {
    console.log(data);
  }
}



let myLibrary = [
  {title: "Javascript", author: "Rakib", isRead: true},
  {title: "Decipline", author: "Hiyashi", isRead: false},
  {title: "Failer", author: "Sadi", isRead: false}
]

// let filterLibrary = myLibrary.filter((book) => {
//   if (book.isRead === false) {
//     console.log(`You didn't read ${book.title} of ${book.author}.`);
//   }
// })

let unRead = myLibrary.filter(book => book.isRead === false);
console.log(unRead);

for(let book of myLibrary) {
  if (book.isRead === false) {
    console.log(`You didn't read ${book.title} of ${book.author}.`)
  }
}



// let school = {
//   students: [
//     { name: "Rahim", marks: 80 },
//     { name: "Karim", marks: 65 }
//   ]
// };

// console.log(school.students[0].name);
// console.log(school.students[1].marks);


// let school = {
//   students: [
//     { name: "Rahim", marks: 80 },
//     { name: "Karim", marks: 65 }
//   ],

//   showFirstStudent: function() {
//     console.log(this.students[0].name);
//   },

//   showAllStudents() {
//     for(let data of this.students) {
//       console.log(data.name);
//     }
//   }
// };

// school.showFirstStudent();
// school.showAllStudents();


let school = {
  students: [
    { name: "Rahim", marks: 80 },
    { name: "Karim", marks: 65 }
  ],

  getAllNames() {
    let names = [];
    for(let data of this.students) {
      names.push(data.name);
  }
  return names;
  },

  addStudent(name, marks) {
    this.students.push({name, marks})
  },

  getAverageMarks() {
    let total = 0;
    for(let data of this.students) {
      total += data.marks;

    }
    return total / this.students.length;
  },

  getTopStudent() {
    let top = this.students[0];

    for(let data of this.students) {
      if (data.marks > top.marks) {
        top = data;
      }
    }
    return top;
  }
};

school.getAllNames();
school.addStudent("Rakib", 70);
school.getAllNames();


console.log(school.students)

school.getAverageMarks();
school.getTopStudent();

//_________________________________________________________________________________________


let cart = [
  { product: "Laptop", price: 50000, quantity: 1 },
  { product: "Mouse", price: 1200, quantity: 2 },
  { product: "Keyboard", price: 2500, quantity: 1 }
];

let total = 0;

for(let data of cart) {
  total = total + (data.price * data.quantity);
}
console.log(total)


let movies = [
  { title: "Inception", rating: 8.8 },
  { title: "The Dark Knight", rating: 9.0 },
  { title: "Interstellar", rating: 8.6 },
  { title: "Fast X", rating: 6.5 },
  { title: "Avatar", rating: 7.8 }
];

for(let data of movies) {
  if (data.rating >= 8) {
    console.log(data.title);
  }
}



let students = [
  { name: "Rakib", mark: 35 },
  { name: "Sany", mark: 28 },
  { name: "Hiyashi", mark: 45 },
  { name: "Sadi", mark: 32 }
];

for (let data of students) {
  if (data.mark < 33) {
    console.log(`${data.name} has failed.`);
  } else {
    console.log((`${data.name} has passed.`))
  }
}



let products = [
  { name: "Phone", price: 20000 },
  { name: "Watch", price: 5000 },
  { name: "Headphone", price: 3000 }
];

function filterExpensive(list, minPrice) {
  for(let data of list) {
    if(data.price >= minPrice) {
      console.log(data)
    }
    }
}
filterExpensive(products, 4000);



function makeSquare(number) {
  return number * number
}
console.log(makeSquare(5));
console.log(makeSquare(10));
// let myResult = makeSquare(5);
// console.log(myResult);



let employees = [
  { name: "Rakib", salary: 50000 },
  { name: "Sany", salary: 30000 },
  { name: "Hiyashi", salary: 45000 },
  { name: "Sadi", salary: 25000 },
  { name: "Siam", salary: 60000 }
];


function getHighSalary(list, limit) {
  let filterName = [];
  let nameList = [];
  for(let data of list) {
    if(data.salary > limit) {
      filterName.push(data);
      nameList.push(data.name.toUpperCase());
    }
  }
  return [filterName, nameList];
}

let newlist = getHighSalary(employees, 40000);
console.log(newlist);