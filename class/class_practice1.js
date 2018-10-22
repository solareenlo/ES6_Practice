class Monster {
  constructor({health, name}) {
      this.health = 100;
      this.name = name;
  }
}

const dragon = new Monster({name: 'dragon'});

console.log(dragon);
