// 12. Palindrome Check - A palindrome is a word, number, or string that reads the same forward and backward.

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start++] !== str[end--]) {
      return false;
    }
    return true;
  }
}

console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("Shubham")); //false
console.log(isPalindrome("madam"));
console.log(isPalindrome("level"));
console.log(isPalindrome("121"));
