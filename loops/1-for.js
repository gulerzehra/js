// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("*********** For Döngüsü ***********");
// sayı miktari belliyse for kullanılır
//? for (başlangıç, bitiş, artış miktarı){
//?     yapılacak işlem
//? }

//örnek: 1'den n'e kadar olan sayıları toplama
let toplam = 0;
const n = Number(prompt("bir sayı giriniz:"));
for (let i = 1; i <= n; i++) {
  toplam = toplam + i;
  // toplam += i; // yukarıdaki satır ile aynı işlemi yapar
}
console.log("Sonuç:", toplam); // toplam değişkeni for dışında tanımlanmalı çünkü
//for içinde tanımlanırsa sadece orada geçerli olur

//örnek: 0 ve 100 arasında rastgele 10 sayı üreten kodu yazalım
for (let i = 1; i <= 10; i++) {
  const rastgele = Math.floor(Math.random() * 100);
  //*100 yapma Math.random 0-1 arasında sayı üretir
  //Math.floor: aşağıya yuvarlar, Math.ceil: yukarıya yuvarlar
  //Math.round: en yakın sayıya yuvarlar, Math.trunc: ondalıklı kısmı atar
  console.log(rastgele);
  //const ile yazdık rastgele farklı değerler olmasına rağmen
  //hata vermedi çünkü her defasında yeniden rasgele sayı üretiyor ve değer atıyor
  //rastgele = 5 yazsak hata verirdi çünkü const değişkenlerin değeri değiştirilemez
}

//örnek: girilen sayının asal ya da asal olmadığını bulan kodu yazalım (for ile)
const sayi = Number(prompt("Bir sayı giriniz:"));
let asalMi = true;
if (sayi === 1) {
  asalMi = false;
} else {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      asalMi = false;
      break;
    }
  }
}
// if (asalMi) {
//   console.log("Sayı asaldır");
// } else {
//   console.log("Sayı asal değildir");
// }
const sonuc = asalMi ? "asaldır" : "asal değildir";
console.log(`${sayi} ${sonuc}`);
