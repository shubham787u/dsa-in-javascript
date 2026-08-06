//input -> 45678
//output -> 5
//TC = O(n)

let num = 45678;
let count = 0;

while (num > 0) {           //while , gives always one condition is true,
  num = Math.floor(num / 10);
  count++;
}
console.log(count);
