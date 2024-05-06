{
  type a = null;
  type b = undefined;

  type isA = a extends "null" ? true : false;
  type isB = b extends undefined ? true : false;

  type Sheik = {
    car: string;
    bike: string;
    ship: string;
  };

  type TypeChecker<T> = T extends keyof Sheik ? true : false;

  type hasCar = TypeChecker<"car">; // hasCar is true
}
