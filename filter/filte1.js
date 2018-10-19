var products = [
    {name: 'きゅうり', type: '野菜'},
    {name: 'バナナ', type: 'フルーツ'},
    {name: 'きゅうり', type: '野菜'},
    {name: 'オレンジ', type: 'フルーツ'},
];

var filteredProducts = [];

for(var i=0; i<products.length; i++) {
    if(products[i].type === 'フルーツ') {
        filteredProducts.push(products[i]);
    }
}
console.log(filteredProducts);

var filteredProducts2 = [];
filteredProducts2 = products.filter(function(product) {
    return product.type === 'フルーツ';
});

console.log(filteredProducts2);
