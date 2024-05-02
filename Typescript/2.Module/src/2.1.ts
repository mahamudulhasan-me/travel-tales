{
  // type assertion
  let result: any = "pass";

  const length: number = (result as string).length;

  type CustomMessage = {
    message: string;
  };

  try {
  } catch (error) {
    console.error((error as CustomMessage).message);
  }
}
