// if else , shartli operatorlar bo'yich misollar

// 1 - misol 

// let a = +prompt("Ihtiyori butun so kiriting :");
// if(Number.isInteger(a) && a > 0){
//     console.log( a + 1);
// }else if(Number.isInteger(a) && a < 0){
//     console.log( a - 2);
// }else{
//     console.log("Siz kiritga son butu emas janob , iltimos butun son kiritim=ng !");
// }

// -------------------------------------------------------------------------------------------

// 2 -misol

// let a = +prompt("Ihtiyori butun so kiriting :");
// if(Number.isInteger(a) && a > 0){
//     console.log( a + 1);
// }else if(Number.isInteger(a) && a < 0){
//     console.log( a - 2);
// }else if(Number.isInteger(a) && a == 0){
//     console.log( a + 10 );
// }else{
//     console.log("Siz kiritga son butu emas janob , iltimos butun son kiritim=ng !");
// }

//-----------------------------------------------------------------------------------------------------

// 3--misol

// let a = +prompt("a sonini kiriting ");
// let b = +prompt("b sonini kiriting ");
// let c = +prompt("c sonini kiriting ");
// let s = 0;
// if(Number.isInteger(a)){
//     s++ ;
// }
// if(Number.isInteger(b)){
//     s++ ;
// }
// if(Number.isInteger(c)){
//     s++ ;
// }
// if(s == 0){
//     console.log("butun son yoq")
// }
// console.log(s);

//--------------------------------------------------------------------------------------

// 4 -misol

// let a = +prompt("Birinchi sonni kriting :");
// let b = +prompt("Ikkinchi isonni kriting :");
// if (Number.isInteger(a) && Number.isInteger(b)){
//     if (a > b){
//         console.log(`( ${a} ) birinchi son katta`);  
//     }else{
//         console.log(`( ${b} ) ikkinchi son katta`);
//     }
// }else{
//     console.log("Butun son kiriting !");
// }

//-------------------------------------------------------------------------------------

// 5 - misol

// let a = +prompt("Birinchi sonni kriting :");
// let b = +prompt("Ikkinchi isonni kriting :");
// if (Number.isInteger(a) && Number.isInteger(b)){
//     if (a < b){
//         console.log(`( ${a} ) 1 - son kichik`);  
//     }else{
//         console.log(`( ${b} ) 2 - son lichik`);
//     }
// }else{
//     console.log("Butun son kiriting !");
// }

//-------------------------------------------------------------------------------------

// 6 - misol

// let a = +prompt("Birinchi sonni kriting :");
// let b = +prompt("Ikkinchi isonni kriting :");
// if (Number.isInteger(a) && Number.isInteger(b)){
//     if (a > b){
//         console.log(`( ${a} ) 1 - son katta`); 
//         console.log(`( ${b} ) 2 - son kichk`); 
//     }else{
//         console.log(`( ${b} ) 2 - son katta`); 
//         console.log(`( ${a} ) 1 - son kichk`);
//     }
// }else{
//     console.log("Butun son kiriting !");
// }

//---------------------------------------------------------------------------------------

// 7 - misol

// let a = +prompt("A sonni kriting :");
// let b = +prompt("B sonni kriting :");
// if(a < b){
//     console.log(a + " A soni");
//     console.log(b + " B soni");
// }else if (a > b){
//     a = b - a;
//     console.log(a + " A soni");
//     console.log(b + " B soni");
// }else{
//     console.log(`${a} va ${b} barobar`);
// }

//=------------------------------------------------------------------------------

// 8 - misol

// let a = +prompt("A sonni kriting :");
// let b = +prompt("B sonni kriting :");
// if(Number.isInteger(a) && Number.isInteger(b)){
//     if (a != b){
//         a += b;
//         b = a;
//         console.log(a + " A soni");
//         console.log(b + " B soni");
//     }else {
//         a = 0;
//         b = 0;
//         console.log(a + " A soni");
//         console.log(b + " B soni");
//     }
// }else{
//     console.log("Butun son kiriting !")
// }

//----------------------------------------------------------------------------------

// 9 - misol

// let a = +prompt("A sonni kriting :");
// let b = +prompt("B sonni kriting :");
// if(Number.isInteger(a) && Number.isInteger(b)){
//     if (a > b){
//         b = a;
//         console.log(a + " A soni");
//         console.log(b + " B soni");
//     }else if(a<b){
//         a = b;
//         console.log(a + " A soni");
//         console.log(b + " B soni");
//     }else {
//         a = 0;
//         b = 0;
//         console.log(a + " A soni");
//         console.log(b + " B soni");
//     }
// }else{
//     console.log("Butun son kiriting !")
// }

