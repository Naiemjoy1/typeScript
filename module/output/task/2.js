// Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.
// Instructions:
// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.
function displayUserInfo(name, age, role) {
    if (role) {
        console.log(`Name: ${name}, Age: ${age}, Role: ${role}`);
    }
    else {
        console.log(`Name: ${name}, Age: ${age}, Role: ${role}`);
    }
}
displayUserInfo("Naiem", 29, "admin");
displayUserInfo("Hasan", 22, "user");
export {};
//# sourceMappingURL=2.js.map