const user = (name: string, age: number, isValid: boolean) => {
  if (isValid) {
    console.log(`Olá, meu nome é ${name} e eu tenho ${age} anos.`);
  }
  else {
    console.log("Usuário inválido.");
  }
}

user("Luiz", 20, true);

// Tupla -> delimitar tipos possíveis
const person: [number, string] = [1, "Netflix"];

// Lista de Tuplas
const months: [number, string][] = [
  [1, "Janeiro"],
  [2, "Fevereiro"],
  [3, "Março"],
];

// Intersections -> a variável pode ter um tipo ou outro
const productId: string | number = "1";

// Enum -> atribuir um valor a outro valor
enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
  Right = "Direita",
};

const direction = Direction.Up;

// Type Assertion -> mudar o tipo da variável
const productName: any = "Boné";

// let itemId = productName as string;
let itemId = <string>productName;