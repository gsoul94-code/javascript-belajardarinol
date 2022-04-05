/*
    String Template
    ~ Kita sudah tahu bahwa untuk menambahkan string dengan kata lain, kita bisa menggunakan operator + (plus).
    ~ Namun pada kasus tertentu, penggunaan operator + (plus) sangat menyulitkan. Apalagi jika dalam jumlah banyak.
    ~ Javascript memiliki fitur yang bernama String Template, dimana kita bisa mensubtitusi data dari luar String ke dalam String. Seperti mengambil data variable atau bahkan melakukan operasi aritmatika.
    ~ Untuk menggunakan String Template, cara pembuatan Stringnya harus menggunakan ` (backtick).
*/

// Contoh menggabungkan variable
const nama = "Angga";
const pesan = "Semangat belajarnya!";
const hasil = `Halo, ${nama}. ${pesan}`;
console.log(hasil);

// Contoh melakukan expression
const nilai = 80;
const pesanNilai = `Nama mahasiswa = ${nama}, Nilai kamu = ${nilai} (${nilai > 75})`
console.warn(pesanNilai);

// Contoh Multiline String
const pesanMultiline = `Halo !!!
Nama saya ${nama}
Nilai saya ${nilai}`;
console.error(pesanMultiline);