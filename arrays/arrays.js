// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

// console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ["ahmet", "ismet", "can", "canan", "matheww"];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);

const bosDizi = [];
console.log(bosDizi);

// ! 2.Yöntem (Object Constructor)
const diller = new Array("C++", "javascript", "Assembly", "Go", "Ruby");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

//! 10 elemanlik bos bir Array oluşturdu
const numbers1 = new Array(10);
console.log(numbers1);
//?ama eğer const numbers1 = [10]; şeklinde yazarsak 1 elemanlı bir array oluşturur

// ! 3.Yöntem (Array.of())
const veriler = Array.of(1, 2, 3);
console.log(veriler);

const veri = Array.of("Deneme");
console.log(veri);

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//!  Diziden veri okuma
console.log(diller[1]);
const go = diller[3];
console.log(go);

console.log(isimler[isimler.length - 1]);
//? at()
console.log(isimler.at(-1));

//!  Diziye veri yazma
// const isimler = ["ahmet", "ismet", "can", "canan", "Matheww"];
isimler[1] = "saffet";
//isimlerin 1.indisine saffet eklendi
console.log(isimler);
console.log(isimler.length);

//!Uncaught TypeError: Assignment to constant variable.
// isimler = ["Ali", "Veli"];
//isimler değişkenine yeni bir dizi atanmaya çalışılıyor, ancak bu const ile tanımlandığı için yasaktır.

//? numbers dizisinin son elementinin degerini bir arttirin
console.log(numbers);
numbers[numbers.length - 1]++;
console.log(numbers);

const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];
//array içine array koyduk
console.log(kisiler);

//? kisiler icerisindeki yaslar dizisinde bulunan 55 yasini konsola yazdiriniz.
const yas55 = kisiler[5][2];
console.log(yas55);

//? kisiler icerisindeki yaslar dizisinde bulunan 44 yasini bir eksiltiniz.
kisiler[5][1]--; //?43
console.log(kisiler);
console.log(yaslar);

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//? ===========================================================

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];

//** pop() son elemanı siler ve sildigi elemani dondurur.
const silinen = arabalar.pop();
console.log(arabalar, silinen);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
const n = arabalar.push("Citroen");
console.log(arabalar, n);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const n1 = arabalar.unshift("Audi");
console.log(arabalar, n1);

//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur
const audi = arabalar.shift();
console.log(arabalar, audi);

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
arabalar.splice(1, 0, "Passat");
//burada sadece1.indis olarak ekliyor
console.log(arabalar);

arabalar.splice(3, 1, "Honda", "Toyota");
//burada3.indis yerine bunları yazıyor mesela
console.log(arabalar);

//* Dizinin tamamini ters siraya cevirir.
arabalar.reverse();
console.log(arabalar);

//* sort() Diziyi alfabetik olarak siralar.
isimler.sort();
console.log(isimler);

//! Alfabetik siraladigi icin dogru sonuc cikmayabilir.
const sayilar = [2, 111, 3, 22, 1, 11, 5, 7, 6];
sayilar.sort();
console.log(sayilar);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a, b) => a - b);
console.log(sayilar);

/*Sayıları sıralamak için (a, b) => a - b fonksiyonu şu şekilde çalışır:
Eğer a - b negatif bir değer döndürürse, a önce gelir.
Eğer a - b pozitif bir değer döndürürse, b önce gelir.
Eğer a - b sıfır döndürürse, a ve b yer değiştirmez (eşit kabul edilirler).*/

//* fill()
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);
//?JavaScript'te fill() metodu, bir diziyi belirli bir değere belirli bir aralıkta doldurmak için kullanılır.
//? Bu metot, dizinin elemanlarını değiştiren değiştirilebilir (mutable) bir metodur.
//? Yani, dizi üzerinde yapılan değişiklikler diziyi doğrudan etkiler.

//?array.fill(value, start, end);
//?value: Dizinin her elemanını dolduracak olan değer.
//?start (isteğe bağlı): Dizinin doldurulmaya başlanacağı başlangıç indeksidir (varsayılan olarak 0).
//?end (isteğe bağlı): Dizinin doldurulacağı son indeksidir (varsayılan olarak dizinin sonuna kadar).

