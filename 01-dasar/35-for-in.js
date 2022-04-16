/*
    For In
    ~ For In merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index di array
    ~ Walaupun for in bisa digunakan untuk Array, namun tidak direkomendasikan untuk Array. Karena biasanya kita jareang sekali butuh data index untuk Array. Kita bisa menggunakan For Of (Yang akan dibahas setelah ini).
*/

// contoh for in di object
const namaUser = {
    namaDpn: "Luffy",
    namaTgh: "D",
    namaBlkg: "Monkey"
}

for(const propUser in namaUser){
    console.log(`Property ${propUser} : ${namaUser[propUser]}`);
}

/*
    Cara membaca script diatas:
    ~ Kita buat var namaUser biasa dengan ketentuan seperti diatas
    ~ Kita lakukan for in dengan format seperti diatas, dimana dalam for kita membuat var baru dengan nama property.
    ~ Var property pada for akan mengakses property pada object namaUser
    ~ Kita console untuk menampilkan semua nama property pada object namaUser
*/

// contoh for in di Array
const buah = ["Apel", "Mangga", "Jambu"];
for(const indexBuah in buah){
    console.log(`Index ${indexBuah} : ${buah[indexBuah]}`);
}