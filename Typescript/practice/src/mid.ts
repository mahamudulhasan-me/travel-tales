{
  // Type Checking: Write a function that takes an array of mixed types and returns only the elements that are numbers.
  type MixArray = (string | number | boolean)[];
  const mixArray: MixArray = ["string", "string2", 25, 47, true];

  const returnNumber = (array: MixArray) => {
    let numberArray: number[] = [];
    array.forEach((item) => {
      if (typeof item === "number") {
        numberArray.push(item);
      }
    });
    return numberArray;
  };

  //   console.log(returnNumber(mixArray));
  const stringToNumber = (value: string): number => {
    const numberValue = +value;

    if (!isNaN(numberValue)) {
      return numberValue;
    } else {
      throw new Error("Value is not a valid number!");
    }
  };
  const stringValue = "87987";
  const numberValue = stringToNumber(stringValue);
  //   console.log(numberValue); // Output: 42

  // Type Aliases: Define a type alias for a tuple representing a user's information: [id: number, name: string, age: number]. Then, create a variable of this type and assign values to it.

  type User = [id: number, name: string, age: number];

  const user: User = [1, "string", 25];

  //   Union Types: Write a function that takes either a string or an array of strings as input. If it's a string, return it directly. If it's an array, join all the strings together with a space and return the result.

  const unionType = (param: string | string[]) => {
    if (typeof param === "string") {
      return param;
    } else {
      return param.join(" ");
    }
  };

  //   console.log(unionType(["1", "2", "3"]));
  //   Intersection Types: Define two interfaces: Printable with a method print, and Scannable with a method scan. Then, create a new interface Document by combining both Printable and Scannable interfaces.

  interface Printable {
    name: "string";
    roll: number;
    isPrintable: boolean;
  }

  interface Scannable {
    isScannable: boolean;
  }

  interface PrintableAndScannable extends Printable, Scannable {}

  // type GenericType = (array:)=>

  const genericType = <T>(
    array: T[],
    callback: (element: T) => boolean
  ): T[] => {
    return array.filter(callback);
  };

  const numberArray = [1, 2, 3, 4, 5];
  const isEven = (value: number) => value % 2 === 0;
  const result = genericType<number>(numberArray, isEven);
  // console.log(result);

  // mapped types
  interface NumberDictionary {
    [key: string]: number;
  }

  type StringMappedNumberDictionary = 
}
