Aijaz Ali
10:05 AM
console.log(a);
var a = 10;
console.log(a)

console.log(a);
let a = 10;
console.log(a)


function Example() {
  console.log(b);
  var b = 20;
  console.log(b);
}

Example();
Aijaz Ali
10:09 AM
function outerFunction(outerValue) {
  console.log(`Outer function has outerValue: ${outerValue}`);

  function innerFunction(innerValue) {
    console.log(`Inner function has innerValue: ${innerValue}`);
    console.log(`Inner function also has access to outerValue: ${outerValue}`);
  }

  return innerFunction;
}

const out1 = outerFunction(10);
const out2 = outerFunction(20);

out1(100);
out2(200);
Aijaz Ali
10:38 AM
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
You
10:39 AM
A C D B
Hover over a message to pin it
keep
Aijaz Ali
10:50 AM
Two Sum Problem
Given an array and a target, return indices of two numbers that add up to the target.
Example: [2, 7, 11, 15], target=9 → [0, 1]
Aijaz Ali
11:06 AM
[-1, -2, -3, -4, -5], target = -8
Aijaz Ali
11:07 AM
[0, 5, 7], target = 7
[1, 2, 3, 4], target = 100