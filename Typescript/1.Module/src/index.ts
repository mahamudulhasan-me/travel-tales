// Typescript basic data type

// non primitive data type
// sting
const myName: string = "Mahmudul";
//number
const myAge: number = 25;
//boolean
const isStudent: boolean = true;
// undefined
const isMarried: undefined = undefined;
//null
const result: null = null;

let anyType: any;

anyType = 5;
anyType = "string";
anyType = "last assign in any type";
console.log(anyType);

// primitive data type
// array
const friends: string[] = ["friend1", "friend2"];
friends.push("friend3");
// friends.push(25);
const restOfRoll: number[] = [12, 13, 15];

const myArr: Array<number> = [20, 30, 40];
const myStringArray: Array<string> = ["s", "t"];

// tuple
const friendRoll: [string, number] = ["Mahmudul", 12];

friendRoll.push(12);
console.log(friendRoll);
// friendRoll.push(boolean);
// friendRoll[0] = 12;
