// declared type spacifically
type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "sir" : "mr"} ${user.name}`);
};

userDetails("Ab12", { name: "Naiem", age: 25 });
sayHello({ name: "Naiem", age: 25 });
