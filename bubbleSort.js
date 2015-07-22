// Bubble Sort

// Write a program in JavaScript to sort following list in ascending order using Bubble Sort Algorithm.
var nums = [34, 23, 12, 45, 9, 1, 24];
// Sort the list present in descending order.

var bubbleSort = function(array) {

  var sorted = false;

  while (!sorted) {
    sorted = true;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        sorted = false;
      }
    }
  }
  
  return array;

}

bubbleSort(nums);

// Sort the following array of Persons in ascending order of ‘age’ using Bubble Sort.

var persons = [
  {
  "name": "john",
  "age": "23"
  },
  {
  "name": "harry",
  "age": "21"
  },
  {
  "name": "jack",
  "age": "25"
  }
];

var sortPersons = function(array) {

  var sorted = false;

  while (!sorted) {
    sorted = true;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i]['age'] > array[i+1]['age']) {
        var tempPerson = array[i];
        array[i] = array[i+1];
        array[i+1] = tempPerson;
        sorted = false;
      }
    }
  }

  return array;
}

sortPersons(persons);

