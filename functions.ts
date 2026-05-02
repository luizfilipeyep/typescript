const sum = (x: number, y: number) => {
  return x + y;
};

const sum2 = (x: number, y: number): string | number => {
  return (x + y).toString();
};

const log = (message: string): void => {
  console.log(message);
};