type FrontendDeveloper = {
  skills: string[];
  designation1: "Frontend Developer";
};

type BackendDeveloper = {
  skills: string[];
  designation1: "Backend Developer";
};

type FullstackDeveloper = {
  skills: string[];
  designation1: "Frontend Developer" | "Backend Developer";
};

const fullStackDeveloper: FrontendDeveloper = {
  skills: ["HTML", "CSS", "EXPRESS"],
  designation1: "Frontend Developer",
};
const backendDeveloper: BackendDeveloper = {
  skills: ["HTML", "CSS", "EXPRESS"],
  designation1: "Backend Developer",
};

console.log(fullStackDeveloper);
console.log(backendDeveloper);
