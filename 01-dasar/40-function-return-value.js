/*
    Function Return Value
    ~ Secara default, function itu tidak menghasilkan value apapun namun jika kita ingin, kita bisa membuat sebuah function mengembalikan value
    ~ Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam function-nya
    ~ Function hanya bisa mengembalikkan satu data, jika kita ingin mengembalikkan beberapa data sekaligus, kita bisa menggunakan Array sebagai return value-nya
*/

// Contoh function dengan param dan return value
function sayHello(firstName, lastName){
    const say = `Hello ${firstName} ${lastName}`;
    return say;
}

// Memanggil function dan menangkap return valuenya
const result = sayHello("Monkey D", "Luffy");
document.writeln(`<p>${result}</p>`);

// Function return value lebih dari satu
function getFinalScore(value){
    if(value > 90){
        return "A";
    }else if(value > 80){
        return "B";
    }else if(value > 70){
        return "C";
    }else if(value > 60){
        return "D";
    }else{
        return "E";
    }
}
const finalScore = getFinalScore(92);
document.writeln(`Your final score ${finalScore}`);

/* 
    Menghentikan eksekusi dengan return
    ~ Saat kita menggunakan kata kunci, maka kode setelah return tersebut tidak akan di eksekusi
    ~ Kita bisa menggunakan return untuk menghentikan eksekusi sebuah function
*/

function isContains(array, searchValue){
    for(const element of array){ // ambil element data dari array
        console.log(element); // kita cek element hasil dari for of
        if(element === searchValue){ // cek element sama dengan data yang dicari
            return true; // 
        }
    }
    return false;
}
const array = [1,2,3,4,5,6,7,8,9,10];
const searchValue = 10;
const found = isContains(array, searchValue);
document.writeln(`<p>Data ${searchValue} = ${found}</p>`);