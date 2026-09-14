//! 8. Missing Number (1 to n)
//arr[], and n = no. of element

function findMissingNumber(arr, n) {
  //tow parameters
  let total = (n * (n + 1)) / 2; //maths formula
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return total - sum;
}

console.log(findMissingNumber([1, 2, 3, 5], 5));

//O(n) TC
//"First, I calculate the expected sum of numbers from 1 to n using the formula n * (n + 1) / 2. Then I calculate the actual sum of the array using a loop. The difference between the expected sum and actual sum is the missing number."
