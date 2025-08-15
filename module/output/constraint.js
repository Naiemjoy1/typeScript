{
    const getPropertyValue = (obj, key) => {
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
export {};
//# sourceMappingURL=constraint.js.map