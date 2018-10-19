function createBookShop(inventory) {
    return {
        // inventory: inventory; だったけど同じなら下のように表記できる
        inventory,
        // inventoryValue: function() { だったけど直接関数なら下のように表記できる
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        // priceForTitle: function(title) { だったけど直接関数なら下のように表記できる
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    { title: 'ハリー・ハリー', price: 1000 },
    { title: 'JavaScript入門', price: 2000 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('ハリー・ハリー'));
