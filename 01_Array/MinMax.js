//!==================================
//!link - https://www.youtube.com/watch?v=rTJ0clIvH50&list=PL8p2I9GklV469rQUJL9o6Yj-0Z1aCzA1K&index=7
let data = [10, 4, 25, 1, 99, 34];
let large = data[0];
let small = data[0];
for (let i = 0; i < data.length - 1; i++) {
  if (data[i] > large) {
    large = data[i];
  }
  if (data[i] < small) {
    small = data[i];
  }
}
console.log("large:", large, "small :", small);

//!=======================================
// function findMinMax(arr) {
//   let min = arr[0],
//     max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     if (arr[i] > max) max = arr[i];
//   }
//   return { min, max };
// }
// console.log(findMinMax([1, 2, 3, 4, 5, 6]));
