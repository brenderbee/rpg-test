import { Character } from './../src/character.js';

describe('Character', function() {

  it('should return name of Character', function() {
    let alanGrant = new Character("Alan Grant", ["knife", "hat"], 7, 5, 10, "level 1");
    let alanName = alanGrant.getName();
    expect(alanName).toEqual("Alan Grant");
  });

  // it('should return strength of Character', function() {
  //   let alanGrant = new Character("Alan Grant", 7, 2, 8, "level 1", ["knife", "hat"]);
  //   let alanName = alanGrant.getName();
  //   let alanStrength = alanGrant.getStrength();
  //   let alanCharacter = `Your Character is: ${alanName} and your strength is: ${alanStrength}.`
  //   expect(alanCharacter).toEqual("Your Character is: Alan Grant and your strength is: 7.");
  // });

  it('should return character details', function(){
    let mario = new Character("Mario", ["mushroom", "flight suit"], 7, 5, 10, "level 2");
    let marioItems = mario.getItems();
    expect(marioItems).toEqual(["mushroom", "flight suit"]);
  });

  it('should return Characters charisma', function(){
    let mario = new Character("Mario", ["mushroom", "flight suit"], 7, 5, 10, "level 2");
    let marioCharisma = mario.getCharisma();
    expect(marioCharisma).toEqual(7);
  });

  it('should return mushroom if Character finds mushroom', function(){
    let mario = new Character("Mario", ["mushroom", "flight suit"], 7, 5, 10, "level 2");
    console.log(mario);
    let marioMushroom = mario.findMushroom();
    console.log(marioMushroom);
    expect(marioMushroom).toEqual(true);
  });

});
