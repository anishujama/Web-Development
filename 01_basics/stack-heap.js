// memory 
// stack & heap 
// In stack prmitive data types are used
// In heap reference data types are used

let myYoutubename = "cosmosfact"
let anothername = myYoutubename
anothername  = "anishworld"
// console.log(anothername);
// console.log(myYoutubename);

 let userOne= {
    email: "user@gmail.com",
    upi: "user@ybl"

 }
 let userTwo = userOne

 userTwo.email = "anish@gmail.com"
 console.log(userTwo.email);
 console.log(userOne.email);
 