const sumAll = function(num1,num2) {
  if(typeof(num1) != 'number' || typeof(num2) != 'number') return 'ERROR';
  if (num1<0 || num2 <0) return 'ERROR';
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
  let sum = 0;

  if (num2>num1){
    console.log('nujm1 bigger');
    for (let numBetween = num1; numBetween <= num2; numBetween++){
      sum+= numBetween;
    }
    return sum;
  }

  else{
    for (let numBetween = num2; numBetween <= num1; numBetween++){
      sum+= numBetween
    }
    return sum;
  };
};

// Do not edit below this line
module.exports = sumAll;
