const add = function(x, y) {
	return (x + y);
};

const subtract = function(x, y) {
	return (x - y);
};

const sum = function(x) {
	let sum = 0;
  for(i = 0; i < x.length; i++) {
    sum = sum + x[i];
  }
  return sum;
};


const multiply = function(x) {
  let product = 1;
  for(i = 0; i < x.length; i++) {
    product = product * x[i];
  }
  return product;
  // return x.reduce(a,b => a * b);
};

const power = function(x, y) {
  let z = x;
	for(i = 1; i < y; i++) {
    z = z * x;
  }
  return z;
};

const factorial = function(x) {
  let y = 1;
	for(i = 1; i <= x; i++) {
    y = y * i;
  }
  return y;
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
