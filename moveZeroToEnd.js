//! 7. Move Zeros to End

function moveZeroToEnd(arr) {
  let nonZeroIndex = 0; //index value 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex++] = arr[i];
    }
  }
  while (nonZeroIndex < arr.length) {
    arr[nonZeroIndex++] = 0;
  }
  return arr;
}

console.log(moveZeroToEnd([1, 2, 3, 0, 0, 0, 0, 0, 5, 7, 9]));
