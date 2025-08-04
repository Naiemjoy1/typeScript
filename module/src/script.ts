let b: string | number;
let a: (string | number | boolean)[] = [];

b = "naiem";
a.push(44, "naiem", true);
console.log(a);
console.log(b);

// object
let c: {
  name: string;
  age: number;
  adult: boolean;
};

c = {
  name: "naiem",
  age: 34,
  adult: true,
};

console.log(c);
