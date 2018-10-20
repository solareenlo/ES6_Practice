const companies = [
    { name: 'Google', location: 'マウンテンビュー' },
    { name: 'Facebook', location: 'メンロパーク' },
    { name: 'Uber', location: 'サンフランシスコ' }
];

// companiesという配列の中の1つ目のオブジェクトの中のlocationを
// location3に代入
const location3 = companies[0].location;
console.log(location3);

// 1つ目の配列を抽出
const [ location2 ] = companies;
console.log(location2);

// []を使って1つ目の配列を抽出し、
// {}を使ってオブジェクトの中からlocationというプロパティを抽出してる
const [{ location }] = companies;
console.log(location);
