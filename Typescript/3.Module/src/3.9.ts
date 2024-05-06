{
  // oop- Abstraction
  // two way of abstraction -
  // 1. interface
  // 2. abstraction

  //   interface
  interface Vehicle {
    startEngine(): void;
    endEngine(): void;
    move(): void;
  }

  class Track implements Vehicle {
    startEngine(): void {
      console.log("Start Engine");
    }
    endEngine(): void {
      console.log("End Engine");
    }
    move(): void {
      console.log("Now Moving");
    }
    test(): void {
      console.log("Testing and its extra mehod");
    }
  }

  const newTrack = new Track();
  newTrack.test();

  //   abstraction

  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract endEngine(): void;
  }

  //   we can't create a instance of the abstract class, just can create a new class and can extend  the vehicle parent class

  class Car extends Vehicle2 {
    endEngine(): void {
      console.log("start engine");
    }
    startEngine(): void {
      console.log("end engine");
    }
  }

  const newCar = new Car();

  newCar.endEngine();
}
