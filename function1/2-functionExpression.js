// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

console.log("******** 2- EXPRESSION*******");
//bu yöntemde fonksiyonlar isimsizdir(anonymous) ve
//bir değişkene atanır. dolayısıyla fonksiyonun bir dönüş değeri olmalıdır.
//?bu değişken fonksiyonu çağırmak için kullanılır

//önce fonksiyon yazılmalı sonra çağrılır çünkü değişkeni tanımladıktan sonra kullanılabilir

//!console.log(tekCift1(5)); before initialization hatası alırız yani başlatılmadan erişemiyoruz
const tekCift1 = function (sayi) {
  return sayi % 2 == 0 ? "çift" : "tek";
};
console.log(tekCift1(5));
console.log(tekCift1(10));

//örnek: 3 sayının en büyüğünü bulan fonksiyonu yazınız
const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let enBuyuk;
  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else {
    enBuyuk = n3;
  }
  return enBuyuk;
};

const n1 = +prompt("1. sayıyı giriniz");
const n2 = +prompt("2. sayıyı giriniz");
const n3 = +prompt("3. sayıyı giriniz");

console.log("Giriğiniz sayılardan en büyüğü: ", buyukBul(n1, n2, n3));
//enBuyuk scope olduğu için direkt onu çağıramayız fonksiyonu çağırıp oradan ulaşırız
console.log("Girilen sayıların en büyüğü: ", buyukBul(-8, -9, -10));
console.log("Girilen sayıların en büyüğü: ", buyukBul(-8, -9));
//bu şekilde cevap undefined olur çünkü değer yok o yüzden default değer veririz
//0 veremyiz çünkü -'li sayılarda en büyük o olur
//Number.MAX_VALUE veririz başına - koyarak çünkü en küçük sayıyı verir ve bu sayede biz eksili sayılarda en büyüğü rahatça buluruzxw

//? bir fonksiyonun içerisinde başka fonksiyonlar çağrılabilir

const topla = function (s1, s2) {
  return s1 + s2;
};
const cıkar = function (s1, s2) {
  return s1 - s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};

const hesapla = function (s1, s2, islem) {
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;
    case "-":
      sonuc = cıkar(s1, s2);
      break;
    case "*":
      sonuc = carp(s1, s2);
      break;
    case "/":
      sonuc = bol(s1, s2);
      break;
    default:
      return "geçersiz işlem";
  }
  return sonuc;
};

console.log(hesapla(5, 7, "+"));
console.log(hesapla(5, 7, "-"));
