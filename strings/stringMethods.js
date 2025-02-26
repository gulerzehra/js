// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");
//!1- Klasik yöntem (String Literals) ile string tanimlanirsa bu string
//! bir primitive degiskendir.
//String literali, bir stringi doğrudan tırnak işaretleriyle tanımlamaktır:
//String literal ile tanımlanan stringler, primitive (ilkel) veri tipidir.
let str1 = "ZEhrA";
//Char => C, l, a,....
const str2 = " Hello";
const str3 = " Frontend Developer ";
console.log(str1, typeof str1);
//?şu iki şeyi çıktı olarak verir:
//?str1'in değeri ("Merhaba")
//?str1'in veri türü ("string")
console.log(str1.toLowerCase());

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.
//? Ek Açıklama için : https://javascript.info/primitives-methods

const sayi = 5;
const str5 = str1 + str2 + str3 + sayi; // Concatination
console.log(str5, typeof str5);

//* ---------------------------------------------------
//*  concat() - immutable
//* ---------------------------------------------------

console.log(str1.concat(str2)); //* Orjinal degerler bozulmaz
console.log(str1, str2);

//? Assigning ile degiskenin degeri degistirilebilir.
str1 = str1.concat(str3, " Path");
console.log(str1);

//* ----------------------------------------------------------
//* toUpperCase(), toLowerCase() --immutable
//* ----------------------------------------------------------

const myName = "Noah Adams";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

let yourName = "ismet";
// yourName = yourName.toUpperCase();
// yourName = yourName.toLocaleUpperCase('tr');
yourName = yourName.toLocaleUpperCase();
console.log(yourName);

//! ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu
//! donduren fonksiyonu yaziniz.

const esitMi = (str1, str2) =>
  str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    ? `${str1} ile ${str2} Esittir`
    : `${str1} ile ${str2} Esit degildir`;

console.log(esitMi("MerHaba", "MERHABA"));
console.log(esitMi("Hello", "Hell"));

//* ----------------------------------------------------------
//* localeCompare()
//* ----------------------------------------------------------
const a = "réservé"; // with accents, lowercase
const b = "RESERVE"; // no accents, uppercase
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
//!localeCompare, iki string'i belirtilen dil kurallarına ve duyarlılık ayarlarına göre karşılaştırır.
//Dönüş değeri:
//-1: İlk string, ikinci string'den önce gelir.
//1: İlk string, ikinci string'den sonra gelir.
//0: İki string eşit kabul edilir.

//Parametreler:
//İlk parametre: Karşılaştırılacak string (b).
//İkinci parametre: Dil kodu ("en" - İngilizce).
//Üçüncü parametre: Seçenekler ({ sensitivity: "base" }).

//yukarıda base ayarı sebebi ile aksanlar dikkate alınmaz

//? 'BASE: a ≠ b, a = á, a = A'
//? 'ACCENT: a ≠ b, a ≠ á, a = A'
//Aksan dikkate alınır: "réservé" ≠ "reserve". Sonuç: 1 veya -1.
//? 'CASE: a ≠ b, a = á, a ≠ A'
//Büyük/küçük harf dikkate alınır: "réservé" ≠ "RESERVE".Sonuç: 1 veya -1.

const str6 = "Full Stack Path and DS path";
console.log(str6.charAt(5)); //* S
console.log(str6.charAt(4)); //* " "
console.log(str6.charAt()); //* F (ilk indistekini dondurur)
console.log(str6.charAt(14)); //* h
console.log(str6.charAt(100)); //* "" (bos string)

//! lenght bir property (objenin degiskenidir) dir ve string'in
//! karakter sayisini tutar.
console.log(str6.length); //* 27

//* String son harfini ogrenmek istersek
console.log(str6.charAt(str6.length - 1)); //* 27 eleman var indisine göre yazdırdığımız için 26yı yazdırırız.

//* ----------------------------------------------------------
//* includes() - case sentive
//* ----------------------------------------------------------
const word = "To be or not to be, that is the question";

console.log(word.includes("to be")); //? true
console.log(word.includes("That")); //? false
console.log(word.includes("")); //? true
console.log(word.includes("to be", 14)); //? false
console.log(word.includes("to be", 13)); //? true

//! NOT: case insentive kullanmak icin str baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.
//Case-insensitive karşılaştırma yapmak, iki string'i büyük veya küçük harf olarak aynı kabul etmek demektir.

//* ----------------------------------------------------------
//* indexOf() , lastIndexOf() - case sensitive
//* ----------------------------------------------------------

