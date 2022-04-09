/*
    Operator Nullish Coalescing
    ~ Nullish value adalah null dan undefined
    ~ Nullish coalescing operator (??) adalah operator mirip dengan ternary operator yang membedakan adalah pada kondisi, jika bernilai null atau undefined, baru value defaultnya diambil
*/

// tanpa nullish coalescing
let param1;
let data1 = param1;
if(data1 === undefined || data1 == null){
    data1 = `Nilai default = ${data1}`;
}
console.log(data1);
 
// dengan nullish coalescing
//