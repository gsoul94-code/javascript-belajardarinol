/*
    Tipe data Array 
    ~ Array adalah tipe data berisikan kumpulan data
    ~ Array di JS memiliki sifat dinamis, artinya data bisa bertambah dengan sendirinya saat kita memasukkan data ke dalam Array
*/

let arrayKosong = [];
let arrayNama = ["Apel", "Mangga", "Jeruk"];
// console.log(arrayNama);

/* 
    Cara kerja Array
    ~ Setiap data di Array akan disimpan dalam posisi berurutan, dimana urutan pertama dimulai dari 0.
    ~ Setiap kita menambahkan data ke Array, otomatis data akan disimpan diurutan terakhir.
    ~ Urutan di Array, kita sebut dengan index.
*/

let mie = [];
mie.push("Indomie", "Supermie", "Mie Sedaaap");
mie.push("Sakura", "Mie ABC");
mie.push("Gaga");
// console.table(mie);

/*
    Operasi di Array

    Operasi                         Keterangan
    array.push(value)               Menambah data ke Array
    array.length                    Untuk mendapatkan panjang Array
    array[index]                    Mendapat data diposisi index
    array[index] = value            Mengubah data diposisi index
    delete array[index]             Menghapus data diposisi index, namun index tidak bergeser
*/

const namaMhs = [];
namaMhs.push("Angga");
namaMhs.push("Rizal", "Viody");

namaMhs[1] = "Panji"; // data Rizal yang berada di index ke-1 berubah menjadi Panji
delete namaMhs[0]; // hapus Angga yang berada di index ke-0
delete namaMhs[2]; // hapus Viody yang berada di index ke-2
namaMhs.push("Kasful") // tambahkan Kasful kedalam index terakhir
// console.table(namaMhs); // array akan tetap 4 karna data dasar telah menjadi 4 data
// console.log(namaMhs[0]); // hasilnya undefined karena data index ke-0 sudah dihapus
// console.log(namaMhs[1]); // hasilnya akan show karna data ke-1 (Panji) masih tersedia dalam slot array

/*
    Perlu diingat
    ~ Data di dalam Array tidak ada batasannya harus data apa
    ~ Jadi kita bisa memasukkan data apapun ke dalam Array
    ~ Bahkan kita juga bisa memasukkan Array ke dalam Array jika kita mau
*/

/*
    Multideminsi Array
    ~ Proses memasukkan Array ke dalam Array
*/

const smartphone = [];
// smartphone.push("Apple", "Xiaomi", "Huawei");
// smartphone.push("Samsung",["S21", "S21+", "S21 Ultra"]);
smartphone.push("Contoh 1");
smartphone.push("Contoh 2");
smartphone.push(["Apple", "iPhone 13", "iPhone 13 pro", "iPhone 13 Pro Max"]);
smartphone.push(["Samsung", "S21", "S21+", "S21 Ultra"]);
// console.table(smartphone);


