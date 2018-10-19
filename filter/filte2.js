var products = [
    {name: 'きゅうり', type: '野菜', quantity: 0, price: 1},
    {name: 'バナナ', type: 'フルーツ', quantity: 10, price: 15},
    {name: 'きゅうり', type: '野菜', quantity: 30, price: 9},
    {name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 5},
];

var test = [];

// 種類が野菜で、量が0個より多くて、値段が10より小さい
test = products.filter(function(product){
    return product.type==='野菜' && product.quantity>0 && product.price<10;
});

console.log(test);
