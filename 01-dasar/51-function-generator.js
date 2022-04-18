/*
    Function Generator
    ~ Function generator adalah function yang digunakan untuk membaut data generator
    ~ Generator adalah data yang bisa di iterasi seperti Array
    ~ Untuk membuat function generator, kita perlu menggunakan tanda * (Bintang) setelah kata function
    ~ Dan untuk mengembalikkan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti datanya
*/

// Function generator sederhana
function* createName(){
    yield "Monkey";
    yield "D";
    yield "Luffy";
}

const names = createName();
for(const name of names){
    console.log(name);
}

// Function generator kompleks

// lazy
function* buatGanjil(value){
    for(let i = 1; i <= value; i++){
        if(i % 2 === 1){
            console.log(`Yield ${i}`);
            yield i;
        }
    }
}

// eager
function* buatGanjilArray(value){
    const result = [];
    for(let i = 1; i <= value; i++){
        if(i % 2 === 1){
            console.log(`Yield ${i}`);
            result.push(i);
        }
    }
    return result;
}

const angkaGanjil = buatGanjil(10);
for(const angka of angkaGanjil){
    console.log(angka);
}