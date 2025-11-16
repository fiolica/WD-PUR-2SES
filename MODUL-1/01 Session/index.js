console.log("Hello world");

// Variable
let message;

console.log(message);

message = "Halo";

console.log(message);

// Var global variable
var globalVariable = "Global variable";

console.log(globalVariable);

// Variable Const
const constantVariable = "this const variable";
console.log(constantVariable);

if (true) {
  var globalVariable = "Global variable";

  let data = "";
}

// data; // -> Akan error karena terkena scoop
globalVariable;

// string itu ditandain dengan ``,'',""
// number ditandai dengan angka (1,2,3,5, ...)
// boolean ditandai dengan -> true atau false
// null -> kosong
// undefined -> uda di declare tp belum ada nilainya


// Object
const user = {
  name: "fiona",
  address: "jaksel",
  isWoman: false,
};

console.log(user)

// array = bisa memasuki banyak data
const users = [12,'12',false,true,user]

console.log(users)