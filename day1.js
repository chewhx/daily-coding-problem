// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function factorialise(num) {
  let result = num;

  if (num <= 0) return false;
  if (num === 1) return result;
  while (num > 1) {
    num--;
    result = result * num;
  }
  return result;
}

// https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/

const k = 17;
const array = [10, 15, 3, 7];

function dayOneProblem(array = [], k) {
  if (!k || array.length < 2) return;

  const arrayLength = array.length;
  let result = false;

  for (i = 0; i < arrayLength; i++) {
    const el1 = array[i];
    for (n = i + 1; n < arrayLength; n++) {
      const el2 = array[n];
      console.log({ el1, el2, sum: el1+el2, k });
      if (k === el1 + el2) {
        return (result = true);
      }
    }
  }

  return result;
}

console.log(dayOneProblem([1, 1]));
console.log(dayOneProblem([1], 2));
console.log(dayOneProblem([], 2));
console.log(dayOneProblem(2));
console.log(dayOneProblem());

// console.log(dayOneProblem(array, 22));
// console.log(dayOneProblem(array, 11));
// console.log(dayOneProblem(array, 17));
// console.log(dayOneProblem(array, 18));
// console.log(dayOneProblem(array, 22));
// console.log(dayOneProblem(array, 10));
// console.log(dayOneProblem(array, 9));
// console.log(dayOneProblem(array, 8));
// console.log(dayOneProblem(array, 7));
// console.log(dayOneProblem(array, 99));
// console.log(dayOneProblem(array));
// console.log(dayOneProblem(9));
// console.log(dayOneProblem(25));
// console.log(
//   dayOneProblem(
//     [1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 4, 4, 4, 4, 5, 99, 1],
//     100
//   )
// );
