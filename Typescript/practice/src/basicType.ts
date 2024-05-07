{
  type myTuple = [number, boolean, string];

  const itsTuple: myTuple = [10, true, "string"];
  // console.log(itsTuple);

  type Person = {
    name: string;
    age: number;
  };

  interface Person2 {
    [index: number]: number;
  }

  enum Status {
    "Success",
    "Unauthorized",
    "Forbidden",
  }

  //   console.log(Status.Success);

  interface Rectangle {
    height: number;
    width: number;
  }

  interface ColoredRectangle extends Rectangle {
    color: string;
  }

  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red",
  };

  type PersonWithAddress = Person & { address: string };

  const personWithAddress: PersonWithAddress = {
    address: "dhaka",
    age: 25,
    name: "no name",
  };

  const sum = ({ num1, num2 }: { num1: number; num2: number }): number =>
    num1 + num2;
}
