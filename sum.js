//1)
// function sum(arr){
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total = total + arr[i];
//   }
//   return total;
// }
// console.log(sum([1, 2, 3, 4, 5]));

//time complexcity O(n)

//2)
function double(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
console.log(double([1, 2, 3]));
