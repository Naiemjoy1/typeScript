let calculation: (x: number, y: number, z: string) => number;
// follow straucture for making function

calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};
console.log(calculation(5, 6, "minus"));

// rule: 2
let userDetails: (
  id: number | string,
  userInfo: { name: string; age: number }
) => void;

userDetails = (id: number | string, user: { name: string; age: number }) => {
  console.log(`User ID: ${id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
};

userDetails("123", { name: "Naiem", age: 28 });
userDetails(456, { name: "Shuvo", age: 20 });
