"use strict";
{
    // function
    // function declaration
    //function expression
    //arrow function
    function add(a, b) {
        return a + b;
    }
    const multiply = function (x, y) {
        return x * y;
    };
    const subtract = (x, y) => x - y;
    const userInfo = {
        firstName: "Mahmudul",
        lastName: "Hasan",
        fullName: function (age) {
            return `Full Name:${this.firstName} ${this.lastName}. Age: ${age}`;
        },
    };
    const result = userInfo.fullName(25);
    const numArray = [1, 2, 3, 4];
    const square = numArray.map((num) => num ** num);
    console.log(square);
}
