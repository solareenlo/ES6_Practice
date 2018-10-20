function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

let num = addNumbers(1, 2, 3, 4);

console.log(num);