//-------------------------------------------------------------------------------------------------

// 10 - misol

// let a = +prompt("1 - sonni kriting :");
// let b = +prompt("2 - sonni kriting :");
// let c = +prompt("3 - sonni kriting :");
// if(a > b && b > c){
//     console.log(`( ${c} ) - eng kichik son`);
// }else if(b > a && a < c){
//     console.log(`( ${a} ) - eng kichik son`);
// }else if(b < a && b < c){
//     console.log(`( ${b} ) - eng kichik son`);
// }else{
//     console.log("kiritilgan sonlar shartga tushmaydi , uchala son ham farqli bo'lsin bir biridan !!")
// }

//---------------------------------------------------------------------------------------------------------

// 11 - misol

// let a = +prompt("1 - sonni kriting :");
// let b = +prompt("2 - sonni kriting :");
// let c = +prompt("3 - sonni kriting :");
// if(a > b && b > c ){
//     console.log(`( ${b} ) - o'rtasidagi son`);
// }else if(a < b && a > c){
//     console.log(`( ${a} ) - o'rtasidagi son`);
// }else if(a > c && c > b){
//     console.log(`( ${c} ) - o'rtasidagi son`);
// }else if(a < b && b < c ){
//     console.log(`( ${b} ) - o'rtasidagi son`);
// }else if(a < b && a < c){
//     console.log(`( ${a} ) - o'rtasidagi son`);
// }else{
//     console.log("kiritilgan sonlar shartga tushmaydi , uchala son ham farqli bo'lsin bir biridan !!")
// }

//---------------------------------------------------------------------------------------------------------------

// 12- misol

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchunchi sonni kiriting");

// if (a > b && b > c){
//     console.log(a);
//     console.log(b);
// }else if(a < b && b < c){
//     console.log(c);
//     console.log(b);
// }else if(a > c && b < c){
//     console.log(a);
//     console.log(c);
// }else{
//     konsole.log("hato!")
// }

// -------------------------------------------------------------------

// 13-misol

// let a = +prompt("A sonni kiriting");
// let b = +prompt("B sonni kiriting");
// let c = +prompt("C sonni kiriting");

// if (a < b && b < c ){
//     console.log(a * 2);
//     console.log(b * 2);
//     console.log(c * 2);
// }else{
//     console.log(a - (a * 2));
//     console.log(b - (b *2));
//     console.log(c - (c * 2));
// }

//----------------------------------------------------------------------------------

// 14 - misol

// let a = +prompt("A sonni kiriting");
// let b = +prompt("B sonni kiriting");
// let c = +prompt("C sonni kiriting");

// if (a < b && b < c ){
//     console.log(a * 2);
//     console.log(b * 2);
//     console.log(c * 2);
// }else if (a > b && b > c){
//     console.log(a * 2);
//     console.log(b * 2);
//     console.log(c * 2);
// }else{
//     console.log(a - (a * 2));
//     console.log(b - (b *2));
//     console.log(c - (c * 2));
// }

//------------------------------------------------------------------------------------------

// 15- misol

// let a = +prompt("Birinchi sonni kiriting");
// let b = +prompt("Ikkinchi sonni kiriting");
// let c = +prompt("Uchunchi sonni kiriting");
// let d = +prompt("To'rtinchi sonni kiriting");

// if(Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c) && Number.isInteger(d)){
//     if(a == b && b == c && c!=d){
//         console.log(`( ${d} ) --> 4- son teng emas !`)
//     }else if(a == b && b == d && c!=d){
//         console.log(`( ${c} ) --> 3- son teng emas !`)
//     } else if(a == c && b != c && c==d){
//         console.log(`( ${b} ) --> 2- son teng emas !`)
//     }else if(a != b && b == c && c==d){
//         console.log(`( ${a} ) --> 1- son teng emas !`)
//     } else if(a == b && b == d && c == d){
//         console.log(`Siz kiritga barcha sonlar teng!`)
//     } else{
//         console.log("siz kiritgan sonlar shartga tushmadi , kamida 3 ta son teng bo'lishligi kerak !");
//     } 
// }else{
//     console.log("siz kiritgan sonlar butun son emas , iltimos butun son kiriting !");
// }

