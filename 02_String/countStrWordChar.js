//!https://www.youtube.com/watch?v=MZ4JrG4VIkw&list=PL8p2I9GklV469rQUJL9o6Yj-0Z1aCzA1K&index=10

// let str = "shubham singh kaise ho app";
// let count = 0;
// let isWord = false;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== " " && !isWord) {
//     count++;
//     isWord = true;
//   } else if (str[i] == " ") {
//     isWord = false;
//   }
// }
// console.log(count);

//!13. Count Character Occurrences

function charFrequency(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (!freq[str[i]]) freq[str[i]] = 1;
    else freq[str[i]]++;
  }
  return freq;
}
console.log(charFrequency("Shubham Singh"));
