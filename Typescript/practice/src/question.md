Certainly! Here are some mid-level TypeScript problems for practice:

1. **Type Checking**: Write a function that takes an array of mixed types and returns only the elements that are numbers.

2. **Type Assertion**: Write a function that converts a string to a number and returns it. Ensure that the returned value is indeed a number.

3. **Type Aliases**: Define a type alias for a tuple representing a user's information: `[id: number, name: string, age: number]`. Then, create a variable of this type and assign values to it.

4. **Union Types**: Write a function that takes either a string or an array of strings as input. If it's a string, return it directly. If it's an array, join all the strings together with a space and return the result.

5. **Intersection Types**: Define two interfaces: `Printable` with a method `print`, and `Scannable` with a method `scan`. Then, create a new interface `Document` by combining both `Printable` and `Scannable` interfaces.

6. **Generics**: Write a function that takes an array and a callback function as arguments. The callback function should accept an array element and return a boolean value. The main function should filter the array based on the callback function and return the filtered array.

7. **Mapped Types**: Define an interface representing a dictionary object where keys are strings and values are numbers. Then, create a new type that maps each value of the dictionary to a string.

8. **Conditional Types**: Write a type that takes a union of types and returns a new type based on whether the input type is an object or not. If it's an object, add a property `exists: true`, otherwise, add `exists: false`.

9. **Decorator**: Create a decorator `@log` that logs the input arguments and return value of a function when applied to it.

10. **Module Resolution**: Set up a TypeScript project with multiple modules and demonstrate importing/exporting functionality between modules.

These problems cover a range of TypeScript features and concepts, providing a good mid-level challenge for TypeScript developers. Happy coding!