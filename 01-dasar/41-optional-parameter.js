/*
    Optional Parameter
    ~ Secara default, parameter di function itu optional
    ~ Artinya kita tidak wajib mengisi value nya ketika memanggil function
    ~ Jika tidak ada value yang kita kirim ke parameter ketika memanggil function, maka secara otomatis parameter tersebut bernilai undefined
*/

// Contoh 1
function sayHello(firstName, lastName){
    console.log(firstName);
    console.log(lastName);
}
sayHello("Monkey D"); // Karena yang di isi hanya 1 param alias firstName, maka lastName akan undefined
sayHello("Roronoa", "Zoro"); // Kedua param akan ditampikan
sayHello(); // hasilnya akan undefined untuk kedua paramnya
