// ES6での継承
class Car {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'ウィーン';
    }
}

class Toyota extends Car {
    constructor(options) {
        super(options); // Carのconstructorを継承してる
        this.color = options.color; // colorを初期化
    }

    honk() {
        return 'ブブー';
    }
}

const toyota = new Toyota({ color: 'red', title: 'カローラ' });

console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());
