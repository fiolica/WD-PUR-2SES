/* Exercise number 1*/
// with sort
const minMaxWithSort = (numbers: number[]) => {
    numbers.sort((a, b) => a - b)

    console.log(numbers)

    const lowest = numbers[0]
    const highest = numbers[numbers.length - 1]
    const average = numbers.reduce((acc, curr) => acc + curr)/numbers.length

    return {
        lowest,
        highest,
        average,
    }
}

const minMaxNumbers = [12, 5, 23, 18, 4, 45, 32]
console.log(minMaxWithSort(minMaxNumbers))

// Without sort

    // Math.max
    // Math.min

function minMaxWithoutSort(numbers: number[]){
    const lowest = Math.min(...numbers)
    const highest = Math.max(...numbers)
    const average = numbers.reduce((acc, curr) => acc + curr)/numbers.length

    return {
        lowest,
        highest,
        average,
    }
}

console.log(minMaxWithoutSort(minMaxNumbers))


// exercise number 2
function concatString(array: string[]){
    return array.slice(0, -1).join(", ") + ", dan " + array[array.length - 1]
    }
const concatData = ["apple", "banana", "cherry", "date", "mango"]
console.log(concatString(concatData))

// exercise number 3
const secondSmallNumber = (numbers: number[]) => {
    return numbers.sort((a, b) => a - b)[1]
}
const secondSmallNumberData = [5, 3, 1, 7, 2, 6]
console.log(secondSmallNumber(secondSmallNumberData))

// exercise number 4
/*
    1. menentukan parameter -> array 1 dan array 2
    2. mapping salah satu array untuk menghasilkan array baru
    3. dalam mapping jumlahkan array(value) yang di map dengan array lainnya sesuai dengan index sekarang
    4. jangan lupa return
*/
const calculateEachElement = (array1: number[], array2: number[]) => {
    return array1.map((value, index) => value + array2[index])
}
const arrayData1 = [1, 2, 3]
const arrayData2 = [3, 2, 1]
console.log(calculateEachElement(arrayData1, arrayData2))

//exercise number 5
//add unique element

function addUniqueElement(array: number[], newElement: number){
    // if (!array.includes(newElement)){
    //     return [...array,newElement]
    // }
    
    // return array

    return array.includes(newElement) ? [...array] : [...array, newElement]
}

const arrayData = [1, 2, 3, 4]
console.log(addUniqueElement(arrayData, 4))