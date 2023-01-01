const Pet = require('../src/pet');
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
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
    });
    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
      pet.age = 30;
      expect(() => pet.feed()).toThrow('Your pet died');
  });
  });

  describe('feed', () => {
    it('reduces hunger by 3', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
      pet.feed();
      expect(pet.hunger).toEqual(2);
    });
   it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet died');
    });
});
  describe('checkUp', () => {
    it('returns what the pet is feeling', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
      pet.checkUp();
      expect(pet.checkUp()).toBe('I am hungry.');
    });
  });
  describe('isAlive', () => {
    it('returns if your pet is alive', () => {
      const pet = new Pet('Fido');
      expect(pet.isAlive).toEqual(true);
      pet.age = 30;
      pet.hunger = 10;
      pet.fitness = 0;
      expect(pet.isAlive).toEqual(false);
    });
  });
});