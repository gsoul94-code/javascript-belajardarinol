/*
    Arrow Function
    ~ Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
    ~ Namun terdapat limitasi dan juga tidak bsia digunakan disemua situasi
    ~ Dinamakan arrow function karena menggunakan tanda => (seperti panah)
    ~ Berikut contoh beberapa kekurangan arrow function :
        1. Tidak memiliki fitur arguments object
        2. Tidak bisa menggunakan function generator
        3. Tidak bisa mengakses this (yang nanti akan dibahas di function di object)
        4. tidak bisa mengakses super (yang nanti akan dibahas di JS OOP)
*/

// // Contoh 1
// const sayHello = (name) => {
//     const say = `Hello ${name}`;
//     console.log(say);
// }
// sayHello("Luffy");

/*
    Arrow function tanpa block
    ~ Jika sebuah arrow function isinya sederhana, misal hanya 1 baris
    ~ Kita bisa membuat arrow function tanpa harus menggunakan block
*/

// // Contoh 2
// const sayHello = (name) => console.log(`Hello ${name}`);
// sayHello("Zorro");

/*
    Arrow Function Return Value
    ~ Arrow function bisa mengembalikkan value, sama seperti function biasanya
    ~ Jika menggunakan block, maka kita perlu menggunakan kata kunci return
    ~ Jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return
*/

// // Contoh 3
// const sum = (first, second) => first + second;
// console.log(sum(10, 10));

/*
    Arrow Function Tanpa Kurung Parameter
    ~ Jika parameter di Arrow function hanya satu, kita bisa tidak menggunakan kurung pada parameter
*/

// //  Contoh 4
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello("Luffy");

/*
    Arrow Function Sebagai Parameter
    ~ Karena arrow function sama seperti anonymous function
    ~ Jadi kita juga bisa menggunakan arrow function sebagai parameter di function lain
*/

// Contoh 5
function giveMeName(callback){
    callback("Luffy");
}
giveMeName(name => console.log(`Hello ${name}`));