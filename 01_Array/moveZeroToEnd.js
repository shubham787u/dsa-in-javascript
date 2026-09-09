//!====Move Zeros to End
//link-https://www.youtube.com/watch?v=ogh-aUJCzzI&list=PL8p2I9GklV469rQUJL9o6Yj-0Z1aCzA1K&index=8

let arr = [0, 1, 0, 3, 12];
let index = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[index] = arr[i];
    index++;
  }
}
for (let i = index; i < arr.length; i++) {
  arr[i] = 0;
}
console.log(arr);

//! 7. Move Zeros to End
// function moveZeroToEnd(arr) {
//   let nonZeroIndex = 0; //index value 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[nonZeroIndex++] = arr[i];
//     }
//   }
//   while (nonZeroIndex < arr.length) {
//     arr[nonZeroIndex++] = 0;
//   }
//   return arr;
// }

// console.log(moveZeroToEnd([1, 2, 3, 0, 0, 0, 0, 0, 5, 7, 9]));
