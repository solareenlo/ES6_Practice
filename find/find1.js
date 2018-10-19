var users = [
    { name: '太郎' },
    { name: '二郎', id: 1 },
    { name: '三郎' },
    { name: '二郎', id: 2 }
];

var user;
for(var i=0; i<users.length; i++) {
    if(users[i].name === '二郎') {
        user = users[i];
        break;
    }
}
console.log(user);

var user2 = users.find(function(user) {
    return user.name === '二郎';
});
console.log(user2);
