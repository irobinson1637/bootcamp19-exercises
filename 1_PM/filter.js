// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = el => {
  return el % 7 === 0;
}; // const multOf8 = e1 => !(el %7) && typeof el ==='number';

Array.prototype.filter = function(fun) {
  let newArray = [];
  this.forEach( elem => { 
    if (fun(elem)){
      newArray.push(elem);
    }
  });
  
  return newArray;
};

const newArr = arr.filter(multOf7);

console.log(arr.filter(multOf7));
