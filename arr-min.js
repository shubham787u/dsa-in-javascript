// find min element in arr,
//input = [3,7,2,9,1]
//output = 1

let arr = [3, 7, 2, 9, 1];
let min = arr[0];
for (let i = 1; i < arr.length; i++) { // let i =1 bec the index of arr [0] assume min then we start search or compare to each element in  give arr,
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(min);