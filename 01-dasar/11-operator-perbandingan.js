/* 
    Operator perbandingan :
    > Lebih dari
    < Kurang dari
    >= Lebih dari sama dengan
    <= Kurang dari sama dengan
    == Sama dengan
    === Sama dengan dan sama tipe
    != tidak sama dengan
    !== Tidak sama dengan dan tidak sama tipe
*/

let result = 5 == "5";
document.writeln("<p>(5 == \"5\") = " + result + "</p>"); // true karna nilai sama

result = 5 === "5";
document.writeln("<p>(5 === \"5\") = " + result + "</p>"); // false, karna tipe data tidak sama

result = 5 > 10;
document.writeln("<p>(5 > 10) = " + result + "</p>");

result = 5 < 10;
document.writeln("<p>(5 < 10) = " + result + "</p>");

result = 5 != 10;
document.writeln("<p>(5 != 10) = " + result + "</p>"); 

result = 5 !== 5;
document.writeln("<p>(5 !== \"5\") = " + result + "</p>"); 
