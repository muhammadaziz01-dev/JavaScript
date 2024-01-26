# Lesson -13 Uy vazifa :<p>Array metodlari , Object metodlari va Function turlari</p>


### **1. Array**
- *Array -  bir vaqitning o'zida bir nechta qiymatlarni o'zida saqlashi mumkun bo'lgan obect. uni ikki hil ko'rinishda yaratishlik mumkun : 1- ko'rinishii va eng ko'p qo'lanadiga usul bu ( [ ] ) figurni qavuslar ichida yozishlik , 2- uslibi esa (new) kalit so'zidan foydalanib.* 

<p>M :</p>

```
// 1- misol

let arrayName = ['js' ,'java' , 'go'];

// 2- misol

let arrayName = new Array('js' ,'java' , 'go');

```

### Array'dan element olish
- Array - elementlarini uning indexslaridan foydalanib oloshligimiz mumkun . Array  elementlarining raqamlari ( 0 ) - dan boshlanadi.

<p>M :</p>

```
let arrayName = ['js' ,'java' , 'go'];
console.log(arrayName[0]); // natija ==> js
console.log(arrayName[2]); // natija ==> go
```
### Array'ga  element  qo'shish

-  Array'ga  element  qo'shish uchun " push() " va " ushift() " metodlaridan foydalanishligimiz mumkun . Bunda   " push() " - metodi bizga massivnig ohiridan element qo'shin=b bersa " ushift() " meto'di esa aksincha boshidan element qo'shinb beradi , yaqshiroq tushunishlik uchun misol koramiz. 

<p>M :</p>

```
// push() metodiga misol

let name =  ['js' ,'java'];
name.push('go');
console.log(name); //natija =>  ['js' ,'java' , 'go']

//unshift metodiga misol

let name =  ['java' , 'go'];
name.unshift('js');
console.log(name); //natija =>  ['js' ,'java' , 'go']

```

### Array elemeni ozgartirish

- Array elemeni ozgartirishlik uschun unig index'slaridan foydalansak bo'ladi.

<p>M :</p>

```
let name =  ['js' ,'java' , 'go' ];
console.log(name); //natija =>  ['js' ,'java' , 'go']
name[1]='c++';
console.log(name); //natija =>  ['js' ,'c++' , 'go']

```

### Array elementlarini o'chirish
- Array - elementlarini o'chirishlik uchun "pop( )" va "shift( )"metodlaridan foydalansak bo'ladi , bubda  "pop( )" - metodi massiv ichidagi ohirgi elamentni o'chiradi va o'chirilgan elamentni ham qaytarish imkoni mavjuv bu metodda , "shift( )"- metodi massiv ichidagi boshidagi elamentni o'chiradi va o'chirilgan elamentni ham qaytarish imkoni mavjuv bu metodda.

<p>M :</p>

```
// "pop()" metodi 

const name = ['js' , 'java' , 'go' , 'c++' , 'c#'];
const name2 = name.pop();
console.log(name); // natija => ['js' , 'java' , 'go' , 'c++' ]
console.log(name2); // natija => c#

//----------------------------------------------------------

//"shift()" metodi

const name = ['js' , 'java' , 'go' , 'c++' , 'c#'];
const name2 = name.shift();
console.log(name); // natija => [ 'java' , 'go' , 'c++' , 'c#' ]
console.log(name2); // natija => js
```

### Array uzunligini aniqlash

- Array uzunligini yani uning ichidagi conini aniqlashlik uchun ( lenght ) - hususiyatidan foydalanamiz .

<p>M :</p>

```
const name = ['js' , 'java' , 'go' , 'c++' , 'c#'];
console.log(name.lenght); // natiga ==> 5
```


### concat() Metod
- concat() -metodi ikki yoki undan ortiq arraylarni bitlashtiridshlik uchun ishlatiladi . bu ularni birlashtiradi va natiga qaytaradi .

<p>M :</p>

```
const array1 = [ 1, 4 ];
const array2 = [ 2, 3, 7 , 9 ];
const result = array1.concat(array2);
console.log(result); // natija ==> [1, 4, 2, 3, 7, 9]
```

### indexOf() va lastIndexOf() Metodlari:
- indexOf() belgilangan elementni birinchi marta qaysi indeksda ekanligini qaytaradi, lastIndexOf() esa oxirgi marta qaysi indeksda ekanligini.

<p>M :</p>

```
let fruits = ["apple", "banana", "kiwi", "melon", "banana"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.lastIndexOf("banana")); // 4
```

### find() metodi

- find() - metodi birinchi bo;lib shart bajargan array elamentini qaytaradi , kopincha bu metod array ichida meto'd qaytarishlikda ishlatiladi.


<p>M :</p>

```
const result = [1, 4, 2, 3, 7, 9 ];
const findValue = (n) => n === 2 ;
const findValue2= result.find(findValue);
console.log(findValue2); // natiga  => 2 
// agar shartga tushmasa undefaind qaytaradi misol uchun n === 5 korinishini kiritsak.
```
### splice(start, deleteCount, item1, ..., itemN) Metodi:

