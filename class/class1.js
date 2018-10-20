// ES5でプロトタイプを使って継承
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function() {
    return 'ウィーン';
}

var car = new Car({ title: 'プリウス' });

console.log(car);
console.log(car.drive());
