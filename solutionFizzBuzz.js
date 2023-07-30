// Write a function that takes an integer and returns an array [A, B, C],
// where A is the number of multiples of 3 (but not 5) below the given integer,
// B is the number of multiples of 5 (but not 3) below the given integer and C
//  is the number of multiples of 3 and 5 below the given integer.

// For example, solution(20) should return [5, 2, 1]

function solution(number) {
  let a = 0,
    b = 0,
    c = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      c += 1;
    } else if (i % 5 === 0) {
      b += 1;
    } else if (i % 3 === 0) {
      a += 1;
    }
  }
  return [a, b, c - 1];
}

console.log(solution(15));
