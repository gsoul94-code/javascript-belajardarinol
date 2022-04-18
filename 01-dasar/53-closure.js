/*
    Closure
    ~ Closure adalah kombinasi function dan bundel refrensi ke data disekitarnya
    ~ Oke agak membingungkan memang, apalagi untuk yang baru pertama belajar
    ~ Kita sudah tahu bahwa kicak scope tidak bisa diakses diluar scopenya
    ~ Dengan kemampuan closure, kita bisa membaut sebuah function di local scope dan refrensi ke data di sekitar local scope tersebut, keluar scopenya
*/

// Contoh
function createAdder(value,){
    const owner = "Luffy";
    function add(param){
        console.log(owner);
        return value + param;
    }
    return add;
}

const addTwo = createAdder(2);
console.log(addTwo(10));
console.log(addTwo(20));