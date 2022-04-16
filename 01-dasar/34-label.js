/*
    Label
    ~ Label merupakan penanda yang bisa digunakan dengan kata kunci break dan continue.
    ~ Secara default saat kita mlakukan break atau continue, dia akan melakukan terhadap perulangan dimana kode break dan continue itu digunakan.
    ~ Dengan menggunakan label, kita bisa melakukan break dan continue terhadap perulangan yang kita inginkan. Asalkan pada perulangannya kita gunakan label.
    ~ Untuk membuat label, kita bisa gunakan nama label lalu diikuti dengan : (titik dua).
*/

// contoh 1
// loopi: // ini adalah nama label
// for(let i = 0; i < 10; i++){
//     loopj: // ini adalah nama label
//     for(let j = 0; j < 10; j++){
//         console.log(`${i} - ${j}`);
//     }
// }

/*
    Cara membaca script diatas :
    ~ label dengan nama loopi melakukan for loop, dengan ketentuan seperti diatas.
    ~ Lalu label dengan nama loopj melakukan for loop dengan ketentuan jika j <= 10 maka j++.
    ~ Jadi loopi akan lanjut berjalan jika loopj sudah melakukan looping sesuai dengan ketentuannya, lalu loopi akan lanjut looping ke ++ nya dan seterusnya.
*/

// contoh 2
loopi: 
for(let i = 0; i < 10; i++){
    loopj:
    for(let j = 0; j < 100; j++){
        if(j > 10){
            continue loopi;
        }
        console.log(`${i} - ${j}`);
    }
}
/*
    Cara membaca script diatas :
    ~ Melanjutkan dari catatan diatas kita langsung bahas tentang if j > 10
    ~ Jika j > 10 maka dilakukan continue atau penghentian looping pada label loopi.
    ~ Artinya for loop untuk label loopj akan terhenti jika j sudah mencapai j > 10. Meski pada ketentuan pada loopingnya j akan looping hingga j < 100.
*/