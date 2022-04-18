/*
    Default Parameter
    ~ Sekarang kita tau bahwa paramter itu bersifat optional, artinya kita bisa tidak memberi value terhadap param
    ~ Param juga bisa kita beri default value, artinya jika ketika kita tidak mengirim data ke param atau kita mengirim undefined, maka secara otomatis param akan diisi oleh default value
*/

// Contoh 1
function register(name, gender = "UNKNOWN"){
    console.log(name);
    console.log(gender);
}
register("Roronoa Zoro", "MALE");
register("Komi", "FEMALE");
register("Doraemon");
register("Shincan", undefined);
