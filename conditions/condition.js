// karar yapıları
// if, else if, else
console.log("karar yapıları");

// örnek: console'dan girilen bir sayının 0'dan büyük mü, küçük mü, eşit mi olduğunu yazdıralım

// const sayi = Number(prompt("bir sayı giriniz"));
// if (sayi > 0) {
//   console.log(`${sayi} pozitif bir sayıdır`);
// } else if (sayi == 0) {
//   console.log(`${sayi} 0'a sıfırdır`);
// } else {
//   console.log(`${sayi} negatif bir sayıdır`);
// }
// console.log(sayi, typeof sayi);

//örnek: console'dan 3 tane tamsayi alın ve en büyük olanını yazdırın
//! yöntem 1
// const n1 = prompt("Sayi1:");
// const n2 = prompt("Sayi2:");
// const n3 = prompt("Sayi3:");
// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} en büyük sayıdır`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} en büyük sayıdır`);
// } else {
//   console.log(`${n3} en büyük sayıdır`);
// }
//?negatif sayılarda doğru sıralama yapmaz çünkü string olarak alıyor
//?number olarak almak için Number() fonksiyonunu kullanmalıyız
//?ya da +prompt şeklinde yazmalıyız
//! yöntem 2
//başlangıçta 1 sayıyı en büyük sayı olarak kabul edelim sonra diğer sayılarla karşılaştıralım
// let enBuyuk = n1;
// if (n2 >= enBuyuk) {
//   enBuyuk = n2;
// }
// if (n3 >= enBuyuk) {
//   enBuyuk = n3;
// }
// console.log(`${enBuyuk} en büyük sayıdır`);

//örnek 3 : 4 işlem hesap makinesi (2 sayı ve işlem tipi alınacak)
// const sayi1 = +prompt("1. sayıyı giriniz");
// const sayi2 = +prompt("2. sayıyı giriniz");
// const islem = prompt("işlemi giriniz (+, -, *, /)");
// let sonuc = 0;
// if (islem == "+") {
//   sonuc = sayi1 + sayi2;
// } else if (islem == "-") {
//   sonuc = sayi1 - sayi2;
// } else if (islem == "*") {
//   sonuc = sayi1 * sayi2;
// } else if (islem == "/") {
//   sonuc = sayi1 / sayi2;
// } else {
//   console.log("yanlış işlem girdiniz");
// }
// console.log(`${sayi1} ${islem} ${sayi2} = ${sonuc}`);

//SWITCH-CASE YAPISI

// Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.
// Program
// Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
// Cuma -> Teamwork
// Cumartesi ->  InClass + Workshop
// Pazar -> Self-Study
// Aksi takdirde -> Yanlis gun girildi.

const gun = prompt("Gün giriniz").toLowerCase();
switch (gun) {
  case "pazartesi":
  case "salı":
  case "çarşamba":
  case "perşembe":
    console.log("InClass");
    break;
  case "cuma":
    console.log("Teamwork");
    break;
  case "cumartesi":
    console.log("InClass + Workshop");
    break;
  case "Pazar":
    console.log("Self-Study");
    break;
  default:
    console.log("Yanlış gün girdiniz");
    break;
}

//TERNARY OPERATOR
//şart ? ifade1 : ifade2
//şart doğruysa ifade1 yanlışsa ifade2 çalışır
// örnek: not 50'den büyükse geçti değilse kaldı yazdıralım

const not = +prompt("notunuzu giriniz");
let sonuc = not >= 50 ? "Geçti" : "Kaldı";
console.log(sonuc);
//? console.log(not >= 50 ? "Geçti" : "Kaldı"); //bu şekilde de yazılabilir

//örnek : askerlik durumu
const yas = 17;
const cinsiyet = "erkek";
const saglikli = true;

yas >= 18 && cinsiyet === "erkek" && saglikli
  ? console.log("askerlik yapmali")
  : console.log("Askerlik yapmasina gerek yok");

// örnek: Maasi asgari ucretten az olanlara %50 zam,
//fazla olanlara ise %10 zam yapmak istiyoruz ternary operator ile yazınız

const maas = 3000;
const asgariUcret = 2825;
const zamOrani = maas < asgariUcret ? 0.5 : 0.1;
const zam = maas * zamOrani;
console.log(`Zam miktarı: ${zam}`);
console.log(`Yeni maaş: ${maas + zam}`);

// ODEV4: Console’dan kişinin gelir ve gider miktarını alan
// eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir
// değilse  Kredi Verilemez
// şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const gelir = +prompt("Gelir miktarını giriniz");
const gider = +prompt("Gider miktarını giriniz");
const krediDurumu =
  gelir - gider >= asgariUcret ? "Kredi Verilebilir" : "Kredi Verilemez";
console.log(krediDurumu);
