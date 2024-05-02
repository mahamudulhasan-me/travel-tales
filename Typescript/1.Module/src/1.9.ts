// const type alias
type Person = {
  name: string;
  age: number;
  profession: string;
  isMarried?: boolean;
};

const person1: Person = {
  name: "Mahmudul",
  age: 25,
  profession: "Student",
};

const person2: Person = {
  age: 24,
  name: "Hasan",
  profession: "Soft. Developer",
};

type Sum = (a: number, b: number) => number;

const sum: Sum = (a, b) => {
  return a + b;
};

console.log(sum(4, 4));
