var savedFile = {
    extension: 'jpg',
    name: 'profile',
    size: 1400
}

// ES5
function fileSummary1(file) {
    return `${file.name}.${file.extension}の容量は${file.size}です。`
}
console.log(fileSummary1(savedFile));

// ES6 関数の引数に分割代入できて、スッキリ書ける
function fileSummary2({ name, extension, size}) {
    return `${name}.${extension}の容量は${size}です。`
}
console.log(fileSummary2(savedFile));

// ES6 複数の引数を分割代入できる
function fileSummary3({ name, extension, size}, { username }) {
    return `${username}:${name}.${extension}の容量は${size}です。`
}
console.log(fileSummary3(savedFile, { username: 'ken' }));
