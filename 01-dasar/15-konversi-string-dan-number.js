/*
    Konversi String dan Number
    ~ Saat membuka aplikasi, terkadang kita input dari pengguna selalu dalam bentuk String.
    ~ Sedangkan kita ingin mengelola datanya dalam bentuk Number.
    ~ Maka sangat disarankan untuk melakukan konversi tipe data.
*/

// Contoh1
const cth1Str = "1"; // String
const cth1Num = 1; // Number
const cth1Sum = cth1Str + cth1Num;
document.writeln(`<p>${cth1Sum}</p>`);
// Hasilnya string akan bergabung atau merge, karna tidak bisa melakukan proses aritmatika


/* 
    Melakukan konversi String & Number
    Function                    Keterangan
    parseInt(string)            Mengkonversi dari string ke number (bilangan bulat)
    parseFloat(string)          Mengkonversi dari string ke number (bilangan pecahan)
    Number(string)              Mengkonversi dari string ke number (bilangan bulat dan pecahan)
    number.toString(string)     Mengkonversi dari number ke string
*/
document.writeln(`<hr>`);
document.writeln(`<p>${parseInt("1.8")}</p>`); // pecahan akan dibulatakan
document.writeln(`<p>${parseFloat("2.2")}</p>`); // pecahan
document.writeln(`<p>${Number("1.1")}</p>`);

document.writeln(`<hr>`);
const cth3Val1 = 1;
const cth3Val2 = 1;
const cth3Total = cth3Val1.toString() + cth3Val2.toString(); // karena diubah menjadi string, maka nilainya digabung
document.writeln(`<p>${cth3Total}</p>`);

/*
    NaN
    ~ Bagaimana jika ternyata data String yang kita coba konversi ke Number bukanlah data yang valid?
    ~ Jika data String yang kita coba lakukan konversi bukanlah data valid, maka hasil dari konversi tersebut adalah NaN (Not a Number)
    ~ NaN adalah Number Special yang menyebutkan bahwa ini bukanlah number
    ~ Jika NaN dioperasikan dengan data number lainnya, maka hasilnya akan menjadi NaN lagi
*/

document.writeln(`<hr>`);

// Semua konversi dapat mentolelir kesalahan jika berada dibelakang nilai yang bernar, cth : parseFloat("1.1as") maka akan tampil 1.1 dan karakter as akan dihapuskan
const cth4Val1 = parseInt("2abc");
const cth4Val2 = parseFloat("1.1as");
// Number() tidak akan mentolelir kesalahan pada data
const cth4Val3 = Number("bukan number");

document.writeln(`<p>parseInt("2abc") = ${cth4Val1}<br>
parseFloat("1.1as") = ${cth4Val2}<br>
Number("bukan number"); = ${cth4Val3}</p>`);



