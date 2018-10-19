const double = function(number) {
    return 2 * number;
}
console.log(double(8));

const double3 = (number) => {
    return 2 * number;
}
console.log(double(8));

// 引数が1つかつ戻り値が1つの時にこの下の表記ができる.
const double2 = number => 2 * number;
console.log(double2(8));



const numbers = [1, 2, 3];
let box = numbers.map(function(number) {
    return 2 * number;
});
console.log(box);

// アロー関数を使うことでmap関数が可読性高く表記できる.
let box2 = numbers.map(number => 2 * number);
console.log(box2);
