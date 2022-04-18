/*
    Spread Syntax
    ~ Kadang kita terlanjur memiliki data berupa Array
    ~ Tapi untungnya kita juga bisa mengirim Array ke Rest Param
    ~ Kita bisa gunakan ... (titik 3x) diikuti dengan Array nya ketika memanggil function
    ~ Fitur ini dinamakan Spread Syntax
*/

// Contoh 2
// Jika ingin menggunakan spead syntax dan mengubah param "...data", maka harus menambahkan "..." pada saat memanggil function, dan diletakkan didepan array

// Contoh 2.1 menggunakan ...data tanpa menambahkan ... pada Array
function sumNilai1(namaMhs1, ...data){
    let totalNilai1 = 0;
    for(const nilai1 of dataNilai1){
        totalNilai1 += nilai1;
    }
    document.writeln(`<p>Nama mahasiswa = ${namaMhs1}, Total nilai = ${totalNilai1}</p>`);
}   
const dataNilai1 = [10, 8.7, 6.5, 8.2, 9, 10, 8];
sumNilai1("Zorro", dataNilai1); // didepan dataNilai tidak ditambahkan ...

// Contoh 2.2 menggunakan var lain untuk menggantikan ...data dan menambahkan ... pada Array
function sumNilai2(namaMhs2, ...dataNilai2){ // merubah ...data menjadi dataNilai2
    let totalNilai2 = 0;
    for(const nilai2 of dataNilai2){
        totalNilai2 += nilai2;
    }
    document.writeln(`<p>Nama mahasiswa = ${namaMhs2}, Total nilai = ${totalNilai2}</p>`);
}   
const dataNilai2 = [10, 8, 6.5, 8, 9, 9, 4];
sumNilai2("Luffy", ...dataNilai2); // didepan dataNilai ditambahkan ...

// Contoh salah
function sumNilai3(namaMhs3, ...dataNilai3){ // tidak menggunakan format asli atau ...data
    let totalNilai3 = 0;
    for(const nilai3 of dataNilai3){
        totalNilai3 += nilai3;
    }
    document.writeln(`<p>Nama mahasiswa = ${namaMhs3}, Total nilai = ${totalNilai3}</p>`);
}   
const dataNilai3 = [10, 8, 6.5, 8, 9, 9,4];
sumNilai3("Luffy", dataNilai3);  // dan tidak menggunakan ... di depan array