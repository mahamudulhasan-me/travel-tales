{
  // Type Checking: Write a function that takes an array of mixed types and returns only the elements that are numbers.
  type MixedArray = (number | string | boolean)[];
  const mixedArray: MixedArray = [2, "string", 10, true, 9];
  const textArray: string[] = ["1", "2", "3", "4"];
  const numArray: number[] = [1, 2, 3, 4, 5];

  const findNumber = (array: MixedArray): number[] => {
    // const numArray: number[] = [];
    // for (const elements of array) {
    //   if (typeof elements === "number") {
    //     numArray.push(elements);
    //   }
    // }
    // return numArray;
    return array.filter((item) => typeof item === "number" && item) as number[];
  };

  //   const result = findNumber(mixedArray);
  //   console.log(result);
  // Type Assertion: Write a function that takes a string input and reverses it, ensuring that the output remains a string.

  const makeReverse = (text: string): string => {
    const reverse = text.split("").reverse().join("");
    return reverse;
  };
  //   makeReverse("This is text");
  //   Generics: Create a generic function that takes an array and returns the reversed version of that array.

  const genericFunction = <T>(array: T[]): T[] => array.reverse();

  //   const result = genericFunction<number>(numArray);
  //   console.log(result);
}
