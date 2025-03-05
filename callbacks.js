console.log("Anish is a developer");
console.log("Anish is a daveloper");

setTimeout(() => {
  console.log("i am inside set time out");
  setTimeout(() => {
    console.log("i am inside set time out");
  }, 0);
}, 2000);
console.log("the end");


const  callback = (arg)=>{
  console.log(arg);
  
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Anish");
  document.head.append(sc);
};
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
