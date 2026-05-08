// Type -> objeto
type Order = {
  productId: string;
  price: number;
}

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string; // o ? deixa o preenchimento opcional
  orders: Order[];
  register(): string;
};

const user: User = {
  firstName: "Luiz",
  age: 20,
  email: "luiz@email.com",
  orders: [{productId: "1", price: 200}],
  register() {
    return "Regitro"
  },
};
7
//  Unions
type Author = {
  books: string[];
}

const author: Author & User = {
  firstName: "Tolkien",
  age: 300,
  email: "tolkien@email.com",
  orders: [],
  books: ["O Senhor dos Anéis", "O Hobbit"],
   register() {
     return "Registro"
   },
}

// Interfaces
interface UserInterface {
  readonly firstName: string; // apenas leitura
  email: string;
}

const emailUser: UserInterface = {
  firstName: "Luiz Omena",
  email: "omena@email.com"
}

interface AuthorInterface {
  books: string[];
}

const newAuthor : UserInterface & AuthorInterface = {
  firstName: "Luiz Omena",
  email: "omena@email.com",
  books: []
}