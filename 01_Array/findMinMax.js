const arr = [10, 20, 30, 40, 50];

//!==============================================
function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}
console.log(findMinMax(arr));

//!=========================================
// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

//!===================================
// function findMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i <= arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(findMin(arr));

//! Ek line mein yaad rakhne ka trick
// arr.length = kitne elements hain (count)
// arr.length - 1 = last element ka index (position)
