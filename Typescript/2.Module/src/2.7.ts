{
  //generic- key of

  interface Vehicle {
    model: string;
    serial: number;
    registration: number;
    license: string;
  }

  type KeyOfVehicle = keyof Vehicle;

  interface Person {
    name: string;
    age: number;
    email: string;
  }

  const person: Person = { name: "John", age: 30, email: "john@example.com" };

  const getProperty = <T, Q extends keyof T>(obj: T, value: Q): T[Q] => {
    return obj[value];
  };

  const result = getProperty<Person, keyof Person>(person, "email");
  console.log(result);
}
