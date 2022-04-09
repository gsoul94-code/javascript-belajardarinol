/*
    Operator typeof
    ~ typoeof merupakan operator yang bisa kita gunakan untuk melihat tipe data sebuah value atau variable
    ~ Karena JS merupakan dynamic language, jadi terkadang kita perlu mengecek tipe data sebuah value atau variable menggunakan operator typeof
    ~ Hasil dari operator typeof adalah string tipe datanya

    Contoh jika dilakukan typeof
    Tipe Data       Hasil Operator typeof
    Undefined       "undefined"
    Null            "object"
    Boolean         "boolean"
    Number          "number"
    Bitlnt          "bigint"
    String          "string"
    Symbol          "symbol"
    Function        "function"
    Lainnya         "object"
*/

// let data; // contoh undefined
// let data = 1; // contoh number
// let data = "abc"; // contoh string
let data = []; // contoh object
const typeData = typeof data;
console.log(`Tipe datanya adalah "${typeData}"`);
