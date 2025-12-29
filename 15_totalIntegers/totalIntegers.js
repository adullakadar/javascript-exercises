const verifyObj = (value) => typeof(value) === "object" && value!=null;
const totalIntegers = function(obj) {
  if (!verifyObj(obj)) return;
  let count = 0;
  let elements = Object.values(obj);
  for (let element of elements){
    if (Number.isInteger(element)){
      count += 1;
    }
    else if (verifyObj(element)){
      count += totalIntegers(element);
    }
  }
  return count; 
}
// Do not edit below this line
module.exports = totalIntegers;
