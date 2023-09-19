// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

const makeString = (s) =>
  s
    .split(" ")
    .map((i) => i[0])
    .join("");

console.log(makeString("hello world! how are you doing?"));
