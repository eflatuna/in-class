/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Javascript otomatik olarak veri türünü algılar
let sayi=45.5

//! bir değişkenin türünü görebilmek için typeof dan faydalanılır
console.log(typeof sayi)

/* -------------------------------------------------------------------------- */
//!                      PRIMITIVE DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! BigInt Data Type
// Çok büyük sayılar için kulanılır
// Number veri türü (-+) 2 üzeri 53 eksi 1  değerine kadar tanımlıdır.Bu değerin bigInt olarak tanımlanır
// 343443534543n (sonuna konulan n değeri ile ifade edilir)

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür.

let x=34
let y=89.343546 // ondalıklı sayılarda number olarak adlandırılır
console.log(typeof x)
console.log(typeof y)

// Math metodu ile matematiksel işlemler tanımlanabilir
const pi=Math.PI
console.log(pi)

// Dairenin çevresini bulan kod
// Çevre formülü 2*pi*r
let r=6
let cevre=2*pi*r
console.log("Cevre:" ,cevre)

// Daienin alanını bulan kod
// pi*r*r
let alan=pi*r*r 
console.log("Alan:" ,alan)

// Sayi Yuvarlama Islemleri
//round
//ceil
//floor

//sayiyi yuvarlar
let alan1=Math.round(alan)
console.log(alan1)
console.log(Math.round(cevre))

//ceil bir üst sayiya yuvarlar
let sayi1=45.535
console.log(Math.ceil(sayi1));
console.log(Math.round(sayi1));

//floor kendi sayisina yuvarlar.
console.log(Math.floor(sayi1));

//trunc tam sayisini alir sadece
console.log(Math.trunc(sayi1));

//toFixed verilen ondalikli ayini kac basamagini göstermek istedigimizi belirtiriz.
// console.log(sayi1.toFixed(2));
let urunFiyati=273
let indirimliFiyat=277- ((277/100*17))
console.log(indirimliFiyat);
// console.log(indirimliFiyat.toFixed(2));
let urun=270
console.log(urun.toFixed(2));

//Match.max verilen birden fayla deger icinden en büyügünü buldurur.
console.log(Math.max(34,1,45,3,53,15,13));

//Match.min verilen birden fayla deger icinden en kucugunu buldurur.
console.log(Math.min(34,1,45,3,53,15,13));

// random:rastgele  