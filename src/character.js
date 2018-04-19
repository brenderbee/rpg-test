class Character {
  constructor(name, strength, charisma, int, level) {
    this.name = name;
    this.strength = strength;
    this.charisma = charisma;
    this.int = int;
    this.level = level;
  }

  getName() {
    return this.name;
  }
}

export { Character };
