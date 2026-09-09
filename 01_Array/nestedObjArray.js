//!By using this approach to object keys in Array,

let data = {
  name: "shubham singh",
  age: 30,
  email: "shubh.maa2016@gmail.com",
  company: "Qspider",
};

//!1. inbuilt-method
// let keys = Object.keys(data);
// console.log(keys);

//! 2.using by for in loop
// let keys = [];
// for (k in data) {
//   keys[keys.length] = k;
// }
// console.log(keys);

//!3. using by for in loop
let keys = [];
let index = [0];
for (k in data) {
  keys[index] = k;
  index++;
}
console.log(keys);
