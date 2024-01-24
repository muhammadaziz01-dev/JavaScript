// 1 - misol

// const createHelloWorld = function(){
//     return "Hello World";
// }

// console.log(createHelloWorld());

//--------------------------------------------

// 2 - misol

// const createCounter = (n) =>{
//     return n++;
// }

// console.log(createCounter(6));

//-------------------------------------------------

// 3 - misol

// let praducts = [
//     {
//         name : "Apelsin",
//         price : 10000,
       
//     },
//     {
//         name : "Olma",
//         price : 12000,
//         wight : 1,
//     },
//     {
//         name : "Mandalin",
//         price : 8000,
//     },
//     {
//         name : "Banan",
//         price : 20000,
//     },
// ];
// let summa = 0;
// for(let i = 0; i<praducts.length ; i++ ){
//     summa += praducts[i].price;
// }
// console.log(summa);

//-----------------------------------------------------------

// 4 - misol

// const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       alreadyReafunction: false,
//     },
//     {
//       title: "Dunyo ishlari",
//       author: "O'tkir Hoshimov",
//       alreadyRead: true,
//     },
//     {
//       title: "Vaqtning qadri",
//       author: "Abdulfattoh Abu G'udda",
//       alreadyRead: false,
//     },
// ];
// let book = "";
// let after ="";
// for(let i = 0 ; i<=books.length; i++){
//     if(books[i].alreadyRead){
//         console.log(`${books[i].author} ning "${books[i].title}" kitobi o'qilgan;`);
//     }else{
//         console.log(`${books[i].author} ning "${books[i].title}" kitobi o'qilmagan;`);
//     }
// }

//---------------------------------------------------------------------------------------------

//5 - misol 

// function nabers (n){
//     let arr = [];
//     for(let i = 0 ; i <= n; i++){
//         arr.push(i**2)
//         // keys += arr[i]
//     }
    
//     let naber = { ...arr}
//     let keys = 0;
//     let values = 0;
//     for(let j = 0 ; j <= arr.length-1; j++){
//         keys += j
//         values += arr[j]
//     }
//     console.log(naber);
//     console.log(`Objectning  keyslarinig yigindisi ` + keys);
//     console.log(`Objectning  valueslarining yigindisi ` + values );
// }

// nabers(10);

//------------------------------------------------------------------------------------------

// 6- misol


//   function calcaAge(yil , ism) {
//     const age = 2024 - yil;
//     console.log(` ${ism} siz ${age} yoshga kirdingiz`);
// //     return age ;
//    }

//   const age = calcaAge(2002 ,"Muhammadaziz");
//   age();

// ------------------------------------------------------------

// 7- misol 

//Kalitlari 0 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)

// function nabers (n){
//     let arr = [];
    
//     for(let i = 0 ; i <= n; i++){
//         arr.push(i**2)
//     }
    
//     let naber = { ...arr}
//     return naber ;
// }

// console.log(nabers(10));

//---------------------------------------------------------------------------------------------

