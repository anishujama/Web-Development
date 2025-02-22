const name = "anish"
const repoCount = 5

console.log(name + repoCount + " value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =  new String('anishu-jama-k')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)

console.log(newString);
const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "     anish   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://anish.com//anishujamakhan"

url.replace('jama', '-')
console.log(url.replace('jama', '-'));
console.log(url.includes('anish'));
console.log(gameName.split('-'));








