let calculation;
// follow straucture for making function
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, "minus"));
// rule: 2
let userDetails;
userDetails = (id, user) => {
    console.log(`User ID: ${id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
};
userDetails("123", { name: "Naiem", age: 28 });
userDetails(456, { name: "Shuvo", age: 20 });
export {};
//# sourceMappingURL=functionSignatures.js.map