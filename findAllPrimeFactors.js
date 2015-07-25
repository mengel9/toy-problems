  // find all prime factors of a number

  var findAllPrimeFactors = function(num) {

    var primeFactors = [1];
    var divisor = 2;

    while (num > 2) {
      if (num % divisor === 0) {
        primeFactors.push(divisor);
        num = num/divisor;
      } else {
        divisor++;
      }
    }

    return primeFactors;

  }

