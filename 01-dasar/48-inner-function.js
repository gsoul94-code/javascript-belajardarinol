/*
    Inner Function atau Function dalam Function
    ~ Tidak ada batasan dimana kita bisa membuat function
    ~ Termasuk jika kita ingin membuat function di dalam sebuah function, kita bisa melakukannya 
    ~ Function yang terdapat di dalam ktia sebut inner function
    ~ Inner function hanya bisa diakses ditempat kita membuat functionnya, tidak bisa diakses dari luar functionnya
*/

// Contoh
function outer(){
    function inner(){
        console.log(`Inner Function`);
    }
    inner();
    inner();
    console.log(`Outter Function`);
}
outer();
inner(); // ini akan error karna tidak bisa di akses diluar function outter