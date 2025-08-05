const userDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "sir" : "mr"} ${user.name}`);
};
userDetails("Ab12", { name: "Naiem", age: 25 });
sayHello({ name: "Naiem", age: 25 });
export {};
//# sourceMappingURL=typeAilases.js.map