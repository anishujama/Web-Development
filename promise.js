console.log("This is promise");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("  no random number are not supporting you ");
  } else {
    setTimeout(() => {
      setTimeout(() => {
        console.log("yes i am done");
        resolve("Anish ");
      }, 3000);
    });
  }
});
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("  no random number are not supporting you 2");
  } else {
    setTimeout(() => {
      setTimeout(() => {
        console.log("yes i am done 2");
        resolve("Anish2 ");
      }, 3000);
    });
  }
});
let p2 = Promise.all([prom1, prom2]);
let p3 = Promise.allSettled([prom1, prom2]);
let p4 = Promise.race([prom1, prom2]);
let p5 = Promise.any([prom1, prom2]);
let p6 = Promise.resolve([prom1, prom2]);
let p7 = Promise.reject([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});
