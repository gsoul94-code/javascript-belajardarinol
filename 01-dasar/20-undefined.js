/*
    Undefined
    ~ undefined adalah sebuah kata kunci di JS
    ~ undefined adalah sebuah tipe data
    ~ Sebuah variable yang belum ditambahkan nilai, maka artinya variable tersebut merupakan tipe undefined
    ~ Kadang untuk programmer JS pemula, undefined ini memang agak sedikit membingungkan
    ~ undefined itu berbeda dengan null dibahasa pemrograman lain
*/

// --- undefined variable
// let name;
// // let name = "Angga";
// if (name === undefined){
//     alert(`UNDEFINED`);
// }else{
//     alert(`DEFINED`);
// }

// --- undefined array value
// const buah = ["Apel", "Mangga", "Pepaya"];
// // if(buah[2] === undefined){
// if(buah[3] === undefined){
//     console.log("Buahnya undefined");
// }else{
//     console.log(`Buah yang kamu maksud adalah ${buah[2]}`);
// }

// ---  undefined object property
// let orang = {};
let orang = {
    nama: "Angga"
};
if(orang.nama === undefined){
    console.log(`Data nama undefined`);
}else{
    console.log(`Data nama = ${orang.nama}`);
}