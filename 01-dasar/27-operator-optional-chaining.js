/*
    Operator Optional Chaining
    ~ Optional Chaining Operator (?) merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah object dari data nullish.
    ~ Jika kita mencoba mengakses property dari sebuah project dari data nullish tanpa menggunakan optional chaining operator, maka akan terjadi error.
*/

// contoh kode yang error
// let person = {};
// console.log(person.address.country);
/* kode akan berhenti disini meski ada kode lain yang berjalan karena kita telah memaksa untuk mengakses property yang tidak ada.
Karena itu kita butuh menggunakan if untuk melakukan pengecekkan jika error */

// pengecekkan menggunakan if
// let say;
// if(person.address !== undefined && person.address !== null){
//     say = person.address.country;
// }
// console.log(say);

/* Namun penggunakan if dalam pengecekkan sangat membutuhkan waktu yang lama atau bertele-tele. Karena itu kita disini akan menggunakan Optional Chaining */
// console.log(person?.address?.country);
// Hasilnya akan undefined jika data propertynya tidak ditemukan. Dan tidak akan menampikan error seperti diawal.

// Sekarang kita coba tambahkan data pada object person
let person = {
    address: {
        country: "Indonesia"
    }
};

let country = person?.address?.country;
console.log(country);