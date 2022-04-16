/*
    Falsy
    ~ Falsy atau terkadang ditulis Falsey, adalah value yang ketika dalam konteks boolean, dia dianggap false.
    ~ Ini adalah salah satuy fitur unik dari JS yang berguna namun kadang juga sering membingungkan.
    ~ Jadi di JS kondisi itu tidak hanya bisa boolean, tapi diluar boolean pun bisa, namun kita harus tahu beberapa data falsy atau dianggap false.

    Data Falsy
    Data dianggap Falsy             Keterangan
    false                           Boolean faLse
    0, -0                           Number 0 dan -0 dianggap false
    "".''.``                        Semua string kosong dianggap false
    null                            null danggap false
    undefined                       undefined dianggap false
    NaN                             Not a Number dianggap false

    Data Truthy adalah kebalikan dari Falsy
*/

let data = "";
if(data){
    console.log("TRUE");
}else{
    console.log("FALSE");
}

