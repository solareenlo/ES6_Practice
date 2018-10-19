function findWhere(array, criteria) {
  return array.find(function(element) {
      return element.height === criteria.height;
  });
}

var ladders = [
    { id: 1, height: 20},
    { id: 2, height: 10},
    { id: 3, height: 25}
    ];

console.log(findWhere(ladders, {height: 25}));
