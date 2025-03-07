// let obj = {
//     a:1,
//     b:"Anish"
// }
// console.log(obj);

// let animal = {
//     eats:true

// }
// let rabbit = {
//     jumps:true
// }
// rabbit.__proto__ = animal


class animal{
    constructor(name){
        this.name = name
        console.log("object is created..");
        
    }
    eats(){
        console.log("khat bani");
        
    }
    jumps(){
        console.log("koode be");
        
    }
}

class lion extends animal{

    constructor(name){
        super(name)
        console.log("object is created and he is a lion");
        
    }
    eats(){
        super.eats()
        console.log("khat bani chicken");
        
    }
}

let a = new animal("bamunda")
console.log(a);

let l = new lion("sheru")
console.log(l);
