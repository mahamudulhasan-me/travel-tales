{
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`${this.name} is make sound ${this.sound}`);
    }
  }

  const cat = new Animal("Desi Kutta", "Dog", "Gew gew");

  cat.makeSound();
}
