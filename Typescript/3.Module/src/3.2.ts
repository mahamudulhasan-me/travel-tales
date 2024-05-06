{
  // OOP - Inheritance
  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }

    playing() {
      console.log(`${this.name} is playing.`);
    }
  }

  const newStudent = new Student("Mahmudul", 25, "Dhaka");
  newStudent.playing();

  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
  }
}
