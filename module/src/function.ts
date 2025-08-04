const myFunc = (a: string, b: string, c: number = 4): string => {
  return a + b;
};

myFunc("BD", "TH", 5);

// c? mean optional
// undefined and void not same
// if add :String return will guess
