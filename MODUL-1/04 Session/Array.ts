// Cara penulisan array(syntax)
let array: [] = [];
let array2 = new Array();
console.log(array2);
console.log(array);

let alphabetArr = ["A", "B", "C"];
console.log(alphabetArr);

console.log(alphabetArr[0]);

// Cara akses element dan update element
let alphaA = (alphabetArr[0] = "Z");

console.log(alphabetArr);

interface TypeStudent {
  name: string;
  age: number;
  hobby: string[];
}

// Dalam array bisa menyimpan apa saja
let students: TypeStudent[] = [
  {
    name: "Andi",
    age: 19,
    hobby: ["Game"],
  },
  {
    name: "Budi",
    age: 20,
    hobby: ["Membaca buku", "Renang"],
  },
  {
    hobby: ["Menggambar"],
    name: "Caca",
    age: 19,
  },
];
console.log(students);
const newStudent: TypeStudent = {
  name: "Dudi",
  age: 21,
  hobby: ["Coding"],
};

// Menambahkan data baru di akhir
students.push(newStudent);
// Menambahkan data baru di awal
students.unshift({
  name: "Erlan",
  age: 23,
  hobby: ["Coding"],
});

console.log(students);

// Menghapus data terakhir
students.pop();
// Menghapus data pertama
students.shift();
// Menghapus data dan menambahkan data baru
students.splice(0, 2, {
  name: "Angga",
  age: 25,
  hobby: ["Coding"],
});

console.log(students)

let fruits: string[] = [
    "Apple", 
    "Mango", 
    "Orange", 
    "Apple"
];

console.log(fruits.length);

// For of loop digunakan untuk mengakses element/value
for (let fruit of fruits) {
  console.log(fruit);
}

// For loop -> bisa mengakses index dan mendapatkan element/value
for (let i = 0; i < fruits.length; i++) {
    //Cara ambil element
    const element = fruits[i];
    //Cara ambil index
    const index = i;

    console.log(index);
    console.log(element);
    }

// Foreach -> bisa mengakses index mendapatkan element/value dan array itu sendiri
// Syntax -> array.forEach(()=>{})
/*
    array -> sebuah data array yang akan di loop
    forEach -> method/function untuk melakukan loop
    () => {} -> callback. Didalam () ada beberapa parameter, pertama value, kedua index, dan ketika data array itu sendiri
*/

fruits.forEach((fruit, index, array) => {
    console.log(fruit);
    console.log(index);
    console.log(array);

    console.log(index + ": " + fruit + " in " + array);
});

// untuk mendapatkan index keberapa value yang dicari
console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Apple")); 

console.log(fruits[fruits.length - 1]);
console.log(fruits[3]);

console.log(fruits.join(" - "));
console.log(fruits.join(", "));
console.log(fruits.toString());

console.log(fruits.includes("Mango"));

const errors = ["Invalid", "Unique"];
const onlyAdmin = ["ADMIN_SISTEM", "ADMIN_MONITORING"];

// Contoh case
if(errors.includes("Invalid")) {
    // throw error
}
if (
    onlyAdmin.includes("ADMIN_SISTEM") ||
    onlyAdmin.includes("ADMIN_MONITORING")
){
    // Lanjut hak akses
} else {
    // Redirect ke / atau / forbidden
}

console.log(fruits.includes("Mango"));

