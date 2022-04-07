/*
    Switch Statement
    ~ Kadang kita hanya butuh menggunakan kondisi sederhana di if statement, seperti hanya menggunakan perbandingan ==
    ~ switch adalah statement percabangan yang sama dengan if, namun lebih sederhana cara pembuatannya
    ~ Kondisi switch statement hanya untuk perbandingan ==
*/

const nilai = "A";
switch (nilai) {
    case "A":
        console.log(`Kamu lulus dengan nilai predikat istimewa dengan nilai "${nilai}"`);
        break;
    case "B":
    case "C":
        console.log(`Kamu lulus "${nilai}"`);
        break;
    case "D":
        console.log(`Kamu tidak lulus "${nilai}"`);
        break;
    default:
        console.log(`Nilai yang dimasukkan tidak terdaftar di switch statement`);
        break;
}