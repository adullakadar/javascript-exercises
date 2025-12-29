const fibonacci = function(index) {
  index = parseInt(index);
  if (index === 0) return 0;
  if (index <0) return "OOPS";
  let fibSequence = [];
  let temp1 = 1;
  let temp2 = 1;
  let temp1b;
  
  fibSequence.push(temp1,temp2);
  for (let i = 1; i<=index-2 ; i++){
    tempb=temp2;
    temp2=temp1+temp2;
    temp1=tempb;
    fibSequence.push(temp2);
  }
  return fibSequence[index-1];      
};

// Do not edit below this line
module.exports = fibonacci;
