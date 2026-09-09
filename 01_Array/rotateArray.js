//! 2nd time -Rotate array right by k steps

function rotateArray(arr, k) {
  k = k % arr.length;
  let rotated = [];
  for (let i = 0; i < arr.length; i++) {
    rotated[(i + k) % arr.length] = arr[i];
  }
  return rotated;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 2));

//! 1st time -Rotate array right by k steps
// function rotateArray(arr, k){
//     k = k % arr.length; //2%6
//     let n = arr.length; //6
//     let rotated = [];
//     for (let i=0; i<n; i++){
//         rotated[(i+k)%n] = arr[i];
//     }
//     return rotated;
// }
//  arr = [1, 2, 3, 4, 5, 6];
//  let k= 2;
//  let result = rotateArray(arr, k)
// console.log(result);

//!Division
// 1000 = 10
// console.log(1000/100); //10

//!Modules
// 1000 = 0
//  console.log(1000%100);
