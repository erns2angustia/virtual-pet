const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const ageDeath = 30;
const hungerDeath = 10;
const fitnessDeath = 0;
const petDied = ('Your pet died');
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.fitness = 10;
    this.hunger = 0;
    this.isAlive = true;
    }
    Pet.prototype = {
      get isAlive () {
      return (this.age < ageDeath) && (this.hunger < hungerDeath) && (this.fitness > fitnessDeath); 
    }
  }
    Pet.prototype.growUp = function() {
      if (!this.isAlive) {
        console.log(petDied);
      } 
      else {
      this.age += 1;
      this.hunger += 5;
      this.fitness -= 3;
      }
    };
    Pet.prototype.walk = function() {
      if (!this.isAlive) {
        console.log(petDied);
      }
      else {
      if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4;
      } else {
        this.fitness = MAXIMUM_FITNESS;
      }
      }
    };
    Pet.prototype.feed = function () {
      if (!this.isAlive) {
        console.log(petDied);
      }
      else {
      if ((this.hunger -3) >= MINIMUM_HUNGER) {
        this.hunger -= 3;
      } else {
        this.hunger = MINIMUM_HUNGER;
      }
      }
    };
    Pet.prototype.checkUp = function () {
      if (!this.isAlive) {
        console.log(petDied);
      }
      else {
      if ((this.fitness <= 3)) {
        return 'I need a walk.';
      }
      if ((this.hunger >= 5)) {
        return 'I am hungry.';
      }
      if ((this.fitness <=3) && (this.hunger >=5)) {
        return 'I am hungry AND I need a walk.';
      }
      if ((this.fitness >4) && (this.hunger <5)) {
        console.log('I feel great!');
      }
      }
    };
module.exports = Pet;

