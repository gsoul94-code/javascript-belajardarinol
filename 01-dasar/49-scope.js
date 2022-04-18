/**
    SCOPE
    ~ Scope merupakan area akses sebuah data
    ~ Ada 2 jenis scope :
        - Global Scope
        - Local Scope
    ~ Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
    ~ Data di Global Scope bisa diakses dari local scope, namun data di local scope hanya bisa di akses di local scope tersebut atau di scope local dibawahnya (inner function)
 */

// Contoh global scope

// let counter = 0; // global scope
// function hitMe(){ // global scope
//     // local scope function hitMe
//     counter++;
// }
// hitMe();
// hitMe();
// hitMe();
// hitMe();
// console.log(counter);

// Contoh local scope
function first(){
    let firstVariable = "First";
    console.log(firstVariable); // ini bisa diakses karna kita console di dalam local scope atau scope yang sama
}
function second(){
    let secondVariable = "Second";
    console.log(secondVariable); // ini juga bisa diakses
}

first();

second();

console.log(firstVariable); // tidak bisa diakses karna firstVariable ada didalam local scope function first
console.log(secondVariable); // ini juga tidak bisa diakses