const factorial = function(num) {
  if (typeof(num) !== "number" || !Number.isInteger(num)){
    return undefined;
  };
  if (num < 0){
    return undefined;
  };
  if (num === 0){
    return 1;
  }
  else {
    let factorial = 1;
    for (let i = 1; i <= num ; i++){
      factorial *= i;
    }
    return factorial;
  }
}
// Do not edit below this line
module.exports = factorial;