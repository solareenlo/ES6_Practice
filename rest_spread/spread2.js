function validateShoppingList(...items) {
    if(items.indexOf('牛乳')<0) {
        return ['牛乳', ...items];
    }
    return items;
}

let kago1 = validateShoppingList('オレンジ', 'パン');
let kago2 = validateShoppingList('オレンジ', 'パン', '牛乳');

console.log(kago1);
console.log(kago2);
