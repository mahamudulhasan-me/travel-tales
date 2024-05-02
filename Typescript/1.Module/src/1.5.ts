//Reference type --> Object

const user: {
  fistName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
  readonly company: "Sundarban Courier"; //type ==> literal type
} = {
  fistName: "Mahamudul",
  middleName: "Hasan",
  lastName: "Manik",
  isMarried: false,
  company: "Sundarban Courier",
};

// user.company = "scs";
