/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

var sumArray = function(array) {

  var greatestSum;
  var totalSum;
  var currentSum = 0;

  totalSum = array.reduce(function(total, num) {
    return total += num;
  });

  greatestSum = totalSum;

  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      currentSum += array[j];
      if (currentSum > greatestSum) {
        greatestSum = currentSum;
      } 
    }
    currentSum = 0;
  }

  return greatestSum;
}
