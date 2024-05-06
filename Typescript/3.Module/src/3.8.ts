{
  // oop- polymorphism

  class Person {
    getSleep() {
      console.log("The normal person sleeping 9 hours");
    }
  }
  class Student extends Person {
    getSleep(): void {
      console.log("The student  sleeping 8 hours");
    }
  }

  class Developer extends Person {
    getSleep(): void {
      console.log("The developer sleeping 7 hours");
    }
  }

  const getSleepingHour = (person: Person) => {
    return person.getSleep();
  };

  const newPerson = new Person();
  const student = new Student();
  const developer = new Developer();
  //   getSleepingHour(developer);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Radius extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(length: number, width: number) {
      super();
      this.height = length;
      this.width = width;
    }

    getArea(): number {
      return this.width * this.height;
    }
  }
}
