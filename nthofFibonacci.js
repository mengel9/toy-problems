// find the nth number in the fibonacci sequence
// ex: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

var findNum = function(n) {

  var fib = [0, 1];
  var num;

  while (fib.length <= n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  num = fib[n - 1];
  
  return num;
}
