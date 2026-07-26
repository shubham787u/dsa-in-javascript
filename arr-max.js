// find max element in arr,
//input = [3,7,2,9,1]
//output = 9

let arr = [3, 7, 2, 9];
let max = arr[0];               //index - [0,1,2,3,4]
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
