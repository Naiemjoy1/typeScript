{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship";
  type Owner2 = keyof Vehicle;

  const getPropertyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };

  const user = {
    name: "Mr Naiem",
    age: 29,
    address: "dhk",
  };

  const result = getPropertyValue(user, "name"); // type is string
  console.log(result); // "Mr Naiem"
}
