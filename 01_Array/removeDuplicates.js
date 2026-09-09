//not run

function removeDuplicates(arr){
    let unique = [];
    for (let i=0; i<arr.length; i++){
        let found = false;
        for(let j=0; j<unique.length; j++){
            if(arr[i] === unique[i]){
                found = true;
                break;
            }
        }
        if (!found) unique[unique.length] = arr[i];
    }
    return unique;
}
console.log(removeDuplicates([1,2,3,4,4,5,6]));