const toBe = word.indexOf("or");
console.log(toBe); //? 6
//indexOf("or"): "or" alt string'inin ilk bulunduğu konumu döndürür.
console.log(word.indexOf("be")); //? 3
console.log(word.lastIndexOf("be")); //? 16
//lastIndexOf("be"): "be" alt string'inin son bulunduğu konumu döndürür.
console.log(word.lastIndexOf("BE")); //? -1
//lastIndexOf("BE"): "BE" alt string'ini büyük harflerle arar ve bulunamazsa -1 döner.

//* ----------------------------------------------------------
//* search()
//* ----------------------------------------------------------
//?JavaScript'in String nesnesindeki search() metodu, bir string içinde belirli bir düzenli ifadeyi arar
//?ve bu ifadenin string içinde ilk geçtiği yerin başlangıç indeksini döner. Eğer düzenli ifade string içinde bulunamazsa, -1 döner.

const buyukHarf = /[A-Z]/;
const nokta = /[.]/;
const virgul = /[,]/;
console.log(word.search(buyukHarf)); //? ilk buyuk harfin indeksi 0
console.log(word.search(virgul)); //?  18
console.log(word.search(nokta)); //? -1

//* ----------------------------------------------------------
//* startsWidth() , endsWith() - case sensitive
//* ----------------------------------------------------------
let word2 = "Sen gulunce guller acar gul pembe!";
console.log(new String(word2));
console.log(word2.startsWith("Sen")); //? true
console.log(word2.startsWith("gulunce")); //? false
console.log(word2.startsWith("gulunce", 4)); //? true
console.log(word2.endsWith("!")); //? true
console.log(word2.endsWith("acar", 23)); //? true

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------
let oku = "Oku Baban gibi, saf olma, saf olma";
// console.log(oku.replace("saf olma", "basarili ol"));
oku = oku.replace("saf olma", "basarili ol");
// oku = oku.replace(/saf olma/gi, "basarili ol");
console.log(oku);

oku = oku.replace(/BASARILI/gi, "Zengin");
//! /saf olma/: "saf olma" alt metnini arayan bir düzenli ifade.
//? g: Tüm eşleşmeleri bulmak için global bayrak.
//? i: Büyük/küçük harf duyarlılığını kapatmak için kullanılan bayrak.
console.log(oku);
//? JavaScript'te replace() metodu düz bir string veya düzenli ifade (RegExp) kullanılarak çalışabilir. Ancak, düz string veya global (g) bayrağı olmayan bir RegExp ile kullanıldığında yalnızca ilk eşleşmeyi değiştirir.

//* ----------------------------------------------------------
//*  replaceAll() --immutable
//* ----------------------------------------------------------
let degistir = "daglar daglar yol ver gecem..";
degistir = degistir.replaceAll("daglar", "Dağlar");
console.log(degistir);

//?Regex de kullanilabilir.
let degistir2 =
  "No woman, no cry" +
  " No woman, no cry, eh, yeah" +
  " Little darling, don't shed no tears" +
  " No woman, no cry, eh";

console.log(degistir2.replaceAll(/no/gi, "Hayir"));

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------
const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";

const sliced = veysel.slice(33);
console.log(sliced, typeof sliced); //? gunduz gece..

console.log(veysel.slice(17, 30)); //? dayim yuruyor.
console.log(veysel.slice(-10)); //? duz gece..
console.log(veysel.slice(-23, -19)); //? yuru

console.log(veysel.substring(17, 30)); //? dayim yuruyor
//! negatif indeks substring ile kullanilamaz.
console.log(veysel.substring(-10)); //? Uzun ince bir yoldayim yuruyorum gunduz gece..

//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------
const tarkan = "Gel gunduzle gece olalim";
const splited = tarkan.split(" ");
console.log(splited, typeof splited); //! Bosluklara göre ayirarak Array'e cevirdi.

const chars = tarkan.split("");

/*separator (Ayırıcı):

String'i hangi karakter(ler) veya desen(ler) ile bölmek istediğini belirtir.
Eğer boş string ("") verilirse, her bir karakter ayrı bir eleman olarak alınır.
Eğer belirtilmezse, string bir bütün olarak döndürülür.
limit (Opsiyonel):

Dönüş dizisinin maksimum eleman sayısını belirler.
Eğer belirtilmezse, tüm ayrılan elemanlar diziye eklenir. */

//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------
//?trim() metodu, bir string'in başındaki ve sonundaki boşluk karakterlerini kaldırır. Bu işlem, orijinal string üzerinde değişiklik yapmaz,
//?bunun yerine temizlenmiş yeni bir string döndürür.
const ramazan = "    Hoş geldin ya şehri Ramazan     ";
console.log(ramazan);
console.log(ramazan.length); // 36
console.log(ramazan.trim());
console.log(ramazan.trim().length); //27

//örnek : tarkan string'indeki kelimelerin sayisini donduren bir fonksiyon yaziniz.
const kelimeSayisi = (str) => str.split(" ").length;
console.log(kelimeSayisi(tarkan));
