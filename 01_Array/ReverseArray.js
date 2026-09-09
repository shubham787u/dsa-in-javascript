// function reverseArray(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed[reversed.length] = arr[i];
//   }
//   return reversed;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));

//=================================================
// function reverseArray(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed[reversed.length] = arr[i];
//   }
//   return reversed;
// }
// let x = reverseArray([1, 2, 3, 4, 5]);
// console.log(x);

//==============================================
// let arr = [10, 20, 30, 40, 50];
// function reverseArray(arr) {
//   let reverse = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse[reverse.length] = arr[i];
//   }
//   return reverse;
// }
// console.log(reverseArray(arr));

//!==============================
let data = [2, 6, 9, 1, 10, 30];
function reverseArray(data) {
  let temp = [];
  for (let i = data.length - 1; i >= 0; i--) {
    temp.push(data[i]);
  }
  return temp;
}
let nerData = reverseArray(data);
console.log(nerData);
