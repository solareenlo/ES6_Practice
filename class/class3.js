class Car {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'ウィーン';
    }
}

const car = new Car({ title: 'アクア' });

console.log(car, car.drive());
