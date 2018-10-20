const MathLibrary = {
    calculateProduct(...rest) { // ここの...restはRest演算子で、可変長の引数をまとめてくれてる
        return this.multiply(...rest); // ここの...restはSpread演算子で、上のRest演算子でまとまった可変長の引数を分解してくれてる
    },
    multiply(a, b) {
        return a * b;
    }
};

let num1 = MathLibrary.calculateProduct(2, 3);
let num2 = MathLibrary.multiply(2, 3);

console.log(num1, num2);
