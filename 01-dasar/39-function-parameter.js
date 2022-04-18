/*
    Function Parameter
    ~ Kita bisa mengirim informasi ke function yang in kita panggil
    ~ Untuk melakukan hal tersebut, kita perlu menambahkan parameter atau argumen di function yang sudah kita buat
    ~ Parameter ditempatkan di dalam kurung () di deklarasi method
    ~ Parameter bisa lebih dari satu, jik lebih dari satu, harus dipisah menggunakan tanda koma
*/

// Contoh function parameter
function sayHello(firstName, lastName){
    document.writeln(`<p>Hello my name is ${firstName} ${lastName}</p>`);
}
// Memasukkan parameter dan menjalankan function
sayHello("Monkey D", "Luffy");
sayHello("Roronoa", "Zorro");

