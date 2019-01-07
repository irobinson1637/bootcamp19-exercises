// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = (num) => {

  return num*3;
  // TODO
};

Array.prototype.map = function(fun) {
  let newArray = [];
  this.forEach(el => { newArray.push(fun(el))});
  return newArray;
  // TODO
};

console.log(arr.map(triple));
