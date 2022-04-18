/*
    Function Sebagai Value
    ~ Function tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value
    ~ Artinya function bisa disimpan di variable, bisa juga dikirim melalui param ke function lainnya
*/

// Contoh 1
function sayHello(name){
    console.log(`Hello ${name}`);
}

// let say = sayHello;

sayHello("Luffy");

 // contoh 2 : function di param
 let say = sayHello;
say("Zorro");


 function giveMeName(callback){
     callback("Chopper");
 }

 giveMeName(sayHello);