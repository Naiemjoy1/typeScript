// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

// task3.ts

{
  type Person = {
    name: string;
    address: string;
    hairColor: "black" | "brown" | "blonde" | "red" | "other";
    eyeColor: "black" | "brown" | "blue" | "green" | "hazel" | "other";
    income: number;
    expense: number;
    hobbies: string[];
    familyMembers: string[];
    job: {
      title: string;
      company: string;
      yearsOfExperience: number;
    };
    skills: string[];
    maritalStatus: "single" | "married" | "divorced" | "widowed";
    friends: string[];
  };

  const person1: Person = {
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
