const age = "99";
const date = "2025-01-01"; //-> format 01 Januari 2025

function convertDate(date: string) {} // hanya contoh penggunaan ts

convertDate(date);

const lowercase = "nama saya adalah";

console.log(lowercase.split(""));

console.log(lowercase.split("")[0].toUpperCase() + lowercase.slice(1));

console.log(lowercase);

const trim = " Saya andi";

console.log(trim.trim());

console.log(trim.trim().split(" ").join(""));

const nama = "Rongrong";
const alamat = "Kuningan";

// ditaro string nya karena biar developer lainnya tau ini string
const kalimat1: string = `   Nama saya adalah ${nama}, alamat saya di ${alamat}`;
const kalimat2: string =
  "Nama saya adalah " + nama + ", alamat saya di " + alamat;

console.log(kalimat1.trim());
console.log(kalimat2);

const number: string = "12";

console.log(typeof parseInt(number));
console.log(typeof Number(number));
console.log(typeof +number);
console.log(typeof Infinity);
console.log(typeof NaN);

const num = 12.5;
console.log(num.toFixed());

const empty = 0;

console.log(!!"nama");
console.log(!empty);
console.log(!"better");

const now: Date = new Date();

console.log(now);

console.log(now);

console.log(2 === 2);
console.log(2 === Number("2"));

const length_ = 5;
const width = 3;

const methodLength = "Coba method length";

console.log(methodLength.length);
