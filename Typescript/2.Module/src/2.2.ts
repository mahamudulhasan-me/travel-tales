{
  // interface

  type UserInfo = {
    name: string;
    age: number;
  };

  type User = UserInfo & { company: string; role: string };

  const user: User = {
    name: "Mahmudul",
    age: 25,
    company: "Sundarban",
    role: "jr. front end developer",
  };

  interface UserInfo2 {
    name: string;
    age: 25;
  }

  interface User2 extends UserInfo2 {
    company: string;
    role: string;
  }

  const user2: User2 = {
    name: "Mahmudul",
    age: 25,
    company: "s",
    role: "e",
  };

  type NumberTypeArray = number[];
  interface NumberTypeArrayInt {
    [index: number]: number;
  }

  const myArray: NumberTypeArrayInt = [1, 2, 3, 4, 5];

  type SumType = (a: number, b: number) => number;
  interface SumInt {
    (a: number, b: number, c: number): number;
  }
  const sum: SumInt = (num1, num2) => {
    return num1 + num2;
  };

  sum(2, 3, 4);
}
