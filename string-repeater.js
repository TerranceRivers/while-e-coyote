const prompt = require("prompt-sync")({ sigint: true });

let str = prompt("Enter a string: ");
let sto = ""
while (sto.length < 10) {
    sto += str
     console.log(sto);
     
}
