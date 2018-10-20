var expense = {
    type: '交際費',
    amount: '4500 JPY'
};

// ES5
// var type = expense.type;
// var amount = expense.amount;

// ES6
const { type: myType, amount, asdf } = expense;
//console.log(type); // これはエラーになる
console.log(myType);
console.log(amount);
console.log(asdf); // これは上で定義されてないけどエラーにならない
