//!Nested Array in js- doing flatten,
// input : [2, 4, 6, [10, 20, 30], [300, 500, 700]];
// output : [2,4,6,10,20,30,300,500,700];

let data = [2, 4, 6, [10, 20, 30], [300, 500, 700]];
let collect = [];
function flatten(data) {
  for (let i = 0; i < data.length; i++) {
    if (Array.isArray(data[i])) {
      flatten(data[i]);
    } else {
      collect.push(data[i]);
    }
  }
}
flatten(data);
console.log(collect);
