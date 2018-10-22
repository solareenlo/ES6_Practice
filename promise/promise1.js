promise = new Promise((resolve, reject) => {
    resolve();
});

promise
    .then(() => {
        console.log('処理が完了しました');
    })
    .then(() => {
        console.log('ここも実行されるよ');
    })
