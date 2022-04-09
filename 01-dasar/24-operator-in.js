/*
    In Operator
    ~ In Operator adalah operator yang biasa digunakan untuk mengecek apakah sebuah property ada di dalam object atau tidak
    ~ Jika property tersebut ada di object, maka hasilnya true, sedangkan jika tidak, maka hasilnya false
    ~ Tidak hanya di object, In juga bisa digunakan untuk mengecek index di Array
*/

const orang = {
    nama: "Angga",
    usia: 27,
    pekerjaan: "Web Developer"
}

const resultNama = "nama" in orang; // Bacanya: Apakah prop nama ada di dalam object orang?, jawabannya true
const resultHobi = "hobi" in orang;
console.log(`Nama = ${resultNama} | Hobi = ${resultHobi}`);

// contoh penggunaan lainnya
if("usia" in orang){
    console.log(`Usia anda ${orang.usia}`);
}else{
    console.log(`Usia tidak ditemukan`);
}