/*
    NULL
    ~ null merupakan representasi data kosong
    ~ null berbeda dengan undefined, null berarti variable sudah ditambahkan valuenya hanya saja tidak ada isinya
    ~ Sedangkan undefined datanya atau valuenya belum ditambahkan sama sekali
*/

let kendaraan = "Mobil";
// let kendaraan; // value untuk undefined
// let kendaraan = null; // value untuk null
if(kendaraan ===  undefined){
    console.log(`Datanya undefined`);
}else if(kendaraan === null){
    console.log(`Datanya null`);
}else{
    console.log(`Kamu berangkat kekantor menggunakan "${kendaraan}"`);
}