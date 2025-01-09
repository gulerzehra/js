// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

// console.log("**** ARROW ******");
// const topla = (a,b) => a+b;
// console.log(topla(3,5));
//?arrow fonksiyonda otomatik return özelliği var yani bu durumda direkt toplama işlemi yapar
//const yazdır = () => console.log("Merhaba");
//?parametre olmadan da olabilir
//const selam =(x)=> console.log(x);

//işlem birden fazla ifade açıyorsa return kulanmamız gerekiyor.
//const hesapla = (x,y,islem) => {
//    if (islem === "+") {
//        return x+y;
//    }
//}
//?bu durumda expression benziyor sadece function kelimesi yok
//?süslü parantez her zaman kullanmamız gerek aam o zaman return kullanmak zorunlu olur

// örnek: silindirin hacmi
//! console.log("Yaşınız: ", yasHesapla(yas));
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alrsiniz.

const r = Number(prompt("yarıçapı giriniz:"));
const h = Number(prompt("yüksekliği giriniz:"));
const hacimHesapla = (r, h) => Math.PI * r * r * h;
console.log("Silindirin hacmi: ", hacimHesapla(r, h).toFixed(2));
//noktalı kısımdan sonra iki rakamı yazar sadece

//örnek 2: doğum tarihini parametre olarak alan ve yaş döndüren fonksiyonu yazınız

const yas = Number(prompt("Doğum tarihinizi giriniz:"));
const yasHesapla = (dogumTarihi) => {
  const yas = new Date().getFullYear() - dogumTarihi;
  return yas;
};
console.log("Yaşınız: ", yasHesapla(yas));
//FUNCTİON YÖNTEMİNDEN DOLAYI FONKSİYONU YAZDIKTAN SONRA DEĞİŞKENİ ÇAĞIRABİLİRİZ
//ÖNCE DECLARE EDİLMELİ SONRA KULLANILMADI

//**alternatif**/
// const yasHesaplaKısa = (dogumTarihi) => new Date().getFullYear() - dogumTarihi;
// console.log("Yaşınız: ", yasHesaplaKısa(yas));

//Fibonacci Serisi 1,1,2,3,5,8,13,21..
//her sayı kendisinden önceki iki sayının toplamıdır
// f(n) = f(n-1) + f(n-2)

let StringResult = "";

const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let toplam = 0;
  for (let i = 2; i < n; i++) {
    toplam = fib1 + fib2;
    fib1 = fib2;
    fib2 = toplam;
    StringResult += "," + fib2;
    //bu şekilde de seriyi yazdırmış oluruz
    console.log(toplam);
  }
  return fib2;
};
const n = +prompt("n terimini giriniz:");
if (n <= 0) {
  console.log("lütfen 0dan büyük bir sayı giriniz");
} else {
  console.log(`fıbo(${n}) = ${fibo(n)}`);
  console.log(`fibo serisi: 1,1${StringResult}`);
}

//faktriyel hesaplamayı da bu şekilde yapabiliriz
const faktoriyel = (fak) => {
  let sonuc = 1;
  for (let i = 1; i <= n; i++) {
    sonuc *= i;
  }
  return sonuc;
};
const fak = +prompt("bir sayı giriniz:");
console.log(`${fak}! = ${faktoriyel(fak)}`);
