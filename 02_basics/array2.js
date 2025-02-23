const marvel_heros = [ "A", "B","c"]
const dc = [ "'superman'", "'flash'", 'batman']

//marvel_heros.push(dc)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc]

//console.log(all_new_heros);

const another_array = [1,2,3,4,[5,6,7,],6,5,[7,5]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray('anish'))
console.log(Array.from('anish'))
console.log(Array.from({name: 'anish'})) // interestng


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



