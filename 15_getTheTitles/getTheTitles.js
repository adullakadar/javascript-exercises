const getTheTitles = function(arr) {
  const titles = [];
  for (item in arr){
    titles.push(arr[item].title)
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
