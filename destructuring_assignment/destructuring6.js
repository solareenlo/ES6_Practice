// 関数の引数にオブジェクトの分割代入を用いると、
// プロパティの順番を気にしなくてよくなり、可読性が上がる
// が、追加があるときはオブジェクトに追加しなくても良い
function signup({ email, password, birthday, city, username }, arg1 = 'default') {
    // ここでユーザーを作成してDBに保存する
}

const user = {
    username: 'myusername',
    password: 'mypassword',
    email: 'myemail@example.com',
    birthday: '1990/1/1',
    city: '東京'
};

signup(user);
