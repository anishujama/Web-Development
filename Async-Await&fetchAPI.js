// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }
async function getData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  console.log(data);
}
async function main() {
  console.log("loading module");

  console.log("do something else");

  console.log("load data");

  let data = await getData();

  console.log(data);

  console.log("process data");

  console.log(task2);
}
main();

// data.then(()=>{
//     console.log(data);
//     console.log("process data");
//     console.log(task2);
// })
