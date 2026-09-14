//! 10. Union of Two Arrays

function arrayUnion(arr1, arr2) {
  let result = arr1.slice();
  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result[result.length] = arr2[i];
    }
  }
  return result;
}
console.log(arrayUnion([1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8, 9]));

//answer-[1, 2, 3, 4, 5,6, 7, 8, 9]
