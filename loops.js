 let a = [1,2,3,465,654,345]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
    
// }

// a.forEach((value,index,array) => {
//     console.log(value,index,array);
// });


// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element);
//         console.log(key,element);
        
        
//     }
// }


for (const value of a) {
    console.log(value);
    
}
