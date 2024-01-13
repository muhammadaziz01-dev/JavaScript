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

// if( a , b , c ){
//     a = 
// }