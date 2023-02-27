console.log("Hello world!");

/* 
Isograms

https://www.codewars.com/kata/54ba84be607a92aa900000f1

An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

Completed on January 24th, 2023


function isIsogram(str) {
  str = str.toLowerCase();

  let strSize = str.length;

  // Empty strings are valid isograms
  if (str === "") {
    return true;
    // Check if any letters are the same as any other letters
    // in the string
  } else {
    // Declare an empty array to hold the individual letters

    let repeatStr = [];

    // Add each individual letter
    for (let i = 0; i < str.length; i++) {
      str[i].toLowerCase();
      repeatStr.push(str[i]);
    }

    let j = 0;

    while (j < strSize) {
      j = j + 1;
      for (let i = 0; i < repeatStr.length; i++) {
        // We want to iterate through every possibility for the entire length of the string
        // To check if a letter matches some other letter, but we do not want to brute force it
        // There could be an infinitely long string
        // so for example, we want to check i+1, i+2, i+3, etc., but i+j works just fine
        if (repeatStr[i + j] === repeatStr[i]) {
          console.log("str is", str);
          console.log("j is", j);
          console.log("i is", i);
          console.log("test", repeatStr[i + j]);
          console.log("each letter", repeatStr[i]);
          return false;
        }
      }
    }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moose"));
console.log(isIsogram("aba"));

**/

/*
Find The Parity Outlier

https://www.codewars.com/kata/5526fc09a1bbd946250002dc

You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

Completed on January 24th, 2023
**/

function findOutlier(integers) {
  let evenOrOdd = 0;

  // Determine if even or odd
  for (i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      evenOrOdd++;
    }
  }

  // Even

  let outlier = 0;

  // If even, just look for the 'odd one out'
  if (evenOrOdd >= 2) {
    for (i = 0; i < integers.length; i++) {
      if (Math.abs(integers[i] % 2) === Math.abs(1)) {
        outlier = integers[i];
        return integers[i];
      }
    }
    // Odd
    // If odd, look for the 'even one out'
  } else {
    for (i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        outlier = integers[i];
        return integers[i];
      }
    }
  }
}

const a = [2, 4, 0, 100, 4, 11, 2602, 36];
const b = [160, 3, 1719, 19, 11, 13, -21];

console.log(findOutlier(a));
console.log(findOutlier(b));
