{
  // generic -function

  const convertArray = <T>(arg: T): T[] => {
    return [arg];
  };

  convertArray<number>(1);

  interface User {
    name: string;
    age: number;
  }
  convertArray<User>({ name: "Mahmudul", age: 25 });

  const genericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  genericTuple<number, string>(1, "2");
  genericTuple<
    string,
    {
      name: string;
      age: number;
    }
  >("string", { name: "string", age: 25 });

  const student = <T>(studentInfo: T): T & { course: string } => {
    const course = "Next level web development";
    return {
      ...studentInfo,
      course,
    };
  };

  student<{
    name: string;
    email: string;
    age: number;
  }>({ name: "Mahmudul", email: "a@gmail.com", age: 25 });
}
