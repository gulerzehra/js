// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("**** FUNC DECLARATION ******");
//function fonksiyonIsmı(parametre1, parametre2,..){
//fonksiyonun yapacağı işlemler
//return döndürülecek değer
//}
//fonksiyonIsmı(); //fonksiyonun çağrılması
//fonksiyonIsmı(arguman1, arguman2,..); //fonksiyonun çağrılması

//return olmasa da olur sadece bunları yap demek gibi geri bildirim vermese de olur
//parametre olmadan da olabilir, parametreli de olabilir
//return olmasa da olur, olursa da olur

function yasYazdir() {
  console.log(`Benim adım Cihan ve ben ${2025 - 2002} yaşındayım`);
}
//bu kısım fonksiyonun declaratiton'u
yasYazdir(); //fonksiyonun çağrılması
//bu fonksiyonda return olmadığı için geri dönüşü yok
//bu fonksiyonda parametrede de yok
// mesela burada ad ve tarih bilgisi parametre olarak verilebilir, dışarıdan alırız bu sefer bu bilgileri
// böyle yaparsak yeniden kullanılabilir olur

yasYazdir2("Zeynep", 2000);
function yasYazdir2(ad, tarih) {
  console.log(`Benim adım ${ad} ve ben ${2025 - tarih} yaşındayım`);
}
yasYazdir2("Cihan", 2002);
yasYazdir2("Zehra", 2002);
//bu yöntemde fonksiyon çağırma yeri önemli değil herhangi bir yerde çağırabiliriz

//?bu yaş bilgilerini başka bir yerde kullanmak istiyorsak return kullanmamız gerek
function yasYazdir3(ad, tarih) {
  const yas = 2025 - tarih;
  console.log(`Benim adım ${ad} ve ben ${yas} yaşındayım`);
  return yas;
}
const yasCihan = yasYazdir3("Cihan", 2002);
const yasZeynep = yasYazdir3("Zeynep", 2000);
const yasBusra = yasYazdir3("Busra", 2003);
console.log(yasYazdir3("Mehmet", 1999));
//return olduğu için direkt böyle de fonksiyonu yazdırabiliriz
console.log(
  `yasların ortalama değeri: ${(yasCihan + yasZeynep + yasBusra) / 3}`
);
//bu yaş değişkeni block scope(hatta func içinde olduğu için function scope)
// olduğu için dışarıda ulaşılamaz

//örnek: ekrana merhaba yazısını yazdıran fonksiyonu yazınız
merhaba(); //burada yazınca da çalışır çünkü //!function declaration'da yukarıdan aşağıya çalışır
function merhaba() {
  console.log("Merhaba");
}
merhaba(); //invoke,call,çağırma

//örnek2

function selamla(ad, soyad = "") {
  console.log(`Merhaba ${ad} ${soyad}`);
}
selamla("can", "yılmaz");
selamla("ada", "demir");
selamla("zeynep"); //zeynep undefined olur çünkü değişkene değer atanmadı
//undefined olmasını istemiyorsak boş string atayabiliriz ama
selamla("zeynep", "");
//default değer atamak daha mantıklı -> soyad = "" bu kısım
//orası boş olduğu zaman ne yazmasını istiyorsak onu da yazabiliriz noname gibi

//örnek3: ismi ve doğum yılını alsın ve yaşı döndürsün
function yasHesapla(ad, dogumYili) {
  //   const sonuc = `Merhaba ${ad} ${2025 - dogumYili} yaşındasınız`;
  const sonuc = `Merhaba ${ad} ${
    new Date().getFullYear() - dogumYili
  } yaşındasınız`;

  return sonuc;
}
const mesaj1 = yasHesapla("Cihan", 2002);
console.log(mesaj1);

function yasHesapla2(ad, dogumYili) {
  return `Merhaba ${ad} ${2025 - dogumYili} yaşındasınız`;
} //bu şekilde de yazılabilir
const mesaj2 = yasHesapla2("Cihan", 2002);
console.log(mesaj2);
console.log(yasHesapla2("Zeynep", 2000));
//bir kere kullanacaksak böyle yazılabilir ama bu bilgi
//başka yerde de kullanılacaksa yukarıdaki gibi yazmak daha mantıklı

//örnek4: 4 işlem hesap makinasını fonksiyonlarla yapalım
function toplama(a, b) {
  return a + b;
}
function cikarma(a, b) {
  return a - b;
}
function carpma(a, b) {
  return a * b;
}
function bolme(a, b) {
  return a / b;
}
const sayi1 = Number(prompt("birinci sayıyı giriniz:"));
const sayi2 = Number(prompt("ikinci sayıyı giriniz:"));
const sonucToplama = toplama(sayi1, sayi2); //prompt ile alınan değerler string olduğu için
//toplama fonksiyonu string olarak toplar ve sonucu string olarak döndürür
//prompt ile alınan değerler number olmalı bunu da Number() ile yapabiliriz
const sonucCikarma = cikarma(sayi1, sayi2);
const sonucCarpma = carpma(sayi1, sayi2);
const sonucBolme = bolme(sayi1, sayi2);
console.log(
  `${sayi1} + ${sayi2} = ${sonucToplama}\n${sayi1} - ${sayi2} = ${sonucCikarma}\n${sayi1} * ${sayi2} = ${sonucCarpma}\n${sayi1} / ${sayi2} = ${sonucBolme}`
);

//örnek5: klavyeden girilen sayının tek mi çift mi olduğunu bulan fonksiyonu yazınız
//fonksiyon sonucu tek veya çift olarak sonucu ana programda yazdırınız

function tekMiCiftMi(sayi) {
  return sayi % 2 ? `${sayi} tektir` : `${sayi} çifttir`;
  // kalan 1 ise 1 true demek olduğu için tek,
  // kalan 0 ise 0 false olduğu için çift
}
console.log(tekMiCiftMi(5));
console.log(tekMiCiftMi(10));

// const sayi = prompt("bir sayı giriniz:");
// console.log(tekMiCiftMi(sayi));
const x = prompt("bir sayı giriniz:");
console.log(tekMiCiftMi(x));
//burada sayi yerine n yazsakta çalışır çünkü biz burada
//değerin kendi değil value gider
