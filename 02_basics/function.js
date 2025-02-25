// console.log("functions");

function nice(name) {
// console.log("Hey " + name + " you are nice ");
// console.log("Hey " + name + " can do better");
// console.log("Hey " + name + " you are always better than others no matter what people say");
// console.log("Hey " + name + " you have to do work honestly ");
}
nice("Anishujama");


function sum(a,b) {
    // console.log(a+b);
}
sum(9,20)

function sum(a,b, c=3) {
    return a+b+c
}
result1 = sum(9,45)
result2 = sum(6,45)
result3 = sum(5,45,1)

console.log("the sum of these number is : ", result1,result2,result3);


// console.log("Hey anish you are nice ");
// console.log("Hey anish can do better");
// console.log("Hey anish you are always better than others no matter what people say");
// console.log("Hey anish you have to do work honestly ");

const func1 = (x)=>{
    console.log("i am an arrow function",x);
    
}
func1(50);
func1(56);
func1(59);
