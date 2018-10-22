function fact(n) {
    if(n === 1) return 1;
    return n * fact(n - 1);
}
console.log(fact(5));

function recursive(number) {
    if(number <= 0) return 1;
    result = recursive(number - 1);
    return number * result;
}
console.log(recursive(5));

function recursive2(number) {
    return (number <= 0) ? 1 : (number * recursive2(number - 1));
}
console.log(recursive2(5));
