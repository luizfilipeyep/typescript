const sum = (x: number, y: number) => {
  return x + y;
};

const sum2 = (x: number, y: number): string | number => {
  return (x + y).toString();
};

const log = (message: string): void => {
  console.log(message);
};

// Interfaces + Functions
interface MathFunc {
  (x: number, y: number): number;
}

const sum3: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const sub: MathFunc = (x: number, y: number) => {
  return x - y;
}