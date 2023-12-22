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

// random:rastgele  sayi üretmek icin kullanilir
//0-1 arasinda sayi üretir
console.log(Math.random())
//chaining metodu 
// let rastgeleSayi=Math.random()
// console.log(rastgeleSayi)
// let duzenlenmisHali=rastgeleSayi.toFixed(2)
// console.log(duzenlenmisHali)
//bu iki kodu chaining metodu ile tek seferde kullanabiliriz
console.log(Math.random().toFixed(2));

//math random ile istenilen degerler arasinda sayi üretmek istersek:
let rNumber=Math.round(Math.random()*1000)
console.log(rNumber);

//Math pow (power) bir sayinin kuvvetini almka icin kullanilir.
console.log(Math.pow(5,4));
console.log(5**15)

//Math.sqrt verilen degerin karakökünü verir.
let karekok=144**(1/2)
console.log("karekok" ,karekok);
console.log(Math.sqrt(56));
console.log(Math.sqrt(56).toFixed(2));
console.log(Math.cbrt(125));

// STRING DATA TYPE

// tirnaklar icinde ifade edilen degerler stringdir.
// stringler harf,isaretler,sayilar

let ad="Javascript dersi ne güzel"
console.log(ad);


console.log(ad);
console.log(ad[0]); //burada ilk eleman 0dir
 //immutable özelliktedir yani degistirilmez özelliktedir.

ad[7]="u"
console.log(ad)

ad="Node.js"
console.log(ad)

// Escape characters-Kacis Karakterleri ters slash ile birlikte kod olarak görmesin diye gözardi etmesini saglariz.
// \n yeni bir satira gecmeyi saglar.
let deger='Merhaba Ayse\`nin odevi'
console.log(deger)
let siir="Merhaba yenigün\nNeden sisli bu hava"
console.log(siir)

// String Birlestirme

// 1.concat metodu
let adi="Ali"
let soyad="Güclü"