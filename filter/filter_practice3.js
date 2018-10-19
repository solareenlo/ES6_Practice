// filterの逆関数をfilterを使って実装
function reject(array, iteratorFunction) {
  return array.filter(function(element) {
      return !iteratorFunction(element);
  });
}

var numbers = [10, 20, 30, 4, 6];
var lessThanFifteen = reject(numbers, function(number) {
    return number > 15;
});

console.log(lessThanFifteen);
