// Class Declarations
class UserDeclaration {
  private name: string = "";
  private lastName: string;
  private schoolAddress: string = "";

  constructor(name: string, schoolAddress: string, lastName?: string) {
    this.name = name;
    this.lastName = lastName ?? "";
    // true kiri, false kanan
    // this.lastName = lastName ? lastName: "" <- ternary (kondisi lainnya apa)
    this.schoolAddress = schoolAddress;
  }

  public greeting() {
    return `Hello ${this.name}, Student PWDK ${this.schoolAddress}`;
  }

  public get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  public set onlyLastName(name: string) {
    this.lastName = name;
  }
}

const user1 = new UserDeclaration("Andi", "BSD", "Sukamaju");
const user2 = new UserDeclaration("Budi", "Jakarta");
console.log(user1.greeting());
console.log(user2.greeting());
console.log(user1.fullName);
// setting private
user2.onlyLastName = "Setiawan";
console.log(user2.fullName);

// Class Expression
const UserExpression = class {
  greeting() {
    console.log("Hello PWDK BSDSUN!");
  }
};

// class Date {
//     getMonth(){}

//     getDay(){}

//     getFullYear(){}
// }

const date = new Date();

date.getMonth();

// Contoh static. Biasanya digunakan untuk connect ke database
// # = private
class DB {
  static #connection = "";

  static #initializeConnection() {
    const randomNum = Math.ceil(Math.random() * 100);
    DB.#connection = `New database connection ${randomNum}`;
  }

  static getConnection() {
    if (!DB.#connection) {
      DB.#initializeConnection();
    }

    return DB.#connection;
  }
}

console.log(DB.getConnection());

// Inheritance
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound = () => {
    console.log("Some generic animal sound!");
  };
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  public makeSound = () => {
    console.log("Woof, Woof")
  }
}

// Jika ingin menggunakan class parent(induk) lagi
// class Cat extends Animal {
//     constructor(){}
// } >>> teruskan

const error = {
    status:200,
    message: "",
    error: "",
}

const myDog = new Dog("Buddy", "Golden Retriever!")
myDog.makeSound()
console.log(myDog.name)

