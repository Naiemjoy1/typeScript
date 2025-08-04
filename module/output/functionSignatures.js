var calculation;
// follow straucture for making function
calculation = function (a, b, c) {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, "minus"));
// rule: 2
var userDetails;
userDetails = function (id, user) {
    console.log("User ID: ".concat(id));
    console.log("Name: ".concat(user.name));
    console.log("Age: ".concat(user.age));
};
userDetails("123", { name: "Naiem", age: 28 });
userDetails(456, { name: "Shuvo", age: 20 });
export {};
//# sourceMappingURL=functionSignatures.js.map