- splice() metodi massivda belgilangan indeksdan boshlab ma'lum bir soni o'chiradi va/ya yangi element(lar)ni qo'shadi.

<p>M :</p>

```
let fruits = ["apple", "banana", "orange", "grape"];
fruits.splice(2, 1, "kiwi", "melon");
console.log(fruits); // natija ==>  ["apple", "banana", "kiwi", "melon", "grape"]

```
### slice(start, end) Metodi:
- slice() metodi massivning belgilangan oraliqni ko'chirib olish uchun ishlatiladi.


<p>M :</p>

```
let fruits = ["apple", "banana", "kiwi", "melon", "grape"];
let subArray = fruits.slice(1, 4);
console.log(subArray); //natija ==> ["banana", "kiwi", "melon"]

```
### indexOf() va lastIndexOf() Metodlari:
- indexOf() belgilangan elementni birinchi marta qaysi indeksda ekanligini qaytaradi, lastIndexOf() esa oxirgi marta qaysi indeksda ekanligini.


<p>M :</p>

```
let fruits = ["apple", "banana", "kiwi", "melon", "banana"];
console.log(fruits.indexOf("banana")); //natiga =>  1
console.log(fruits.lastIndexOf("banana")); //natiga =>  4

```

### includes() Metodi:

- includes() metodi massivda berilgan elementni qidiradi va mavjud bo'lsa true, aks holda false qaytaradi.

<p>M :</p>

```
let fruits = ["apple", "banana", "kiwi", "melon"];
console.log(fruits.includes("kiwi")); // true
console.log(fruits.includes("grape")); // false
```
### filter(callback) Metodi:
- filter() metodi berilgan shartlarni qondirib, shartlarni bajaradigan elementlarni qaytaradi.


<p>M :</p>

```
let numbers = [10, 25, 5, 40];
let filteredNumbers = numbers.filter(number => number > 20);
console.log(filteredNumbers); //  natija =>### map(callback) Metodi:  [25, 40]

```

### map(callback) Metodi:

- map() metodi massivning har bir elementi uchun berilgan funksiyani bajarib, yangi bir massivni qaytaradi.


<p>M :</p>

```
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(number => number ** 2);
console.log(squaredNumbers); //natija =>  [1, 4, 9, 16]

```
<hr>

### **2. Object** 
 - **Obyekt :** JavaScript obyektga yo'naltirilgan dasturlash tilidir. Obyekt, ma'lumotlarni saqlash uchun bir qator xususiyatlar (properties) va uslublar (methods)ni o'z ichiga oladi. Masalan, document obyekti brauzerda HTML sahifaning elementlariga kirish imkonini beradi.

```
const card = {
    nom : "S class",
    marca : "MersadesBens",
    tez : 360,
    ras : "8l-10l",
    yil : 2001,
    rang : "seri",
    fullHarc : function(){
         console.log(this.marca + " " + this.nom + " " + this.tez  )
    }

}

card.fullHarc
```
### Object Metodlari:
- **Object.keys():** Obyektning xususiyatlarini (property) ro'yxatini qaytaradi.

```
var myObject = { name: 'John', age: 25, city: 'New York' };
var keys = Object.keys(myObject);
console.log(keys); // ["name", "age", "city"]

```
- **Object.values():** Obyektning xususiyatlarining qiymatlarini ro'yxatini qaytaradi.

```
var myObject = { name: 'John', age: 25, city: 'New York' };
var values = Object.values(myObject);
console.log(values); // ["John", 25, "New York"]
```

- **Object.entries():**
Bu metod obyektni bir nechta massivlarga aylantiradi, har biri xususiyat va uning qiymatini o'z ichiga oladi.

```
var myObject = { name: 'John', age: 25, city: 'New York' };
var entries = Object.entries(myObject);
console.log(entries);
// [["name", "John"], ["age", 25], ["city", "New York"]]
```
- **Object.assign():**
Bu metod obyektlarni birlashtirish (merge) uchun ishlatiladi.

```
var obj1 = { a: 1, b: 2 };
var obj2 = { b: 3, c: 4 };
var mergedObject = Object.assign({}, obj1, obj2);
console.log(mergedObject);
// { a: 1, b: 3, c: 4 }
```

- **hasOwnProperty():**
Bu metod obyektning belgilangan xususiyati borligini tekshiradi.

```
var myObject = { name: 'John', age: 25, city: 'New York' };
console.log(myObject.hasOwnProperty('age')); // true
console.log(myObject.hasOwnProperty('gender')); // false
```
- **delete:**
Bu operator obyektning xususiyatini o'chiradi.

```
var myObject = { name: 'John', age: 25, city: 'New York' };
delete myObject.age;
console.log(myObject); // { name: 'John', city: 'New York' }
```
<hr>

