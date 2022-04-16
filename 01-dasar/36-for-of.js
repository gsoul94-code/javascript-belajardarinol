/*
    For Of
    ~ Jika for in digunakan untuk melakukan iterasi property atau index. Berbeda degnan for of dimana for of digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti Array, String dan lain-lain.
    ~ for of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable
*/

// Contoh for of di Array
const buah = ["Apel", "Mangga", "Nanas"];
for(const namaBuah of buah){
    console.log(`Nama buah : ${namaBuah}`);
}

// Contoh for of di String
const nama = "Monkey D Luffy";
for(const karakter of nama){
    console.log(`karakter dari ${nama} : ${karakter}`);
}
