// singleton 

// objects literals 
// Object.create 

const mySym = Symbol('key1')

const JsUser = { 
    "full name" : 'anishujama',
[mySym]: "mykey",
name : 'anish',
age : 20,
location : 'jaipur',
email : 'anish@gmail.com',
isloggesIn : false,
lastLoginDays : ['monday', 'saturday']

}


// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser["full name" ]);
// console.log(JsUser[mySym]);

JsUser.email = "anisher@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "anisher@g.com"
// console.log(JsUser);


JsUser.greeting = function(){
// console.log("hello js user")
}
JsUser.greetingTwo = function(){
// console.log(`hello js user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "samy"
tinderUser.isloggesIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sami",
            lastname: "khan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 =  {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2}
// const obj3  = Object.assign({}, obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "h@gmai.com"

    }
]
// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isloggesIn"));


const course = {
coursename: "js in hindi",
price: "999",
courseInstructor: "hitesh sir"
}
// course.courseInstructor

const{courseInstructor:instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {

// }
// navbar(company = "anish")

// {
//     "name":"anish",
//     "courseName": "js in hindi",
//     'price': "free"
// }









