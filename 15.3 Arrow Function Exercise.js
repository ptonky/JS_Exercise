// 1) ES2015 Map Callback - turn the function below into a one-liner with arrow functions
function double(arr) {
    return arr.map(function(val) {
        return val*2;
    });
}

//Process
// function double = const double 
// (arr) = arr
// return arr.map(function(val) {return val*2} = arr.map(val => val*2)

//Solution
const double = arr => arr.map(val => val * 2);


// 2) Replace ALL functions with arrow functions:
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

//Solution
  const squareAndFindEvens = num => numbers.map(num => num**2).filter (square => square % 2 === 0)