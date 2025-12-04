const repeatString = function(string,len) {
  newstr=''
  if (len<0){
    return 'ERROR';
  }
  for (let i=1; i<=len; i++){
    newstr+=string;
  }
  return newstr;
};

// Do not edit below this line
module.exports = repeatString;
