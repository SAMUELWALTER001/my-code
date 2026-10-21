// 1. Variables and data types
let name = "Samuel";
let age = 18;
let isStudent = true;
console.log(name);
console.log(age);
console.log(isStudent);

// 2. Changing a variable
name = "Walter";
console.log(name);

// 3. Decisions
let score = 65;
if (score >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}

// 4. Loop
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// 5. Function
function greet(person) {
    console.log("Hello " + person);
}
greet("Samuel");
greet("Ada");