// const number1 = +prompt ("1.sayiyi giriniz")
// const operation = prompt("+,-,*,/ islemlerinden birini giriniz")
// const number2 = Number(prompt("2.sayiyi giriniz"))

// let sonuc; 

// if(operation=="+"){
//   sonuc = number1 + number2;

// }else if(operation=="-"){
//   sonuc = number1 - number2;

// }else if(operation== "*"){
//   sonuc = number1 * number2;

// }else if(operation=="/") {
//   if(number2 !=0) {
//     sonuc = number1 / number2;

// } else {
//   alert ("payda 0 olamaz")
// }

// } else {
//   alert("yanlis islem girdiniz")
// }

// //! 1.yazım

// if(sonuc!=0){
//   console.log(sonuc);
// }
// //! 2.yazım

// if(sonuc){
//   console.log(sonuc);
// }

// //! 3.yazım

// sonuc && console.log(sonuc);

// console.log(sonuc);


//! TERNARY

// const age = 12;
// const gender = "erkek";
// const health = true;

// if(age >= 20 && gender == "erkek" && health == true ){
//   console.log("askerlik yapabilir");
// }else {
//   console.log("askerlik yapamaz");
// }

// //!2.yol ternary
// age >= 20 && gender == "erkek" && health == true ? console.log("askerik yapabilir") : console.log("askerlik yapamaz");

// //*örnek ternary
// const grade1 = prompt("please enter your grade")

// grade1 >= 50 ? console.log("SUCCESS") : console.log("FAIL");
// const score1 = grade1 >= 50 ? "SUCCESS" : ""

// const score2 = grade1 >= 50 && "SUCCESS"
// console.log(score1);
// console.log(score2);

// const speed = 10;

// speed > 120 ? console.log("Speedy") : speed >= 90 ? console.log("Normal") : console.log("Low Speed");

// if (speed > 120) {
//   console.log("Speedy")
// } else if (speed >= 90) {
//   console.log("Normal");
// } else {
//   console.log("Low Speed");
// // }
//  //!SWITCH CASE//

// const number1 = +prompt ("1.sayiyi giriniz")
// const operation = prompt("+,-,*,/ islemlerinden birini giriniz")
// const number2 = Number(prompt("2.sayiyi giriniz"))

// let sonuc = 0;

// switch (operation) {
//   case "+":
//     sonuc= number1 + number2
//     break;
//   case "-":
//     sonuc= number1 - number2
//     break;
//   case "*":
//     sonuc= number1 * number2
//     break;
//   case "/":
//     if(number2!=0)
//     sonuc= number1 / number2
//   else alert ("payda 0 olamaz")
//     break;

//   default:
//     alert ("yanlis islem girdiniz")
//     break;
// }

// console.log(`${number1}${operation}${number2} = ${sonuc}`);

// const asgariÜcret = 17000;
// const maas = +prompt ("Lütfen maasinizi giriniz")

// const zamliMaas = maas <= asgariÜcret ? maas * 1.25 : maas * 1.10
// console.log(zamliMaas);

//?Ornek:10 aylık maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız

// const Schuld = +prompt("borcunuzu giriniz");
// const Gehalt = +prompt ("maasinizi giriniz");

// console.log(Gehalt*10-Schuld >=5000 ? "kredi alabilir🎉" : "kredi alamaz🤕");

// const n1 = +prompt("number1")
// const n2 = +prompt("number2")
// const n3 = +prompt("number3")

//? kosullarin logical operatörler yardimiyla birlestirilmesi:1.yöntem

// if(n1>n2 && n1>n3){
//   console.log("biggest:",n1);

// }else if (n2>n1 && n2>n3) {
//   console.log("biggest:",n2);

// }else if (n3>n1 && n3>n1){
// console.log("biggest:",n3);
// } else {
//   alert ("yanlis tercih girdiniz") 
// }

// //!2.yöntem

// let biggest =n1;


// if(n2>biggest){
//   biggest=n2
// }
// if(n3>biggest){
//   biggest=n3
// }

// console.log(biggest);

// const not=+prompt("Lütfen notunuzu giriniz")

// if(0<not<25){
//   console.log("not karsiligi: FF");
// }
// else if (26<not<45){
//   console.log("not karsiligi:DD");
// }
// else if(46<not<65){
//   console.log("not karsiligi:CC");
// }
// else if(66<not<75){
//   console.log("not karsiligi:BB");
// }
// else if(76<not<90){
//   console.log("not karsiligi:BA");
// }
// else if(91<not<100){
//   console.log("not karsiligi:AA");
// }
// console.log(not);

// //!Soru:2

const ay = prompt("Ay ismini giriniz!")

let siraNo;

switch (ay) {
  case "ocak":
    siraNo=1
    break;
  case "subat":
    siraNo=2
    break;
  case "mart":
    siraNo=3
    break;
  case "nisan":
    siraNo=4
    break;
  case "mayis":
    siraNo=5
    break;
  case "haziran":
    siraNo=6
    break;
  case "temmuz":
    siraNo=7
    break;
  case "agustos":
    siraNo=8
    break;
  case "eylül":
    siraNo=9
    break;
  case "ekim":
    siraNo=10
    break;
  case "kasim":
    siraNo=11
    break;
  case "aralik":
    siraNo=11
    breaoack;

  default:
    break;
}
console.log(`sira numarasi:${siraNo}`);

// //!soru 3

const n1 = +prompt("Birinci tamsayiyi giriniz")
const operation1 = prompt ("Bir islem giriniz + ya da *")
const n2= +prompt("Ikinci tamsayiyi giriniz")
const operation = prompt ("Bir islem giriniz + ya da *")
const n3 = +prompt("Ücüncü tamsayiyi giriniz")



let sonuc;
if(operation1 == "+"){
  sonuc=n1+n2+n3 ;
}else if(operation == "*"){
  sonuc=n1*n2*n3 ;
}else 
alert("Yanlis islem girdiniz")
console.log(sonuc);
  

let enBüyük = n1;

if(n2>enBüyük){
  enBüyük=n2;
}
if(n3>enBüyük){
  enBüyük=n3;
}
console.log(`En büyük sayi:${enBüyük}`);

let enKücük = n3

if(n2<enKücük){
enKücük=n2; 
}
if(n1<enKücük){
  enKücük=n1;
}
console.log(`En kücük sayi:${enKücük}`);

//!soru4

const n = +prompt("Bir sayi giriniz")

n % 2 === 0 ? console.log(`${n} cift sayidir`) : console.log(`${n} tek sayidir`);

