// 重複した要素はのけて表示する関数uniqueを作成
function unique(array) {
  return array.reduce(function(acc, element) {
      var existingElement = acc.find(function(target) {
         return target === element;
      });
      if(!existingElement) {
          acc.push(element);
      }
      console.log(existingElement);
      return acc;
  }, []);
}

var numbers = [1, 1, 2, 3, 4, 4, 1, 5, 3];

console.log(unique(numbers));
