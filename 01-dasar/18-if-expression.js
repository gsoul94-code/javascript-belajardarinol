/*
    if Expression
    ~ Dalam JS, if adalah salah satu kata kunci yang digunakan untuk percabangan
    ~ Percabangan artinya kita bisa mengeksekusi kode program tertentu ketika suatu kondisi terpenuhi
    ~ Hampir disemua bahasa pemrograman mendukung if expression
*/

// const nilai = 90;
// if(nilai > 75){
//     console.log(`lulus`);
// }

/*
    else expression
    ~ Block if akan dieksekusi ketika kondisi if bernilai true
    ~ Kadang kita ingin melakukan eksekusi program tertentu jika kondisi if bernilai false
    ~ Hal ini bisa dilakukan menggunakan else expression
*/

// const nilai = 50;
// if(nilai > 75){
//     console.log(`lulus`);
// }else{
//     console.log(`tidak lulus`);
// }

/*
    else if expression
    ~ Kadang dalam if, kita butuh membuat beberapa kondisi
    ~ Kasus seperti ini, di JS kita bisa menggunakan else if expression
*/
const nilai = 90;
if(nilai >= 90){
    console.log(`nilai kamu A`);
}else if(nilai >= 70){
    console.log(`nilai kamu B`);
}else{
    console.log(`nilai kamu C`);
}
