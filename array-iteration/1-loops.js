//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log("******* LOOPS IN ARRAYS ******");

//?-------------- ÖRNEK -------------------
const dizi = [-5, 15, 22, -4, 45, 78];
const negatifler = [];
const pozitifler = [];

const dizelereAyır = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);
    } else {
      pozitifler.push(n[i]);
    }
  }
};
dizelereAyır(dizi);
console.log("Negatifler: ", negatifler);
console.log("Pozitifler: ", pozitifler);
console.log(dizi);

//?-------------- ÖRNEK -------------------
//? Dizideki notlarin ortalamasini hesaplayiniz.
const notlar = [55, 77, 23, 89, 100];

let toplam = 0;

for (let i = 0; i < notlar.length; i++) {
  toplam += notlar[i];
}

console.log("ORTALAMA:", toplam / notlar.length);

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const findStudents = (arr, search) => {
  //findStudents fonksiyonu iki parametre alır:
  //arr: İsimlerin bulunduğu dizi.
  //search: Aranacak isim.
  let counter = 0;
  for (let i in arr) {
    if (search === arr[i]) {
      counter++;
    }
    //for...in döngüsü, dizinin her bir elemanını kontrol eder.
    //Eğer search değeri dizinin elemanlarından birine eşitse, counter bir artırılır.
  }
  if (!counter) {
    return `${search} can not be found`;
  } else {
    return `${search} found ${counter} times`;
  }
};

const isim = prompt("Please enter a name").toLowerCase();
console.log(findStudents(students, isim));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const findStudentsOf = (arr, search) => {
  let counter = 0;
  for (let item of arr) {
    //for...of, dizideki elemanlar üzerinde iterasyon yapar (indekslerle değil).
    //? Ternary
    // search === item ? counter++ : null;

    //! Short-circuit yöntemi: && => kosul dogru (true) ise ifadeyi calisitir.
    search === item && counter++;
    //Eğer koşul true ise, &&'den sonraki ifade çalıştırılır.

    //! Short-circuit yöntemi: || => kosul yanlis (false) ise ifadeyi çalıştır.
    // search === item || counter++
    //Eğer koşul false olsaydı, || sonrasındaki ifade çalıştırılırdı.
  }

  return !counter
    ? //Eğer counter sıfırsa (aranan eleman hiç bulunmamışsa), bu true döner.
      `${search} can not be found`
    : `${search} found ${counter} times`;
  //
};

const studentName = prompt("Please enter a name").toLowerCase();
console.log(findStudentsOf(students, studentName));

/* for...in Döngüsü
Nesnelerde Kullanım İçin Uygundur: for...in, bir nesnenin özellik adları (property keys) üzerinde iterasyon yapar.
Dizilerde İndekslerle Çalışır: Bir dizi üzerinde çalıştırıldığında, indeksleri döndürür, elemanları değil.
Tüm Enumerable Özelliklerde Çalışır: Nesnenin kendine ait (own) ve prototip zincirindeki özellikleri dahil olmak üzere tüm enumerable (iterable) özelliklerde çalışır.
/* for...of Döngüsü
İterasyon Yapılabilir (Iterable) Yapılar İçin Uygundur: for...of, diziler, Set'ler, Map'ler, String'ler, NodeList'ler gibi iterable yapılar üzerinde kullanılır.
Elemanlara Odaklanır: Bir dizinin elemanları üzerinde iterasyon yapar, indekslerle değil.
Nesnelerde Kullanılamaz: Standart bir nesne ({}) iterable olmadığı için, for...of doğrudan bir nesnede çalışmaz.
*/

//İterasyon Yapmak Nedir?
//İterasyon, bir veri yapısının her bir elemanını tek tek işlemden geçirme işlemidir.
//Bu, genellikle döngüler kullanarak yapılır.
//Bir veri yapısındaki her bir elemanı incelemek, üzerinde işlem yapmak veya onları bir koşula göre filtrelemek gibi işlemleri ifade eder.
