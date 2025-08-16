// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.
// Instructions:
// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
// task3.ts
{
    const person1 = {
        name: "Naiem Hasan",
        address: "Dhaka, Bangladesh",
        hairColor: "black",
        eyeColor: "brown",
        income: 50000,
        expense: 20000,
        hobbies: ["coding", "traveling", "reading"],
        familyMembers: ["Father", "Mother", "Sister"],
        job: {
            title: "Frontend Developer",
            company: "Tech Corp",
            yearsOfExperience: 3,
        },
        skills: ["JavaScript", "TypeScript", "React", "Node.js"],
        maritalStatus: "single",
        friends: ["Arafat", "Mehedi", "Shakib"],
    };
    console.log(person1);
}
export {};
//# sourceMappingURL=3.js.map