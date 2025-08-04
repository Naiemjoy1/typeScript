var userDetails = function (id, user) {
    console.log("user id is ".concat(id, ", name is ").concat(user.name, " and age is ").concat(user.age));
};
var sayHello = function (user) {
    console.log("Hello ".concat(user.age > 50 ? "sir" : "mr", " ").concat(user.name));
};
userDetails("Ab12", { name: "Naiem", age: 25 });
sayHello({ name: "Naiem", age: 25 });
export {};
//# sourceMappingURL=typeAilases.js.map