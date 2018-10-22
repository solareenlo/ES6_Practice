function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
