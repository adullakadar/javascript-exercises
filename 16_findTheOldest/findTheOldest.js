const findTheOldest = function(arr) {
  let curOldest = 0;
  let curAge = 0;
  let arrIndex;
  for (let [index,element] of arr.entries()){
    if (!element.yearOfDeath){
      curAge = (new Date().getFullYear()) - element.yearOfBirth;
    }
    else {curAge = element.yearOfDeath - element.yearOfBirth;}
    if (curAge > curOldest){
      curOldest = curAge;
      arrIndex= index;
    }
  }
  return (arr[arrIndex])
};

// Do not edit below this line
module.exports = findTheOldest;
