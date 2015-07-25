// verify if number (num) is a prime number

var isPrime = function(num) {

  if (num % 2 === 0) {
    return false;
  }

  for (var i = num - 1; i > 2; i = i-2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;

}