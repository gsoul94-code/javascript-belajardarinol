// Operator unary :
// + Menandakan nilai positif
// - Menandakan nilai negatif
// ++ Increment, menaikkan 1 angka
// -- Decrement, menurunkan 1 angka

let result = +2;
document.writeln("<p>" + result + "</p>");

result--;
document.writeln("<p>(Menggunakan --) = " + result + "</p>");

result++;
document.writeln("<p>(Menggunakan ++) = " + result + "</p>");

result = -result;
document.writeln("<p>(Menggunakan -) = " + result + "</p>");
originalResult = result;

result = +originalResult;
document.writeln("<p>(Menggunakan +) = " + result + "</p>"); // - + + jadi tetap -

result = -originalResult;
document.writeln("<p>(Menggunakan +) = " + result + "</p>"); // - + - jadi +