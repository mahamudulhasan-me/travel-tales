{
  interface Person {
    name: string;
    age: string;
    mobileNumber: number;
    email?: string;
  }

  //   pick type
  type picType = Pick<Person, "name" | "age">;
  //   omit
  type omitType = Omit<Person, "name" | "age">;

  //   required
  type requiredType = Required<Person>;

  //   partial
  type partialType = Partial<Person>;

  //   readonly
  type readonlyType = Readonly<Person>;

  // record type

  type recordType = Record<string, unknown>;

  const Person: recordType = {
    a: "re",
    b: 2,
  };
}
