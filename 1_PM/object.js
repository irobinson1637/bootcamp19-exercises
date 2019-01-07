// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for (ent in obj){
    if (typeof obj[ent]  === "object"){
      return hasFalsyValue(obj[ent]);
    }
    if (obj[ent] === false){
      return true;
    }
  }
  return false;
};

let car = {type:true, model:1, color:{height:true}};
console.log(hasFalsyValue(car));
