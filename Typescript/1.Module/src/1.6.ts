{
  // function
  // function declaration
  //function expression
  //arrow function

  function add(a: number, b: number): number {
    return a + b;
  }

  const multiply = function (x: number, y: number): number {
    return x * y;
  };

  const subtract = (x: number, y: number): number => x - y;

  const userInfo = {
    firstName: "Mahmudul",
    lastName: "Hasan",
    fullName: function (age: number): string {
      return `Full Name:${this.firstName} ${this.lastName}. Age: ${age}`;
    },
  };

  const result = userInfo.fullName(25);

  const numArray: number[] = [1, 2, 3, 4];

  const square: number[] = numArray.map((num: number) => num ** num);
  console.log(square);
}
