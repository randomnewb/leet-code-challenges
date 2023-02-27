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

**/

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
