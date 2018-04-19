import { Character } from './../src/character.js';

describe('Character', function() {

  it('should return name of Character', function() {
    let alanGrant = new Character("Alan Grant", 7, 2, 8, "level 1");
    let characterAlan = alanGrant.getName();
    expect(characterAlan).toEqual("Alan Grant");
  });
});
