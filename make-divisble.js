const prompt = require("prompt-sync")({ sigint: true });

let x = Number(prompt(" Enter Number"))
let y = Number(prompt(" Enter Number"))


while (x % y !== 0){
x++
console.log(x)
}
console.log( x + " is divisble by "+ y)