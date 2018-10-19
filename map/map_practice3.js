// mapを使ってpluck関数を実装
// pluck関数とはオブジェクトの配列とプロパティ名を渡すと、
// 渡したプロパティ名の値だけを含んだ配列を返す関数。
function pluck(array, property) {
 return array.map(function(element){
   return element[property];
 });
}

var paints = [ {color:'赤'}, {color:'青'}, {color:'黄'}];
pluck(paints, 'color');

console.log(pluck(paints, 'color'));