array1.fill(1, 2, 4);
console.log(array1);
array1.fill(-1, 1); //* 1. eleman ve sonrasini -1 yap
console.log(array1);

//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "uc", 2, "3", "bes", "5"];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes(5)); //? true
console.log(sayilar1.includes("5")); //? true
console.log(sayilar1.includes("7")); //? false

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.

console.log(sayilar1.indexOf(2)); //? 2
//2yi arıyor ilk kez2.indiste olduğu için iki döner
console.log(sayilar1.lastIndexOf(2)); //? 5
//dizideki son 2'yi arar. Dizideki son 2, 5. indekste bulunuyor, bu yüzden çıktı 5 olacaktır.
console.log(sayilar1.lastIndexOf(4)); //? -1
//Bu, dizide 4'ü arar. Dizide 4 bulunmadığı için çıktı -1 olacaktır.

//!Ornek: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.

const sayi = prompt("Dizi icin bir deger giriniz");
const index = sayilar1.indexOf(sayi);
index != -1
  ? console.log(
      `Girdiginiz deger dizinin ${index} indisinde bulunuyor`,
      typeof index
    )
  : console.log("Aranilan bulunamadi");

//* join()
//*-----------------------------------------------------------
//?array.join(separator);
//separator (isteğe bağlı): Elemanlar arasına konulacak ayırıcıyı belirler.
// Varsayılan olarak , (virgül) kullanılır.
//? join, dizinin elamanlari birlestirip string hale cevirir.
console.log(sayilar1.join("-"));
console.log(sayilar1.join()); // 3,5...
//?join() metodu diziyi değiştirmez. Orijinal dizi olduğu gibi kalır,

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(sayilar1.toString());

//* slice()
//*-----------------------------------------------------------
const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];
const yeniArabalar = arabalar1.slice(2);
console.log(yeniArabalar, arabalar1);
//belirli bir aralıktaki elemanları alır ve yeni bir dizi döndürür.
//Bu metot, dizinin orijinalini değiştirmez,
// yalnızca belirtilen aralıktaki elemanları kopyalar.
//zaten metot erişim kısımlarındaki özellikler sadece erişir orijinalı kalır.
//mutator metodlarda orijinal değişir.

const yeniArabalar1 = arabalar1.slice(1, 3);
//nereden nereye manasında startIndex, endIndex
//3e kadar alır 3 dahil değil
console.log(yeniArabalar1);

//* concat()
//*-----------------------------------------------------------
//concat() metodu, JavaScript dizilerine yeni elemanlar ekler ve yeni bir dizi döndürür.
//Bu metot, dizilerin birleşmesini sağlar ve orijinal dizileri değiştirmez.
//concat() metodu, dizilere başka diziler, elemanlar, veya birden fazla argüman ekleyebilir.
const yazilar = ["Bugun", "hava", "cok", "guzel"];
const numbersArr = [1, 2, 5, 7];
const combinedArr = yazilar.concat(
  true,
  numbersArr,
  ["aslinda", "cok", "sicak"],
  [["x", "y"]]
);
console.log(combinedArr);

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yasArray = [18, 22, 78, 34, 78, 79, 15];
const check = yasArray.every((yas) => yas >= 18);
check
  ? console.log("Dizideki herkesin yasi 18'den buyuktur")
  : console.log("Dizide 18 yas alti var");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const buyuk80 = yasArray.some((y) => y >= 80);
console.log(buyuk80); //? false

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin
const yasIlk30 = yasArray.find((yas) => yas >= 30);
const yasSon30 = yasArray.findLast((yas) => yas >= 30);
console.log(yasIlk30, yasSon30);

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

const foundIndex = yasArray.findIndex((yas) => yas >= 30);
// `findIndex` metodu, dizideki her elemanı kontrol eder ve koşulu sağlayan ilk elemanın indeksini döndürür
console.log(foundIndex);

//dizide 30 yaşından büyük olan kaç kişi var?
const yas30 = yasArray.filter((yas) => yas >= 30);
console.log(yas30.length);
