// If Statements

// If Contoh syntax
if (true) {
  console.log("Syntax if statement");
}

let age: number = 16;

if (age >= 17) {
  console.log("Will have a citizen ID");
} else {
  console.log("You");
}

// if - else if - else
let grade: string = "c";
if (grade === "A") {
  console.log(`Kamu Jago, karena dapet ${grade}`);
} else if (grade === "B") {
  console.log(`Kamu Lumayan, dapet ${grade} oke lah`);
} else {
  console.log(`Bisa dapat ${grade} artinya kamu bodoh`);
}

switch (grade) {
  case "A":
    console.log(`Kamu pintar, karena dapat nilai ${grade}`);
    break;
  case "B":
    console.log(`Kamu lumayan pinter, dapat ${grade}`);
    break;
  case "C":
    console.log(`Cukup, nilai kamu ${grade}`);
    break;
  default:
    console.log(`Kalau dapat ${grade}, kamu belajar lagi deh`);
    break;
}

const data = [
  {
    title: "Judul",
  },
  {
    title: "Judul 2",
  },
];

// Membalikkan kondisi. Jika true akan menjadi false dan begitu juga sebaliknya
if (true) {
  console.log("Render true");
} else {
  console.log("Render false");
}

// Basic syntax ternary
console.log(true ? "Render true" : "Render false");

// Contoh Penggunaan
console.log(grade === "D" ? "Nilai kamu D" : "Nilai tidak diketahui");

// For loop
for (let i = 1; i <= data.length; i++) {
  console.log(data[i - 1].title);
}

let i = 0;
// Periksa kondisi terlebih dahulu baru menjalankan loop
while (i < 3) {
  console.log("Render");

  i++;
}

// Menjalankan
do {
  console.log("Do While");
} while (i < 3);

let sum = 0;
// Break
while (true) {
  let value = 1;

  console.log(sum)

  if (sum == 5) break;
  console.log(sum);

  sum += value;
}

const number = 5
console.log(number % 2 == 0 ? "Genap" : "Ganjil");

if (number % 2 == 0) {
    console.log("Genap");
    } else {
    console.log("Ganjil");
}

let N = 3
let result = 0
for (let i = 1; i <= N; i++){
    result += i
}

console.log(result);
