// let a = [-3, 5, 1, -2, -6, 4, 3, -7];
// a = a.sort();
// let b = [];
// document.getElementById(a);

// for (let i = 0; i <= a.length - 1; i++) {
//   if (a[i] < 0) {
//     b.unshift(a[i]);
//   } else {
//     b.push(a[i]);
//   }
// }
// document.getElementById(b);

// let a = [-3, 5, 1, -2, -6, 4, 3, -7];
// a = a.sort();
// let b = [];
// let firstarr = [];
// let secondarr = [];
// for (let i = 0; i <= a.length - 1; i++) {
//   if (a[i] < 0) {
//     b.unshift(a[i]);
//     secondarr = b.slice(0);
//   } else {
//     b.push(a[i]);
//     firstarr = b.slice(4).reverse();
//   }
// }
// document.getElementById("newie").innerHTML = secondarr + "," + firstarr;

// let a = ["abc", "cbdf", "ddd"];
// document.getElementById(a.splice(1, 1, "CCC"));
// document.getElementById(a);

// let arr = ["a", "b", [["c", "d"], "e"], "f", ["g"]];
// let finalarr = [];
// for (let i = 0; i <= arr.length - 1; i++) {
//   if (newarr[i] == ",") {
//     continue;
//   }
//   finalarr.push(newarr[i]);
// }
// document.getElementById(finalarr);

// function RecArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       RecArray(arr[i]);
//     } else {
//       finalarr.push(arr[i]);
//     }
//   }
// }

// RecArray(arr);
// document.getElementById(finalarr);

// let n = 5;
// for (let i = 1; i <= 10; i++) {
//   document.getElementById("5 " + "* " + i + " = " + 5 * i);
// }

//Department :Engineering

// ================================

// const info = {
//   organization: "Acme Corporation",
//   departments: [
//     {
//       name: "Engineering",
//       manager: "Alice Smith",
//       teams: [
//         {
//           name: "Backend Team",
//           members: [
//             {
//               name: "John Doe",
//               age: 35,
//               skills: ["Java", "Spring", "MySQL"],
//               status: "contractual",
//             },
//             {
//               name: "Emma Johnson",
//               age: 28,
//               skills: ["Python", "Django", "PostgreSQL"],
//               status: "contractual",
//             },
//           ],
//         },
//         {
//           name: "Frontend Team",
//           members: [
//             {
//               name: "Michael Brown",
//               age: 32,
//               skills: ["JavaScript", "React", "HTML", "CSS"],
//               status: "contractual",
//             },
//             {
//               name: "Sophia Garcia",
//               age: 30,
//               skills: ["Angular", "TypeScript", "SASS"],
//               status: "contractual",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "Marketing",
//       manager: "Bob Johnson",
//       teams: [
//         {
//           name: "Digital Marketing",
//           members: [
//             {
//               name: "David Lee",
//               age: 29,
//               skills: ["SEO", "SEM", "Google Analytics"],
//               status: "contractual",
//             },
//             {
//               name: "Olivia Taylor",
//               age: 27,
//               skills: ["Content Marketing", "Social Media", "Email Marketing"],
//               status: "payroll",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// //1

// document.getElementById("btn").onclick = lang;

// function lang() {
//   var items = document.getElementById("lang").value;
//   items = items[0].toUpperCase() + items.slice(1);
//   console.log(items);

//   for (const department of info.departments) {
//     for (const team of department.teams) {
//       for (const member of team.members) {
//         if (member.skills.includes(items)) {
//           document.getElementById("emp2").innerHTML = "";
//           document.getElementById("emp1").innerHTML =
//             "Employee Name: " + member.name;
//           document.getElementById("department1").innerHTML =
//             "Department: " + department.name;
//           return;
//         }
//       }
//     }
//   }

//   document.getElementById("emp2").innerHTML =
//     "No employee found with skill: " + items;
// }

//2

// for (const department of info.departments) {
//   console.log("==============>Employees<============");
//   console.log("Department : " + department.name);
//   for (const team of department.teams) {
//     for (const member of team.members) {
//       console.log("Employee : " + member.name);
//     }
//   }
// }

//3

// let inputProp = prompt("Enter Age");

// for (const department of info.departments) {
//   for (const team of department.teams) {
//     for (const member of team.members) {
//       if (inputProp == member.age) {
//         console.log(member.name);
//       }
//     }
//   }
// }

// Find the Employees who are on payroll and contractual catgorized by department

//4
// let numEmp = 0;

// for (const department of info.departments) {
//   for (const team of department.teams) {
//     for (const member of team.members) {
//       numEmp++;
//     }
//   }
// }

// console.log("Total number of employees:", numEmp);

//5

// for (const department of info.departments) {
//   console.log("Department : " + department.name);
//   for (const team of department.teams) {
//     for (const member of team.members) {
//       console.log("Employee Name : " + member.name);
//       console.log("Status : " + member.status);
//     }
//   }
// }

// console.log(Math.floor(Math.random() * 6 + 1))
// const printFuc = (func, count) => {
//   for (let i = 1; i < count; i++) {
//     func();
//   }
// };

// let greet = () => {
//   console.log("hello");
// };

// printFuc(greet, 3);

// let arr = [1, 2, 3, 4];
// for (let items of arr) {
//   console.log(items);
// }

// let arr = [10, 20, 30, 31];

// let ans = arr.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });

// console.log(ans);

// let div = document.createElement("div");
// document.querySelector("body").append(div);
// div.classList.add("box");
// div.innerText = "Hello";

// let para = document.createElement("p");
// para.innerText = "I Am Red";
// document.querySelector("body").append(para);
// para.classList.add("red");

// let h3 = document.createElement("h3");
// h3.innerText = "I Am Red";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let randomColor = randomGen();
  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;
  document.querySelector("p").innerText = "Color Code : " + randomColor;
});

const randomGen = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};
