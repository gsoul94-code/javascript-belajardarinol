/*
    Argument Object
    ~ Sebelum ada fitur rest param, di JS ada fitur yang bernama argument object (arg obj)
    ~ Ini adalah fitur dimana kita bisa mengambil semua param dalam bentuk array dengan menggunakan object (obj) bernama arguments (arg)
    ~ arg secara otomatis bisa digunakan di function
    ~ Namun perlu diingat, bahwa untuk JS saat ini, lebih baik disarankan menggunakan rest param dibanding arg obj
*/

// Contoh
function oldSum(){
    let total = 0;
    for(const item of arguments){
        console.log(item);
        // console.log(arguments);
        total += item;
    }
    console.log(`Total is ${total}`);
}

oldSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);