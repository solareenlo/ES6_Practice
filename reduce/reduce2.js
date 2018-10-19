// オブジェクトの中身を新たな配列に追加していく
var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

var iro = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(iro);
