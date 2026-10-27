const add = function(a,b) {

    return a + b;
	
};

const subtract = function(a,b) {

  return a -b;
	
};

const sum = function(array) {

let result = array.reduce((total,current) => current + total, 0);

return result;
	
};

const multiply = function(numbers) {

let result = numbers.reduce((total,current) => total * current, 1);

return result;

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
