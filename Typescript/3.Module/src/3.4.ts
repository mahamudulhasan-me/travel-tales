{
  //

  class Animal {
    constructor(public name: string, public species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("This is animal default sound");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log(`${this.species} is meowing`);
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBarking() {
      console.log(`${this.species} is barking`);
    }
  }

  const cat = new Cat("Desi Biral", "Cat");
  const dog = new Dog("Desi Kutta", "Dog");

  const isCart = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const makeSound = (animal: Animal) => {
    if (isCart(animal)) {
      animal.makeMeow();
    } else if (isDog(animal)) {
      animal.makeBarking();
    } else {
      animal.makeSound();
    }
  };

  makeSound(dog);
  //
}
