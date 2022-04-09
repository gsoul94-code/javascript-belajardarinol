/*
    Operator Ternary
    ~ Operator Ternary adalah operator sederhana dari if statement
    ~ Ternary operator terdiri dari kondisi yang dievaluasi, jika menghasilkan true maka nilai pertama diambil, jika false, maka nilai kedua diambil
*/

const nilai = 80;

// contoh sebelum menggunakan ternary
let ucapan;
if(nilai >= 70){
    ucapan = "Selamat anda lulus!";
}else{
    ucapan = "Silahkan coba lagi.";
}
console.log(`Menggunakan if biasa = ${ucapan}`);

// contoh menggunakan operator ternary
const nilai2 = 90;
const ucapan2 = nilai2 >= 70 ? `Selamat anda lulus dengan nilai ${nilai2}` : `Maaf, anda tidak lulus dengan nilai ${nilai2}`;
console.log(`Menggunakan ternary = ${ucapan2}`);
