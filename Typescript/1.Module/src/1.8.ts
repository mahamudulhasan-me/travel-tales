{
  const person = {
    fullName: "Mahamudul Hasan",
    myAge: 25,
    address: {
      local: {
        thana: "Uttara",
        city: "Dhaka",
      },
      country: "Bangladesh",
    },
  };
  const {
    fullName,
    myAge,
    address: {
      local: { city, thana },
      country,
    },
  } = person;

  const numbers: number[] = [1, 2, 3, 4, 5];
  const [, second, ...rest] = numbers;
}
