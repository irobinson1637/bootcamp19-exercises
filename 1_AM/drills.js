const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {

  return str.split(" ")
  // TODO - write a function which converts a multi-word string into an array of words
};

const reverse = str => {
    return str.split("").reverse().join("");
  // TODO - write a function which reverses the string
};

const uniqueOnes = arr => {
    return (arr.filter(function(e, i){ 
      return arr.indexOf(e) === i;
    }));
  // TODO - write a function which returns the inputted array without duplicate elements
};

const factorial = num => {
  let factorialNum = 1;
  while (num!=0) {
  factorialNum = factorialNum*num;
  num = num-1;
  }
  console.log(factorialNum);
  return factorialNum;
  // TODO - write a function which returns the factorial of a positive integer
};

const zip = (arr1, arr2) => {
  let zippedArray = [];
  if (arr1.length != arr2.length){
    return -1;
  } else {
    arr1.forEach(function(e, i){
      zippedArray.push([e, arr2[i]]);
    });
  };
  return zippedArray;
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
};

const unzip = arr => {
  let arr1 = [];
  let arr2 = [];
  arr.forEach(function(e){
    arr1.push(e[0]);
    arr2.push(e[1]);
  });
  console.log(arr1);
  console.log(arr2);
  // TODO - Write a function which does the opposite of `zip()`
  return true;
};

const shiftRight = (str, num) => {
  let movedString = str.substr(0, num);
  let truncatedString = str.substr(num, str.length);

  return truncatedString+movedString;
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  const numberToWords = require('number-to-words');
  const d = new Date();
  const hour = d.getHours();
  let timeOfDay = "morning";
  
  if(hour > 12){
    hour = hour - 12;
    timeOfDay = "nighttime";
  }

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentTime = numberToWords.toWords(d.getHours()) + " " + numberToWords.toWords(d.getMinutes());

  const returnedDate = `Today's date is ${months[d.getMonth()]} ${d.getDate()}th, ${d.getFullYear()}. It is ${currentTime} in the ${timeOfDay}`;
  console.log(returnedDate);
  return returnedDate;
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
assert(reverse("abc") === "cba");
assert(zip(['1', '2'], ['3', '4']));
assert(unzip([ [ '1', '3' ], [ '2', '4' ] ]));
assert(announceDate());
assert(uniqueOnes([2,2,3,4,2]));