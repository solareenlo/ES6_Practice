promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 1000)
});

promise
    .then(() => console.log('処理が完了しました'))
    .then(() => console.log('ここも実行されます'))
    .catch(() => console.log('問題発生'));
