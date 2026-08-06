/**
 * Reverse a number
 * Input : 1234
 * Output : 4321
 */
// T.C. = O(n)

//!Not Point- lastDigit = num % 10, reverse = reverse * 10 + lastDigit, num = num / 10,

let num = 1234;
let reverse = 0;

while (num > 0) {
  let lastDigit = num % 10;
  reverse = reverse * 10 + lastDigit;
  num = Math.floor(num / 10);
}
console.log(reverse);
