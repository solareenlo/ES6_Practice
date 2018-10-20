const defaultColors = ['赤', '緑'];
const userFavoriteColors = ['オレンジ', '青'];

let color1 = defaultColors.concat(userFavoriteColors);
let color2 = [ ...defaultColors, ...userFavoriteColors ];
let color3 = [ '紅葉', ...defaultColors, '黒', ...userFavoriteColors ];

console.log(color1);
console.log(color2);
console.log(color3);
