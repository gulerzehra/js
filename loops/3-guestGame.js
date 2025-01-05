//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.
//!genel taslak
//hak = 5
// rastgele sayı tut
// kullanıcıdan tahmini iste
// hak ?= hak -1
// eğer tahmin =? rastgele sayı ise bildiniz diye yazdır
//eşit değilse ise (eğer tahmin büyük ise azalt küçük ise arttır yazdır)
//tahmin bilinmezse ve hakkı > 0 'dan go to 3
//hak = 0 ise bilemediniz yazdır

// let hak = 5;
// const sayi = Math.floor(Math.random() * 100);
// console.log(sayi);
// let tahmin;
// while (hak > 0) {
//   tahmin = Number(prompt("Tahmininiz:"));
//   hak--;
//   if (tahmin === sayi) {
//     console.log(`🎊Tebrikler ${5 - hak}. defada bildiniz 🎉`);
//     break;
//   } else {
//     console.log(tahmin > sayi ? "Azalt ⬇️" : "Arttır ⬆");
//   }
// }
// if (tahmin !== sayi && hak === 0) {
//   console.log("Üzgünüz bilemediniz 🥲");
// }

//tekrar oynamak ister misiniz?
//do while döngüsü kullanılabilir
let devam = "e";
do {
  hak = 5;
  const sayi = Math.floor(Math.random() * 100);
  console.log(sayi);
  let tahmin;
  while (hak > 0) {
    tahmin = Number(prompt("Tahmininiz:"));
    hak--;
    if (tahmin === sayi) {
      console.log(`🎊Tebrikler ${5 - hak}. defada bildiniz 🎉`);
      break;
    } else {
      console.log(tahmin > sayi ? "Azalt ⬇️" : "Arttır ⬆");
    }
  }
  if (tahmin !== sayi && hak === 0) {
    console.log("Üzgünüz bilemediniz 🥲");
  }
  devam = prompt("Tekrar oynamak ister misiniz? (e/h)");
} while (devam.toLowerCase() === "e");
console.log("Oyun sonlandı 🎮");
