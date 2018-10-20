const Google = {
    locations: ['マウンテンビュー', 'ニューヨーク', 'ロンドン']
};

// const { locations } = Google;
// const [ first ] = locations;
// console.log(first);
// or
// const { locations: locs } = Google;
// cosnt [ first ] = locs;
// console.log(first);
// 上の2種類の3行を省略して書くと下の2行のようになる
const { locations: [ first ] } = Google;
console.log(first);
