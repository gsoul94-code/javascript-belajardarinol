/*
    Rest Parameter
    ~ Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyaknya pada satu param dan secara otomatis akan di konversi menjadi Array
    ~ Untuk membuat rest param, ada ketentuannya :
        1. Rest param hanya boleh ada 1 function, tidak boleh lebih
        2. Rest param hanya boleh berada diposisi paling akhir tidak boleh di depan, tengah atau belakang kecuali memang hanya ada 1 param
    ~ Pada bahasa pemrograman lain ada juga yang bilang ini adalah variable argument
*/

// Contoh 1
function sum(name, ...data){ // "...data" adalah format untuk rest param, tidak bisa diubah dengan kata atau var lain
    let total = 0;
    for(const item of data){
        console.log(item); // cek data yang akan summary
        total += item;
    }
    console.log(`Total ${name} is ${total}`);
}

sum("Orange", 2, 4, 6, 8);
sum("Apple", 5, 5, 7, 7, 9, 9);
sum("Banana", 9, 7, 5, 3, 1);

