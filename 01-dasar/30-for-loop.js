/*
    For Loop
    ~ For adalah salah satu kata kunci yang dapat digunakan untuk perulangan
    ~ Blok kode yang terdapat di dalam for akan selalu diulangi selama kondisi for terpenuhi
*/

/*
    Sintak perulangan for

    for(init statement; kondisi; post statement){
        // block perulangan
    }

    ~ init statement: akan dieksekusi hanya sekali diawal sebelum perulangan
    ~ Kondisi: akan dilakukan pengecekkan dalam tahap perulangan, jika true maka perulangan akan dilakukan, jika false perulangan akan berhenti
    ~ post statement: akan dieksekusi setiap kali diakhir perulangan
    ~ init statement, kondisi, post statement: tidak wajib diisi, jika kondisi tidak disi, berarti kondisi selalu bernilai true

*/

// for(;;){ // loop selamanya
//     console.log("for loop");
// }

// contoh 1
// let counter = 1;
// for(;counter <= 10;){
//     console.log(`perulangan ${counter}`);
//     counter++;
// }

// contoh 2
// for(let counter = 1;counter <= 10;){
//     console.log(`perulangan ${counter}`);
//     counter++;
// }

// contoh 3
for(let counter = 1; counter <= 10; counter++){
    console.log(`perulangan ${counter}`);
}