console.log("Hello world!");

/* 
List Filtering

https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

Completed on January 26th, 2023
**/

function filter_list(l) {
  let n = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] !== "string") {
      n.push(l[i]);
    }
  }
  return n;
}

const a = [1, 2, "a", "b"];
const b = [1, "a", "b", 0, 15];
const c = [1, 2, "aasf", "1", "123", 123];

console.log(filter_list(a));
console.log(filter_list(b));
console.log(filter_list(c));

/* 
Bit Counting

https://www.codewars.com/kata/526571aae218b8ee490006f4

Write a function that takes an integer as input, 
and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

Completed on January 26th, 2023

var countBits = function (n) {
  let remainder = 0;
  let binary = "";

  while (n >= 1) {
    remainder = n % 2;
    n = Math.floor(n / 2);
    binary += remainder.toString();
  }

  let result = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      result++;
    }
  }

  return result;
};

console.log(countBits(10)); // Expecting 2
console.log(countBits(26)); // Expecting 3
console.log(countBits(77231418)); // Expecting 14
console.log(countBits(12525589)); // Expecting 11

**/

/* 
Tribonacci Sequence

https://www.codewars.com/kata/556deca17c58da83c00002db

Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, 
but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 
And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? 
As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, 
you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: 
you need to create a fibonacci function that given a signature array/list, 
returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; 
n will always be a non-negative number; 
if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend 
to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

Completed on January 25th, 2023

function tribonacci(signature, n) {
  // 0 case
  if (n == 0) {
    return [];
  }

  // single case
  if (n == 1) {
    let single_signature = [];
    single_signature.push(signature[0]);

    return single_signature;
  }

  // double case
  if (n == 2) {
    let double_signature = [];
    double_signature.push(signature[0]);
    double_signature.push(signature[1]);

    return double_signature;
  }

  let next = 0;
  let j = 0;

  // -3 because of triple fibonacci sequence
  while (j < n - 3) {
    for (let i = j; i < signature.length; i++) {
      next += signature[i];
    }

    signature.push(next);
    j++;
    next = 0;
  }

  return signature;
}

const a = [1, 1, 1];
const b = 10;
const c = [3, 2, 1];
const d = 10;
const e = [300, 200, 100];
const f = 0;

console.log(tribonacci(a, b));
console.log(tribonacci(c, d));
console.log(tribonacci(e, f));

**/

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

**/

/*
Highest and Lowest

https://www.codewars.com/kata/554b4ac871d6813a03000035

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes
-   All numbers are valid Int32, no need to validate them.
-   There will always be at least one number in the input string.
-   Output string must be two numbers separated by a single space, and highest number is first.

Completed on January 25th, 2023

function highAndLow(numbers) {
  let split = numbers.split(" ");

  let parsed = [];

  for (let i = 0; i < split.length; i++) {
    let convert = parseInt(split[i]);
    parsed.push(convert);
  }

  let max = Math.max(...parsed).toString();
  let min = Math.min(...parsed).toString();
  let max_min = max + " " + min;

  return max_min;
}

const a = "1 2 3 4 5";
const b = "1 2 -3 4 5";
const c = "1 9 3 4 -5";

console.log(highAndLow(a));
console.log(highAndLow(b));
console.log(highAndLow(c));
**/
