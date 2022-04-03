/*
    Operator logika :
    && = dan
    || = atau
    ! = kebalikan
*/

// Nilai kelulusan
const standarNilaiUjian =  75;
const standarNilaiAbsen =  80;
document.writeln("<p>Standar nilai kelulusan:<br>Nilai ujian = " + standarNilaiUjian + "<br>Nilai absen = " + standarNilaiAbsen + "</p>");
document.writeln("<hr/>");

// Contoh operator &&
const nilaiUjian1 = 70;
const nilaiAbsen1 = 85;
const nilaiLulus1 = (nilaiUjian1 > standarNilaiUjian) && (nilaiAbsen1 > standarNilaiAbsen);
document.writeln("<p>Contoh operator &&</p>");
document.writeln("<p>Nilai ujian = " + nilaiUjian1 + "<br> Nilai absen = " + nilaiAbsen1 + "</p>");
document.writeln("<p>Hasil akhir <b>" + nilaiLulus1 + "</b></p>");
document.writeln("<hr/>");

// Contoh operator ||
const nilaiUjian2 = 80;
const nilaiAbsen2 = 70;
const nilaiLulus2 = (nilaiUjian2 > standarNilaiUjian) || (nilaiAbsen2 > standarNilaiAbsen);
document.writeln("<p>Contoh operator ||</p>");
document.writeln("<p>Nilai ujian = " + nilaiUjian2 + "<br> Nilai absen = " + nilaiAbsen2 + "</p>");
document.writeln("<p>Hasil akhir <b>" + nilaiLulus2 + "</b></p>");
document.writeln("<hr/>");

// Contoh operator !
const kebalikan = !nilaiLulus2;
document.writeln("<p> Nilai lulus 2 = " + nilaiLulus2 + "<br>Kebalikkannya = " + kebalikan + "</p>");



