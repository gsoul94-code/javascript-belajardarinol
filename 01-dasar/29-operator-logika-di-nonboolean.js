/*
    Operator Logika di Non Boolean
    ~ Sebelumnya kita sudah tahu bahwa operator logika AND (&&) dan OR (||) digunakan untuk dua data boolean
    ~ Namun berbeda di JS, kita bisa menggunakan operator logika AND dan OR untuk tipe data Non Boolean
*/

/* 
    Operator OR (||) di Non Boolean
    ~ Operator logika OR (||), membaca dari kiri ke kanan
    ~ Operator ini akan mengambil nilai pertama yang truthy
    ~ Jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan diambil
*/

// console.log("hello" || ''); // ambil yang kiri
// console.log("" || []); // ambil yang kanan
// console.log("0" || "NOL"); // ambil yang kiri
// console.log(0 || "NOL"); // ambil yng kanan
// console.log(null || "NULL"); // ambil yng kanan
// console.log(undefined || "UNDEFINED"); // ambil yng kanan

/* Contoh Kasus
Jika ingin mengambil nama,
namun jika nama depan tidak ada,
kita akan abil nama belakangnya untuk ditampikan */

const mhs = {
    namaDpn: "",
    namaBlkg: "Cesar"
}
const namaMhs = mhs.namaDpn || mhs.namaBlkg;
console.log(namaMhs);



console.log("---------------------------");

/* 
    Operator AND (&&) di Non Boolean
    ~ Operator logika AND (&&), membaca dari kiri ke kanan
    ~ Operator ini akan mengambil nilai pertama yang falsy
    ~ Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil
*/

console.log("Hello" && "");
console.log("" && []);
console.log(0 && "NOL");