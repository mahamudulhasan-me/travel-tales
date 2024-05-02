{
  type PersonType = {
    name: string;
    address: {
      thana?: string;
      district: string;
    };
  };

  const itsMe: PersonType = {
    name: "Mahamudul",
    address: {
      district: "Gaibandha",
    },
  };

  // nullish coalescing  operator just work with null and undefined value
  const value = itsMe?.address?.thana ?? "Sadullapur";
  console.log(value);
}
