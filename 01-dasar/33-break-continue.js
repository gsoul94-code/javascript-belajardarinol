/*
    Break & Continue
    ~ Pada switch statement, kita sudah mengenal kata kunci break, yaitu untuk menghentikan case dalam switch
    ~ Sama dengan pada perulangan, break juga digunakan untuk menghentikan seluruh perulangan
    ~ Namun berbeda dengan continue. Continue digunakan untuk menghentikn perulangan saat ini lalu melanjutkan keperulangan selanjutnya
*/

// contoh break
// let counter = 1;
// while(true){
//     console.log(`Perulangan ke ${counter}`);
//     counter++;
//     if(counter > 10){
//         break;
//     }
// }

// contoh continue
for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(`Perulangan ganjil ${i}`);
}