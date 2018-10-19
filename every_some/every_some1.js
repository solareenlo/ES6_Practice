var names = [
    'けん',
    'はなこ',
    'そういちろう'
];

var every =names.every(function(name) {
    return name.length >= 3;
});

var some =names.some(function(name) {
    return name.length >= 3;
});

console.log(every, some);
