# **Lesson - 7**  <p>*Takrorlash*</p>
## 1. Nullish colisin operator ( " ?? " )

- *Nullish coalescing (??) operatori mantiqiy operator bo‘lib, uning chap tomonidagi operand null yoki undefained bo‘lsa, o‘ng tomoni operandini qaytaradi, aks holda chap tomonidagi operandni qaytaradi.*
```
console.log(null ?? "Yes"); 
// natija bizga -> (Yes) - chiqadi.
```

## 2. Conditonal operators
 1. - if , else
 2. - if , else if , else
 3. -  ternary operator
 4. - switch case
 </br>
 </br>



###   **if else**
- *If...else buyrug'i, agar ko'rsatilgan shart haqiqat bo'lsa, co'dni bajaradi. Agar shart noto'g'ri bo'lsa, ixtiyoriy else bandidagi boshqa co'dni bajariladi.*
<p>Syntax</p>

```
if (condition) {
  statements1
} else {
  statements2
}
```
###   **if , else if , else**
- *"if , else if , else " qachonki biz birnechta shart beradigan bo'lsak quydagi metodan foydalanamiz shartli operatorda. Bunda biz ( else if ) - ni ihtiyori sitaqanimizcha qo'llansak bo'ladi* 
```
let a = +prompt("son kiriting");

if(a==1){
    console.log(`${a} - kun duyshanba`);
}else if(a==2){
    console.log(`${a} - kun siyshanba`);
}else if(a==3){
    console.log(`${a} - kun chorshanba`);
}else if(a==4){
    console.log(`${a} - kun payshanba`);
}else if(a==5){
    console.log(`${a} - kun juma`);
}else if(a==6){
    console.log(`${a} - kun shanba`);
}else if(a==7){
    console.log(`${a} - kun yakshanba`);
}else {
    console.log(`${a} - bunday hafta kuni yo'q`);
}
```
###   **ternary operator**
- *ternary operator - ham ishlash sintaksisti pashti  " if else" operatoriga o'hshash , buni misolda ko'rsak tushunish yanada osonroq .*
```
let cond = 1;
console.log(cond ? "Yas" : "No"); // ==> Yes

// cand true bolsa "yes" ni false bo'lga holda "no" ni chiqarberdi
```

### **Switch case**
- *Switch operatori ifoda qiymatini bir qator holatlar bandlariga mos keladigan ifodani baholaydi va birinchi case bandidan keyin mos qiymatga ega bo'lgan gaplarni break iborasi topilmaguncha bajaradi. Agar iboraning qiymatiga hech qanday registr mos kelmasa, switch iborasining standart bandiga oʻtiladi.*

<p>M:</p>

```
let a = +prompt("Bahoyingizni kiriting");
if(Number.isInteger(a) && a >0 && a < 6){
    switch (a){
        case 1 :
            console.log(`Sizning bahoyingiz(' ${a} ')  yomon `);
            break;
        case 2 :
            console.log(`Sizning bahoyingiz(' ${a} ')  qoniqarsiz `);
            break;
        case 3 :
            console.log(`Sizning bahoyingiz(' ${a} ')  qoniqarli `);
            break;
         case 4 :
            console.log(`Sizning bahoyingiz(' ${a} ')  yahshi `);
            break;
        case 5 :
            console.log(`Sizning bahoyingiz(' ${a} ')  alo `);
            break;   
    }
}else{
    console.log("Xato !");
}
```

## 3. Loop types

- for
- whil
- do while

### for
- *For operatori qavs ichiga olingan va nuqta-vergul bilan ajratilgan uchta ixtiyoriy ifodadan iborat bo‘lgan sikl hosil qiladi, undan keyin esa siklda bajarilishi kerak bo‘lgan bayonot (odatda blok ifodasi).*

<p>M:</p>

```
let n = 9;
for (let i = 0; i < n; i++) {
  console.log(i);
}
// ==> 0,1,2,3,4,5,6,7,8
```

### while

- *while iborasi sinov sharti rost deb baholansa, belgilangan iborani bajaradigan sikl hosil qiladi. Shart bayonotni bajarishdan oldin baholanadi.*

<p>M:</p>

```
let n = 0;

while (n < 3) {
  console.log(n);
  n++;
}


// natija ==> 0,1,2

```
###  do while
- *Do...while operatori test sharti noto'g'ri baholanmaguncha belgilangan operatorni bajaradigan sikl hosil qiladi. Shart bayonot bajarilgandan so'ng baholanadi, natijada ko'rsatilgan bayonot kamida bir marta bajariladi.Buni yana shoshqoloq loopham diyishadi sabab oldin birinch natijani ko'rsatadi kegin chartga tushadi shartni qanotlantirsa sikl takrorlanadi*

<p>M:</p>

```
let n = 0;
let b = 5;
do {
    console.log(n);
    n++
}while (n <= b);

// natija : 0,1,2,3,4,5

```

## 4.  F U N C T I O N S 
 -  *Funksiya - JavaScript dasturlash tilining asoslaridan biri bo'lob uning yordamida malum bir vazifani bajarish mumkun . Funksiya boshqa bir kod qismida chaqirilganda ishga tushadi . Funksiya yordamida kodni qayta ishlatishlik imkoni mavjud yani birmarotaba elon qilib , bir necha joyda ishlatishlik imkoni mavjud , o'hshati lozim bo'lsa SCSS degi mixsend larga qisman o'hshab ketadi .*

<p>Sintactisti quydagicha :</p>

 ```
 function square(number) {
  return number * number;
}

 ```

<p>M:</p>

```
function power(a,n){
    let b = a**n;
    return b
}

console.log(power(3,2));

// natija ==> 9 
```

### **Naned Functions**
 1. Function declaration
 2. Function expession
 3. Arrow function 
 4. IIFE function  
 5. PIPE function 
 6. CURRYING function 
 7. GENRATOR function 
 8. FACTORY function 
 9. CONTARACTITOR function 
 10. ....
 11. ....
 12. ....
 13. ....
 14. ....
 15. ....

 Bularni ichida eng asosilari 3 tasi ular :
 1. Function declaration
 2. Function expession
 3. Arrow function 

