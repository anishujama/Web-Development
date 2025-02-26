console.log("Faulty Calculator");

let random = Math.random()
let a = prompt("enter first number")
let b = prompt("enter second number")
let c = prompt ("enter operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/":"*",
    
}
if (random>0.1) {
    console.log((`The result is ${a} ${b} ${c}`));
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}
else
{
    c + obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
