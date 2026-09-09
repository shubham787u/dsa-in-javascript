function secondLargest(arr){
    let max = -Infinity, secondMax = -Infinity;
    for (let i=0; i<arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] !== max){
            secondMax = arr[i];
        }
    }
    return secondMax === -Infinity ? -1:secondMax;
}
console.log(secondLargest([1,2,3,4,5]));