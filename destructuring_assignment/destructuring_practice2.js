const numbers = [1, 2, 3,4,5];

// function double(numbers) {
//     const [num, ...rest] = numbers;
//     let doubleArray = [];
//     doubleArray.push(num*2);
//     console.log(doubleArray);
//     return (rest.length <= 0) ? 1 : double(rest);
// }
// console.log(double(numbers));

function double5(numbers) {
    const [num, ...rest] = numbers;
    return (rest.length <= 0) ? [num*2] : [num*2, ...double5(rest)];
}
console.log(double5(numbers), numbers);

function double4(numbers) {
    const [num, ...rest] = numbers;
    if(rest.length <= 0) {
        return [num*2];
    } else {
        return [num*2, ...double4(rest)];
    }
}
console.log(double4(numbers), numbers);

function double1(numbers) {
    return numbers.map((number) => number * 2);
}
console.log('map : ', double1(numbers));

function double2(numbers) {
    return numbers.reduce((bai, num) => {
        bai.push(num * 2);
        return bai;
    }, []);
}
console.log('reduce : ', double2(numbers));

function double3(numbers) {
    let double = [];
    numbers.forEach((num) => double.push(num * 2));
    return double;
}
console.log('forEach : ', double3(numbers));
