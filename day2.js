/* Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

const array = [1, 2, 3, 4, 5];

function dayTwoProblem(array) {
  if (!array) return;
  if (array.length < 3) return;
  const arrayLength = array.length;
  let results = [];
  for (let i = 0; i < arrayLength; i++) {
    const newArray = [...array];
    const a1 = newArray.splice(0, i);
    const a2 = newArray.splice(1, arrayLength);
    const a3 = [...a1, ...a2];
    const ans = a3.reduce((acc, value) => acc * value);
    results.push(ans);
  }
  return results;
}

console.log(dayTwoProblem([1, 2, 3, 4, 5]));
console.log(dayTwoProblem([3, 2, 1]));
console.log(dayTwoProblem([1]));
console.log(dayTwoProblem([90, 0]));
console.log(dayTwoProblem([]));
console.log(dayTwoProblem([9, 5, 4]));
console.log(dayTwoProblem([1, 4, 8, 12, 4, 1]));
