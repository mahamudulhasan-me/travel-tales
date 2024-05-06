{
  // genetic type
  type GenericArray<T> = Array<T>;

  //   const roll: number[] = [10, 2.4, 4, 4];
  const roll: GenericArray<number> = [10, 2.4, 4, 4];

  //   const name: string[] = ["mahmudul", "hasan", "manik"];
  const name: GenericArray<string> = ["mahmudul", "hasan", "manik"];
  //   const isMarried: boolean[] = [true, false, true];
  const isMarried: GenericArray<boolean> = [true, false, true];

  const identify = <T>(agr: T): T => agr;

  identify<string>("5");

  const user: GenericArray<{ name: string; age: number }> = [
    { name: "mahmudul", age: 25 },
    { name: "hasan", age: 25 },
  ];

  type GenericTuple<A, B> = [A, B];

  const myTuple: GenericTuple<string, number> = ["mahmudul", 25];
  const myTuple2: GenericTuple<number, number> = [1, 25];
}
