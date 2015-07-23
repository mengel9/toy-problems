//Implement an algorithm to determine if a string has all unique characters

var string = 'mariposa';
var stringTwo = 'house';

var isUnique = function(str) {
  if (str.length === 0) {
    return null;
  }

  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== i) {
      return false;
    }
  }

  return true;
}

