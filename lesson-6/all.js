// let n =10;
// let son = 0;
// function sum(a){
//     for(let i = 1 ; i <= a ; i++){
//         son += i;  
//     }
//     return son
// }
// let b = sum(n)
// console.log(b);


// function yigindi(k){
//     let son = 0;
//     for(let i = 1; i<=k ; i++){
//           son += (k % 10);
//           k = Math.floor(k/2)
//     }
//     return son
// }

// console.log(yigindi(111111));

// let a = 3 ;
// switch(a){
//     case 1:
//     case 6:
//         console.log("qora");
//         break;
//     case 2:   
//     case 7:
//         console.log("qizil");
//         break; 
//     case 3: 
//     case 8:
//         console.log("od");
//         break;
//     default:
//         console.log("hato rang");
//         break
    
// }


// let n = 18;

// for(let i = 1; i <= n ; i++){
//     if(i % 2 == 0){
//         console.log(Math.pow(i,2));
//     }
// }


//----------------------------------------------------------------------------------

//    --------------      Uy vazifalari    -------------

// 1 - misol 

// function power(a,n){
//     let b = a**n;
//     return b
// }

// console.log(power(3,5));

//--------------------------------------

//  2- misol

// function mean(a,b){
//     let c = (a+b)/2;
//     let n = (a+b)**(1/2);
//     // n = Math.floor(n)-1;
//     // n = c-n;
//     console.log(c , n);
// }

// mean(12,48)

//------------------------------------------------

//  3- misol

// function sign(n) {
//     if(n>0){
//         return 1
//     }else if(n<0){
//         return -1
//     }else {
//         return 0
//     }
    
// }
// let x = sign(0);
// console.log(x);

//------------------------------------------------------

// 4- misol

// function numberOfRoots(a , b , c) {
//     let d = (b**2)-(4*a*c);
//     if(d>0){
//         console.log("2 ta")
//     }else if(d< 0){
//         console.log("0 ta")
//     }else{
//         console.log("1 ta")
//     }
// }

// numberOfRoots(1, -6, 9)

//------------------------------------------------------------

// 5 - misol

// function areaCircle(r) {
//     const pi = 3.14
//     let s = pi*(r**2);
//     return s
// }

// let x = areaCircle(35);
// console.log(`Siz kritgan doyiraning yuzasi ${x} terng`);

//--------------------------------------------------------------

// 6 - misol

// function sumRange(a,b) {
//     if(a>b){
//         return 0
//     }else{
//         let s = 0; 
//         for (let i = a; i <= b; i++){
//             s += i;
//         }
//         return s
//     }
// }

// let x = sumRange(8, 10);
// console.log(x);

//------------------------------------------------------------------------

// 7 - misol

// function cale(a ,b, s) {
//     let x = 0
//     switch (s) {
//         case '+':
//             x = a + b;
//             return x
//             break;
//         case '-':
//             x = a - b;
//             return x
//             break;
//         case '*':
//             x = a * b;
//             return x
//             break;
//         case '/':
//             x = a / b;
//             return x
//             break;
        
//     }
// }
// let x = cale(13,7,"*");
// console.log(x);

//-------------------------------------------------------------------------

// 8 -misol

// function isEven(k) {
//     if( k % 2 == 0){
//         return true
//     }else{
//         return false
//     }
    
// }

// let x = isEven(16);
// console.log(x);

//-------------------------------------------------------------

// 9 - misol

// function sortABC(a, b, c) {
//     if(a>b && b>c){
//         console.log(c,b,a);
//     }else if(b>a && a>c){
//         console.log(c,a,b);
//     }else if(b>c && c>a){
//         console.log(a,c,b);
//     }else if(c>a && a>b){
//         console.log(b,a,c);
//     }else if(c>b && b>a){
//         console.log(a,b,c);
//     }
    
// }
// sortABC(13 ,45,52)

 //--------------------------------------------------------

// 10 - misol

// function isPover(k,n) {
//     if(k > 0 && n % k == 0){
//         return true
//     }else{
//         return false
//     }
// }

// let x = isPover(3,12);
// console.log(x);

//--------------------------------------------------------

// 11- misol

// function isPrime(n){
//     let a = 0;
//     for(let i = 1; i <= n; i++){
//        if(n % i == 0){
//           a++
//         }
//     }
//   if(a==2){
//     return true
//   }else{
//     return false
//   }
// }
// let x = isPrime(11);
// console.log(x);

//------------------------------------------------------------------

// 12- misol
