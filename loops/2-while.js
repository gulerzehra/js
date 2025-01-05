// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ===========================================

console.log("****** WHILE *******");

// ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
// 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
// not girmeye zorlayan kodu while dongusu ile yaziniz.

let not = prompt("0-100 arasında bir not giriniz:");
while (not < 0 || not > 100) {
  console.log("Girilen not 0-100 arasında değil!");
  not = prompt("0-100 arasında bir not giriniz:");
}
console.log("Girilen not 0-100 arasındadır :", not);

// * ============================================
// *         DONGULER(LOOPS)- DO-WHILE
// * ============================================

console.log("****** DO-WHILE *******");
//en az bir kere çalışır
// ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
// 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
// not girmeye zorlayan kodu do-while dongusu ile yaziniz.
let not1;
do {
  not1 = prompt("0-100 arasında bir not giriniz:");
  if (not1 < 0 || not1 > 100) {
    console.log("Girilen not 0-100 arasında değil!");
  }
} while (not1 < 0 || not1 > 100);
console.log("Girilen not 0-100 arasındadır :", not);

//örnek: klavyeden q veya Q harfi girilene kadar not girişi yapan
//ve bu karakterlerden birisi girildiğinde o ana kadar girilen tüm notların
//ortalamasını hesaplayan programı yazınız.

let toplam1 = 0;
let not2;
let counter = 0;
do {
  not2 = prompt("Bir not giriniz:");
  if (not2 == "q" || not2 == "Q") {
    break;
  }
  toplam1 += Number(not2);
  counter++;
} while (true);
console.log("Girilen notların ortalaması:", toplam1 / counter);
