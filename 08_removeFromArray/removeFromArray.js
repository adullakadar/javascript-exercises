const removeFromArray = function(arr,...toPop) {
    let filteredArr = [];
    for (let i=0; i < arr.length; i++){
      if (!toPop.includes(arr[i])){
        filteredArr.push(arr[i])
      };
    };
    return filteredArr;
  }

// Do not edit below this line
module.exports = removeFromArray;
