/*
    Do While Loop
    ~ do while loop adalah perulangan yang mirip dengan while
    ~ Perbedaanya hanya pada pengecekkan kondisi
    ~ Pengecekkan kondisi di while loop dilakukan diawal sebelum perulangan dilakukan, sedangkan di do while loop dilakukan setelah perulangan dilakukan
    ~ Oleh karena itu dalam do while loop, minimal pasti sekali perulangan dilakukan walaupun kondisi tidak bernilai true
*/

// contoh 1
let counter = 1;
do{
    console.log(`Perulangan ke ${counter}`);
    counter++;
}
while(counter <= 10);