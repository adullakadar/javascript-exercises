const reverseString = function(string) {
  let reversedArr = [];
  for (charIndex in string){
    reversedArr.unshift(string[charIndex]);
  }
  return reversedArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
