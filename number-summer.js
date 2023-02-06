const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number: "))
let sum = 0

while (num !== 0){
   sum = num += sum 
   console.log(" Sum "+ sum)
   num = Number(prompt("Please enter another number: "))

}