### **3. Functions**
 - **pure va inpure functions**
 - **CallBack function**
 - **Closure function**
 - **Lexical environment**
 - **HOF function**
 - **Currying function**
 - **Pipe function**
 - **Factory function**
 - **Generator function**

### 1. pure va inpuri functions

- **Pure function :** Tashqaridagi globol scoptegi hech narsaga tasir o'tqazmasa (mutatsiya qilmasa ozgaruvchilarni) bunday  funcsiya *Pure function* deb ataladi !

<p>M :</p>

```
function create(a, b) {
    return a + b;
}

create(11, 10);
```
- **Inpure function :**- Bu globol scoptegi narsalarga (o'zgaruvchilarga) ta'sir o'tkazsa , mutatsiya qilsa unda bunday funcsiya  *Inpure function*  deb ataladi.

<p>M :</p>

```
let arr = [];

function addElement(a) {
    arr.push(a);
    return arr;
}

addElement(21);
```

### 2. CallBack function
- *CallBack function* - funcsiyani qiymatiga boshqa funcsiyani argument sifatida berib uni o'sha funcsiyani ichida  chaqirsac (clon qilsak) , bunday funcsiya  CallBack function deb ataladi  

```
function funA(test) {
    console.log("function A" + test);
    // 4s
}

function funB(test) {
    console.log("function B" + test);
    // 3s
}

function funC(test, callback1, callback2) {
    console.log("function C" + test);
    callback1("-2 ");
    callback2("-3");
    //1s
}

funC("-1", funB, funA);
```

###  3. Closure function va Lexical environment

- **Closure functions**- bironbir  funcsiya  hatto ichida yana funcsiya bo'lsa ham globol scoptgi bironbir o'zgaruvchini o'zini ichidagi scobda ishlashif=ga dastup yani ruhsat berishi "Closure functions" deb ataladi.
- **Lexical environment** - harqanday funcsiyani ichida hosil qilingan muhut "Lexical environment" diyiladi.
```
let a = "Hello World";

function closure() {
    // let a = "Goodbye World";

    console.log(a);

    function innerFunc() {
        //let a = "GOOD";
        console.log(a);
    }
    innerFunc();
}

closure();
```

### 4. HOF function
- **HOF -> Higher order functions -> Yuqori darajaklik funcsiya**
- *HOF* - funcsiya ichida funcsiya return qilinsa bunday funcsifa "HOF" funcsiya deb ataladi , yani bir funcsiyani ichida ikkinchi funcsiyani elon qilib uni o'sha birinchi funcsiyani ichida returin qilinisk=ligiga aytiladi.
```
let a = "Hello World";

function closure() {
    // let a = "Goodbye World";

    console.log(a);

    function innerFunc() {
        let a = "GOOD";
        console.log(a);
    }
    innerFunc();
}

closure();
```

### 5. Currying function

```
const a = (a) => {
    a += 10;
    return (b) => {
        b++;
        return (c) => {
            c -= 1;
            return (d) => {
                d *= 5;
                return a + b + c + d;
            };
        };
    };
};

console.log(a(1)(2)(3)(5));
```

### 6. Pipe function
 - *Pipe* -  tasclar ketma ketlikda bajarilishi buni yana quvurli ham deb ataladi bunga sabab funcsiyalar bir biriga ulanishligidir.

```
const task1 = (arg) => arg + 10;
const task2 = (arg) => arg / 2;
const task3 = (arg) => arg * 0.007;

const result = task3(task2(task1(10)));

console.log(result);
```

### 7. Factory function 
- *Factory function* "object" - yani obect qurub beruvchi funcsiya , bini misol tariqasida ko'rsak yanaham yahshiroq tushuniib olamiz.
```
const laptop = (name, brand, color, memory, price) => {
    return {
        name,
        brand,
        color,
        memory,
        price,
        getInfo: function () {
            console.log(
                `Full info: Name:${name} , brand: ${brand} , color: ${color} , memory: ${memory} , price: ${price}`
            );
        },
    };
};

let hpEnevyX360 = laptop("envy x360", "hp", "silver", "512GB SSD", 800);
let macBookProM2 = laptop("MacBook Pro M2", "Apple", "Silver", "512GB SSD", 1350);

macBookProM2.getInfo();
hpEnevyX360.getInfo();
```

### 8. Generator function

- *Generator function* bu returin funcsiyani thuddi teskarisiga ohshab ishlaydi , biz funcsiyani birinchi chaqirganimizda bizga birinchi "**yield**" nomli calit cozga berilgan qiymatni qaytaradi , ikkinchi bor funcsiyamizni chaqirganimizda ikkinchi "**yield**" qiymatni v.h.k!


```
function* signUpTelegram() {
    yield "telefon raqamingizni kiriting";
    yield "SMS kodni kiriting";
    yield "Tabriklaymiz!";
}

const telegram = signUpTelegram();

// console.log(telegram);
console.log(telegram.next().value);
console.log(telegram.next().value);
console.log(telegram.next().value);
console.log(telegram.next().done);
```