//------------------------------------------------------------------------------------------------------

// 16 - misol

// let x = +prompt("Son kiriting");
// if( x <= 0){
//     console.log(x - (x * -2));
// }else if (x > 0 && x < 2){
//     console.log(x ** 2);
// }else if (x >= 2){
//     x = 4 ;
//     console.log(x);
// }else{
//     console.log("Siz kiritgan son shartga tushmadi , boshqa son kiriting !");
// }

//-----------------------------------------------------------------------

// 17 -misol

// let a = +prompt("Ihtiyoriy yil kiriting");
// if (Number.isInteger(a) && a > 0){
//     let b = a / 4;
//     b = Number.parseInt(b);
//     console.log("siz kiritgan yilda " + (b + (a * 365) ) + " kun bor !" );
// }else{
//     console.log("Janob kiritgan yilingiz hato !");
// }

//-----------------------------------------------------------------------------------------

// 18 - misol

// let x = +prompt("3 honali son kiriting");
// if (x < 1000 && x > 0 && Number.isInteger(x)){
//     if(x % 2 == 0 && x / 10 > 10){
//         console.log(`(${x}) - siz kiritgan son uch honalik juft son !`);
//     }else if(x % 2 != 0 && x / 10 > 10){
//         console.log(`(${x}) - siz kiritgan son uch honalik tog son !`);
//     }else if(x % 2 != 0 && x / 10 < 10){
//         console.log(`(${x}) - siz kiritgan son ikki honalik tog son !`);
//     }else if(x % 2 == 0 && x / 10 < 10){
//         console.log(`(${x}) - siz kiritgan son ikki honalik juft son !`);
//     }else{
//         console.log("Siz kiritgan son hato")
//     }
// }else{
//     console.log("Siz kiritgan son shartga tushmaydi , janob 3 honali son kiriting !")
// }

//--------------------------------------------------------------------------------------------------

// 19 - misol  switvh-1

// let a = +prompt("Bahoyingizni kiriting");
// if(Number.isInteger(a) && a >0 && a < 6){
//     switch (a){
//         case 1 :
//             console.log(`Sizning bahoyingiz(' ${a} ')  yomon `);
//             break;
//         case 2 :
//             console.log(`Sizning bahoyingiz(' ${a} ')  qoniqarsiz `);
//             break;
//         case 3 :
//             console.log(`Sizning bahoyingiz(' ${a} ')  qoniqarli `);
//             break;
//          case 4 :
//             console.log(`Sizning bahoyingiz(' ${a} ')  yahshi `);
//             break;
//         case 5 :
//             console.log(`Sizning bahoyingiz(' ${a} ')  alo `);
//             break;   
//     }
// }else{
//     console.log("Xato !");
// }

//---------------------------------------------------------------------------------------------------

// 19 - misol  switvh-2

// let a = +prompt("Oy raqamini kiriting :");
// if(Number.isInteger(a) && a > 0 && a < 13){
//     switch(a){
//         case 12:
//         case 1 :
//         case 2 :
//             console.log(`${a} - oy qish fasli`);
//             break;
//         case 3 :
//         case 4 :
//         case 5 :
//             console.log(`${a} - oy bahor fasli`);
//             break;
//         case 6 :
//         case 7 :
//         case 8 :
//             console.log(`${a} - oy yoz fasli`);
//             break;
//         case 9 :
//         case 10 :
//         case 11 :
//             console.log(`${a} - oy kuz fasli`);
//             break;    
//     }
// }else{
//     console.log(`${a} bunday oy kuni mavjud emas !`);
// }

//------------------------------------------------------------------------------

// 20 - misol   switvh-3

// let a = +prompt("Oy raqamini kiriting :");
// if(Number.isInteger(a) && a > 0 && a < 13){
//     switch (a){
//         case 1 :
//         case 3 :
//         case 5 :
//         case 7 :
//         case 8 :
//         case 10 :
//         case 12 :          
//             console.log(`${a} - oyda 31 kun bor`);
//             break;
//         case 2 :
//             console.log(`${a} - oyda 29 kun bor`);
//             break; 
//         case 4 :
//         case 6 :
//         case 9 :
//         case 11 :           
//             console.log(`${a} - oyda 30 kun bor`);
//             break;       
//     }
// }else{
//     console.log(`(' ${a} ') bunday oy mavjut emas !`);
// }

//---------------------------------------------------------------------------------------

// 21 -misol    switvh-4
