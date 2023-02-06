const prompt = require("prompt-sync")({ sigint: true });

let n = (prompt("Enter a number: "));
let a = 0;
let b = 1;
let i = 0;
while (i < n) {
    if (i === 0) {
        console.log(a);
    } else if (i === 1) {
        console.log(b);
    } else {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
    i++;
}
