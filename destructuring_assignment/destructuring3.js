const companies = [
    'Google',
    'Amazon',
    'Facebook',
    'Apple',
    'Microsoft'
];

// ES6
// []だと = companies の配列の要素を抽出する
const [ name1, name2, name3, name4 ] = companies;
console.log(name1, name2, name3, name4);

const firstCompany = companies[0];
console.log(firstCompany);

// {}だと = companies のプロパティを抽出する
const { length } = companies;
console.log(length);

// Rest演算子と組み合わせることで残りを別の配列に格納できる
const [ name, ...rest ] = companies;
console.log(name, rest);
