/*
    Associative Array
    ~ Pada bahasa pemrograman lain seperti PHP, kita bisa menggunakan index berupa tipe data lain selain number, misal string.
    ~ Fitur ini biasanya disebut Associative Array atau Hash.
    ~ Di JS Associative Array tidak didukung.
    ~ Jika kita memaksa memasukkan data bukan number di index Array, maka JS akan merubah tipe data Array tersebut menjadi object dan ini bisa berbahaya, karena beberapa operasi di Array mungkin bisa berubah hasilnya.
*/

/*
    Tipe data Object
    ~ Tipe data object adalah data yang mirip dengan tipe data Array
    ~ Yang membedakan adalah index pada tipe data object bisa menggunakan string
    ~ index di object biasanya disebut attributes atau properties, bukan index
*/


const orang = {}

// Menambah atau Mengubah
orang["nama"] = "Angga";
orang["alamat"] = "Balikpapan";
orang["umur"] = 28;
console.table(orang);

// Menghapus
// delete orang["umur"];
// console.table(orang);

// Membuat object langsung dengan properties
const buah = {
    nama: "Apel",
    warna: "Merah",
    harga: 32000
};
console.table(buah);

// Mengakses Property Object
console.log(`Nama = ${buah.nama}`);
console.log(`Warna = ${buah.warna}`);
console.log(`Harga = ${buah.harga}`);