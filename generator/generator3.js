function* shopping() {
const stuffFromStore = yield 'お金';
const cleanClothes = yield '汚れた服';
return [stuffFromStore, cleanClothes];
}

const gen = shopping();
console.log(gen.next());
console.log(gen.next('日用品'));
console.log(gen.next('綺麗な服'));
