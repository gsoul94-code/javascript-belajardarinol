/*
    Object Method
    ~ Pada tipe data object, kita sudah membahas tentang property di object
    ~ Karena sebenarnya function juga merupakan salah satu tipe data, jadi function pun sebenarnya bisa ditambahkan sebagai property di object
    ~ Cara pembuatannya pun sama dengan function sebagai value
    ~ Function di object kadang disebut juga sebagai object method
*/

// Contoh 1
// const person = {
//     name: "Luffy",
//     sayHello: function(name){
//         console.log(`Hello ${name}`);
//     }
// }

// console.log(person.name);
// person.sayHello(`Abc`);

// Contoh 2
const person ={
    name: "Luffy"
}

person.sayHello = function(name){
    console.log(`Hello ${name}`);
}

// console.log(person.name);
person.sayHello(person.name);
person.sayHello("Mugiwara");