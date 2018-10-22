class Monster {
    constructor(options) {
        this.health = 100;
        this.name = options.name;
    }
}

class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    bite(monster) {
        monster.health -= 10;
    }
}

const snake1 = new Snake({ name: 'snake1' });
const snake2 = new Snake({ name: 'snake2' });

console.log(snake1, snake2);
snake1.bite(snake2);
console.log(snake1, snake2);
