/* Function */

// Function Declaration
function squareFormula(side: number) {
  return side * side;
}

const areaofSquare = squareFormula(2);

console.log(areaofSquare);

console.log(squareFormula(5));

// Function Expression
const calculateAge = function (age: number) {
  return `Umur kamu ${age} tahun`;
};

console.log(calculateAge(3));

// Function Hoisting
// Declaration -> bisa dipanggil sebelum function dibuat
function greeting(name: string = "Guest") {
  const text = ("Hello "+name);
  return text
}

console.log(greeting())

// Expression -> tidak bisa dipanggil sebelum function dibuat
// testFunction(); -> Akan menyebabkan error
const testFunction = function () {
  console.log("Hello test function");
};

testFunction();

// 01 Januari 2025
function formatDate(date: string){
    const now = new Date(date);

    const monthMapping = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ]

    const dayMapping = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ]

    const _date = now.getDate()
    const day = now.getDay()
    const month = now.getMonth()
    const year = now.getFullYear()

    return `${dayMapping[day]}, ${_date} ${monthMapping[month]} ${year}`
}

// function allFunc(){
//     return{
//         date: formatDate("2025-06-20")
//     }
// }

console.log(allFunc())
console.log(formatDate("2025-01-01"))
console.log(formatDate("2025-11-19"))

function myFunc(...args:any){
//console.log("Data: "+args)
return args;
}

console.log(myFunc(1,2,3,1,false,undefined,null))

const numbers: number[] = [1,2,3,4,5,6]

// Sama dengan forEach, perbedaannya adalah map menghasilkan array baru sedangkan forEach tidak menghasilkan Array baru
numbers.map((item, index, array) => {
    console.log(item)
    console.log(index)
    console.log(array)
})

console.log(numbers.filter((item) => item % 2 !== 0))

// menjumlahkan seluruh data yang ada dalam array
console.log(numbers.reduce((acc,curr)=> acc + curr))

console.log(numbers.sort((a, b) => b - a))

// Nested function
function getMessage(firstName: string){
    function sayHello(){
        return "Hello " + firstName;
    }
function welcomeMessage(){
    return "Welcome to Purwadhika";
}

return sayHello() + " " + welcomeMessage ()
}

// Contoh lain nested function
function allFunc(){
    return {
        message: greeting("Andi"),
        date: formatDate("2025-06-20")
    }
}

console.log(getMessage("Andi"))
console.log(allFunc())

// closure -> function yang mengembalikan function
function func(name: string){
    const defaultMessage = "Hello"

    return function(){
        return defaultMessage + " " + name
    }
}

console.log(func("Andi")())

// Recursive -> memanggil dirinya sendiri
function countDown(fromNumber: number){
    console.log(fromNumber)
    
    let nextNumber = fromNumber - 1

    if (nextNumber > 3){
        countDown(nextNumber)
    }
}
countDown(3)

function factorial (num: number): number{
    if (num === 0 || num === 1){
        return 1
    }

    return num * factorial (num - 1)
}

console.log(factorial(5))

//Arrow Function
const sortingAsc = (numbers: number[]) => numbers.sort((a, b) => a - b)

// Jika menggunakan function Declarations
function sortingDesc(numbers: number[]){
    return numbers.sort((a, b) => b - a)
}

// Jika menggunakan function Expression
const sortingExpression = function (numbers: number[]){
    return numbers.sort((a, b) => b - a)
}

console.log(sortingAsc(numbers))
console.log(sortingDesc(numbers))
console.log(sortingExpression(numbers))
