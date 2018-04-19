class Character {
  constructor(name, items=[], charisma, int, strength, level) {
    this.name = name;
    this.items = items;
    this.charisma = 7;
    this.int = 5;
    this.strength = 10;
    this.level = level;
  }

  getName() {
    return this.name;
  }

  getItems() {
    return this.items;
  }

  getCharisma(){
    return this.charisma;
  }

  findMushroom(){
    let inventoryItems = this.items;

    for (let i = 0; i < inventoryItems.length; i++) {
      if (inventoryItems[i] === "mushroom") {
        return true;
      }
    }
  }
}

export { Character };
