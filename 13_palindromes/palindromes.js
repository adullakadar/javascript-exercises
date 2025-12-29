const palindromes = function (string) {
  string = string.toLowerCase();
  string = string.replace(/[^\w\s]/g, "");
  string = string.replace(/\s/g, "");
  let string2 = "";
  for (let letter = (string.length - 1); letter >= 0; letter--){
    string2 += string[letter];
  }
  if (string == string2) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
