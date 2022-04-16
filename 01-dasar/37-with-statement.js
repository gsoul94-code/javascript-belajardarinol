/*
    With Statement
    ~ With statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data.
    ~ Dengan menggunakan with statement, kita bisa mengakses prop dalam sebuah data tanpa harus menyebut datanya.
*/

const person = {
    firstName: "Monkey",
    middleName: "D",
    lastName: "Luffy"
}

// Contoh tanpa with statement
// console.log(person.firstName);
// console.log(person.middleName);
// console.log(person.lastName);

// Contoh menggunakan with statement
// with(person){
//     console.log(firstName);
//     console.log(middleName);
//     console.log(lastName);
// }

/*
    With Statement Tidak Direkomendasikan
    ~ Walupun fitur with statement ini sangat menarik
    ~ Namun kebanyakan orang tidak merekomendasikan penggunaan with statement
    ~ Hal ini dikarenakan with statement kadang membuat sebuah kode menjadi ambigu
*/

// Contoh ambigu di with statement
const firstName = "Roronoa";
const lastName = "Zorro";

with(person){
    console.log(firstName); // Niatnya ingin Roronoa
    console.log(middleName);
    console.log(lastName); // Niatnya ingin Zorro
}