// lesson -8 
// Uyvazifa funcsiyda 10 ta masala

// 1 - misol

// function sonKub(n) {
//   return n ** 3;
// }

// console.log(sonKub(3));

//------------------------------------------

// 2 - misol 

// function sonAyrma(a , b) {
//     return a - b ;
//   }
  
//   console.log(sonAyrma(3 , 1));

// ----------------------------------------------

//3 - misol

// function sonQoshilma(a , b) {
//     return a + b ;
//   }
  
//   console.log(sonQoshilma(3 , 7));

//----------------------------------------------------

// 4 - misol 

// function sonDaraja(n) {
//     console.log(n**2);
//     console.log(n**3);
//     console.log(n**4);  
// }

// sonDaraja(2);

//-----------------------------------------

// 5 - misol

// function sonToq(n) {
//     for (let i = 0; i < n; i++) {
//         if (i % 2 == 1) {
//             console.log(i);
//         } 
        
//     }
// }
// sonToq(10);

//----------------------------------------------

// 6 - misol

// function sonJuft(n) {
//     for (let i = 0; i < n; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         } 
        
//     }
// }
// sonJuft(10);

// -----------------------------------------------------

// 7 - misol

// function sonDinInc(n){
//     console.log(--n);
//     console.log(++n);
// }

// sonDinInc(7);

//-------------------------------------------------------

// 8 - misol

// function sonBoluvch(n) {
//     for (let i = 1 ; i < n ; i++) {
//         if(n % i == 0){
//             console.log(i);
//         }
//     }
// }
// sonBoluvch(10);

// --------------------------------------------------------

// 9 - midol

// function amalar(a , b , c) {
//     switch (c){
//         case "+":
//             return a + b ;
//         case "-":
//             return a - b ;
//         case "*":
//             return a * b ;
//         case "/":
//             return a / b ;  
//         case "%":
//             return a % b ;
//         default:
//             return "Invalit operator"
//     }
    
// }

// console.log(amalar(7, 5, "*"));

// ----------------- Function declereshin ---------------------------------

// 10 - misol

// function kara(n) {
//     for(let i = 0; i <= n ; i++){
//         for(let j = 1 ; j <= 10; j++ ){
//             console.log(`${i} x ${j} = ${i*j}`)
//         }
//     }
// }

// kara(5);

//-------------- Function exponeshil -----------------------------------------

//--

// const funcNam = function () {
//     console.log("Lesson - 8");
// }

// funcNam();

// const funcNam = function (a , b) {
//     console.log(a+b);
// }

// funcNam(4,6);

// let test = funcNam ;

// test(28,67)

////--------------Arrow functin -----------------------------------

// const funcNam = (a, b , c) => {
//     if(a>b && b>c){
//         console.log(a+b/c);
//     }else{
//         console.log(a+b+c);
//     }
// };

// funcNam(20,12,4)

//------------------------------------------

let a = prompt("O'zingiz haqingizda malumot kiriting : ");

a = a.split(" ");
console.log(a);
let b = a.length;
console.log(b);