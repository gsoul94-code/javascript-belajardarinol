/**
            operator augmented assignment sama saja dengan operator aritmatika,
            hanya saja, dikhususkan untuk melakukan operasi dengan variable itu sendiri.
        **/

/**
    operator augmented assigment yang dapat dijalankan di dalam JS :
    + tambah
    - kurang
    * kali
    / bagi
    ** exponensial
    % mod ata sisa bagi
**/

let result = 1+2;
document.writeln("<p>1 + 2 = " + result + "</p>");
let originalResult = result;

result += 1;
document.writeln("<p>" + originalResult + " + 1 = " + result + "</p>");
originalResult = result;

result -= 2;
document.writeln("<p>" + originalResult + " - 2 = " + result + "</p>");
originalResult = result;

result *= 5;
document.writeln("<p>" + originalResult + " x 5 = " + result + "</p>");
originalResult = result;

result /= 2;
document.writeln("<p>" + originalResult + " : 2 = " + result + "</p>");
originalResult = result;

result **= 2;
document.writeln("<p>" + originalResult + " Pangkat 2 = " + result + "</p>");
originalResult = result;

result %= 2;
document.writeln("<p>" + originalResult + " Mod 2 = " + result + "</p>");
originalResult = result;