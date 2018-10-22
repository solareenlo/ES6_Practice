function* shopping() {
    // 歩道
    // 歩道を歩いてお店に行く
    // お店に到着したのでお金を持ってお店に入る
    const stuffFromStore = yield 'お金';
    // 家に歩いて帰る
    return stuffFromStore;
}

// お店関連の世界
const gen = shopping();
console.log(gen.next()); // 家から歩道に出る
console.log(gen.next('日用品')); // お店で買い物をして日用品を持って歩道に出る

