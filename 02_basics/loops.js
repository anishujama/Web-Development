// console.log("loops");

let a = 1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);

for (let i = 0; i < 100; i++) {
    // 
    // console.log(a+i);
}

let obj = {
    name : "Anish",
    role: 'senior manager ',
    company: "sabiha Tech"
}
for (const key in obj) {
        const element = obj[key];
        // console.log(element);
}

for (const c of "Anish") {
    // console.log(c);   
}
// let i=0;
// while (i<6) {
//     // console.log(i);
//     i++;
// }

let i = 200;
do {
    // console.log(i);
    i++;
} while (i<6);
