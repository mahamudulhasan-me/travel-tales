{
  const numberArray: number[] = [1, 2, 3, 4];

  const numberToArray: string[] = numberArray.map((num: number) =>
    num.toString()
  );

  type AreaType<T> = {
    [key in keyof T]: T[key];
  };

  const stringArray: AreaType<{ height: string; width: number }> = {
    height: "300",
    width: 500,
  };
}
