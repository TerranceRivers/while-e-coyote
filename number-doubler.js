const prompt = require("prompt-sync")({ sigint: true });

let num = Number(prompt("Enter a Number: "));
console.log(num);
while (num < 100) {
  num *= 2;

  console.log(num);
}
console.log("Reached 100 or greater.");
