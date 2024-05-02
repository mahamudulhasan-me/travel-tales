"use strict";
{
    //  spread operator
    // rest operator
    const numArray = [1, 2, 3, 4, 5];
    const num1_10 = [...numArray, 6, 7, 8, 9, 10];
    const userInfo = {
        city: "Dhaka",
        country: "Bangladesh",
    };
    const myInfo = Object.assign({ fullName: "Mahamudul Hasan", age: 25 }, userInfo);
    function sum(...numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    const result = sum(...num1_10);
    console.log(result);
}
