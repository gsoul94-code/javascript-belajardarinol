/*
    Anonymous Function
    ~ Sebelumnya kita selalu membuat function dengan nama
    ~ Kita juga bisa membuat function tanpa nama function, atau istilahnya adalah anonymouse function
    ~ Kita bisa buat anonymous function dalam sebuah variable atau bisa juga kita buat ketika mengisi parameter
*/

// contoh : anonymous function di variable
let say = function(name){
    console.log(`Hello ${name}`);
};

say("Luffy");

// contoh : anonymouse function di param
function giveMeName(callback){
    callback("Zorro");
}
giveMeName(say); // langsung dari param

giveMeName(function(name){ // dengan param juga
    console.log(`Hello ${name}`);
});