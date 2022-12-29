const { it, describe } = require('node:test');
const Pet = require('./src/pet');
describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet()).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
      });
    
      it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
      });

      it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual();
      expect(pet.fitness).toEqual();
    });
  });

  describe('feed', () => {
    it('reduces hunger by 3', () => {
      const pet = new Pet('Fido');
      pet.feed();
      expect(pet.hunger).toEqual();
    });
  });
  describe('petCheckup', () => {
    it('returns what the pet is feeling', () => {
      const pet = new Pet('Fido');
      pet.checkUp();
      expect(pet.checkUp).toEqual('');
    });
  });