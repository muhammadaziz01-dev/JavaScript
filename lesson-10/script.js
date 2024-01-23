// Array ga oyid misollar

// 1- misol

// function nabbers(n) {
//     let arr = [];
//     for(let i = 0; i <= n; i++){
//         arr.push(i);
//     }
//     return arr ;
// } 

// let naber = nabbers(10);
// console.log(naber);

//------------------------------------------------------

// 2 - misol

// function nDaraja (n){
//     let arr = [];
//     for(let i = 0; i<= n; i++){
//         arr.push( 2 ** i);
//     }
//     return arr;
// }

// let daraja = nDaraja(10);
// console.log(daraja);

// -----------------------------------------------

// 3 - misol

// function qiymat (n){
//     let arr = [];
//     let sum = 0; 
//     for(let i = 0; i<= n; i++){
//         arr.push(i);
//         sum+=i;
//     }
//     return `[${arr}] massivning qiymatlarining yigindisi ${sum} ga  ten`;
// }

// let resalt = qiymat(15);
// console.log(resalt);

// --------------------------------------------------------

// 4 -misol

// function togYigindi (n){
//     let arr = [];
//     let toq = 0;
//     let juft = 0
//     for(let i = 0; i< n ; i++){
//         arr.push(i*10);
//         if(i % 2 != 0){
//             toq += arr[i];
//         }else
//             juft-=arr[i];
//     }
//     console.log(arr);
//     console.log(`tog indexstegi qiymatlarnig yigindisi ${toq}`);
//     console.log(`juft indexstegi qiymatlarnig ayirmasi ${juft}`);
// }

// togYigindi(10);

//---------------------------------------------------------------------

// 5- misol

// function yigindi (n){
//     let arr = [];
//     let sum = 0; 
//     for (let i = 0; i < n ; i++ ){
//         arr[i]= +prompt(`${i} - indexs uchun ucun son kiriting`);
//         sum += arr[i];
//     }
//     console.log(arr);
//     console.log(sum);
// }
// yigindi(10);

// 6 - miosol

// function namber (n){
//     let arr = [];
//     for (let i = n; i >= 0 ; i--){
//         arr.push(i);
//     }
//     return arr;
// }

// let rsalt = namber(10);
// console.log(rsalt);

// ---------------------------------------------------

// 7 - misol
// let a = [];
// let b = [];
// let c = [];

// a["ism"] = "Kamol";
// a["yosh"] = 22;
// b["ism"] = "Abror";
// b["yosh"] = 17;
// c["ism"] = "Sobir";
// c["yosh"] = 25;

// let farqAb = Math.abs(a["yosh"]-b["yosh"]);
// let farqAc = Math.abs(a["yosh"]-c["yosh"]);
// let farqBc = Math.abs(b["yosh"]-c["yosh"]);

// console.log(${a["ism"]} va ${b["ism"]}ning yosh farqi ${farqAb} yosh);
// console.log(${a["ism"]} va ${c["ism"]}ning yosh farqi ${farqAc} yosh);
// console.log(${b["ism"]} va ${c["ism"]}ning yosh farqi ${farqBc} yosh);





//-----------------------------------------------------

// 8- misol 

// function naber(n) {
//     let arr =[];
//     let sum = 0;
//     for(let i = 0; i <= n; i++){
//         arr.push(i);
//     }
//     let k = arr[1];
//     let l = arr.length-2;
//     for (k ; k <= l; k++ ){
//         sum += arr[k]
//     }
//     console.log(arr);
//     console.log(sum);
    
// }

// naber(6);

//---------------------------------------------

// 9 - misol

// function naber(n) {
//     let arr = [];
//     let j = 0;
//     for(let i = 0; i <= n ; i++){
//         arr.push("M" + i);
//         if(i % 2 == 0){
//             j = i ;
//         }
//     }
//     console.log(arr);
//     console.log(`[${arr}] array ning juft indekislari ichida en kattasi ${j}-indeks`);
    
// }
// naber(20);

//-------------------------------------------------------------------------------

// 10 - misol

// function naber(n) {
//     let arr = [];
//     let j = 0;
//     for(let i = 0; i <= n ; i++){
//         arr.push("M" + i);
//         if(i == arr[0]){
//             j = i ;
//         }
//     }
//     console.log(arr);
//     console.log(`[${arr}] array ning juft indekislari ichida en kichigi ${j}-indeks`);
    
// }
// naber(5);

//----------------------------------------------------------------------------------

// 11 - misol

// function naber(n) {
//     let arr = [];
//     let j = 0;
//     for(let i = 0; i <= n ; i++){
//         arr.push("M" + i);
//         if(i % 2 == 1){
//             j = i ;
//         }
//     }
//     console.log(arr);
//     console.log(`[${arr}] array ning toq indekslari ichida en kattasi ${j}-indeks`);
    
// }
// naber(10);

//---------------------------------------------------------------

// 12 - misol 

// function naber(n) {
//     let arr = [];
//     let j = 0;
//     for(let i = 0 ; i <= n; i++){
//         arr.push(i*10);
//         j += arr[i];
//     }

//     console.log(arr);
//     console.log(`[${arr}] array ning qiymatlarining "${j}" orta arimetigi ${j / n} ga teng`);
// }

// naber(3);

//-------------------------------------------------------------------

// 13 -misol

//faqat toq indekslarni chiqarun=mch massiv

// function naber(n) {
//     let arr = [];
//     for (let i = 0; i <= n; i++){
//         if(i % 2 == 1){
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }

// naber(15);

//-------------------------------------------------------

// 14 - misol 

// let arr = [];
// function naber(n) {
//     for (let i = 0; i <= n; i++){
//         arr.push(i)
//         if(arr[i] % i == 0 && arr[i] % arr[i] == 0 && arr[i] % 1 ==0){
                   
//         }
//     }
//     console.log(arr);
// }

// naber(13);

// chala 

///---------------------------------------------------------------------

// 15 - miol

// qiymtlarini faqat toqlarinigina chiqaruvch funcsiya

// let namber = (n) => {
//     let arr = [];
//     let arrtoq = [];
//     for(let i = 0; i <= n; i++){
//         arr.push(i);
//         if(i % 2 == 1){
//             arrtoq.push(i);
//         }
//     }
//     return arrtoq;
// }

// console.log( namber(17));

//-----------------------------------------------

//16 - misol



//------------------------

//17 - misol



//-------------------------
// 18 - misol

// let namber = (n) => {
//     let arr = [];
//     for(let i = 0; i <= n; i++){
//         arr[i]= prompt(`massivnig ${i}- indeksi uchun qiymat kiriting !`);
//     }
//     return arr;
// }

// console.log(namber(3));

//------------------------------------------------------

// 19 -misil

// let namber = (n) => {
//     let arr = [];
//     let sum = 0;
//     for(let i = 0; i <= n; i++){
//         arr[i]= +prompt(`massivnig ${i}- indeksi uchun qiymat kiriting !`);
//         if(Number.isInteger(arr[i])){
//             sum += arr[i];
//         }else{
//             alert("Butun son kiriting !");
//         }
//     }
//     console.log(arr);
//     console.log(`siz kiritgan massiv qiymatlari yigindisi ${sum} ga teng`);
// }

// namber(3);

//------------------------------------------------------------------------

// 20 - misol

// let namber = (n) => {
//     let arr = [];
//     let arrtoq = [];
//     let arrjuft = [];
//     for(let i = 0; i <= n; i++){
//         arr[i]= prompt(`${i} = `);
//         if(arr[i] % 2 == 1){
//             arrtoq.push(arr[i]);
//         }else{
//             arrjuft.push(arr[i]); 
//         }
//     }
//     let b = prompt("juft yoki toq tanlang");
//     if(b == "juft"){
//         console.log(arrjuft);
//     }else if (b == "toq"){
//         console.log(arrtoq);
//     }else {
//         console.log("juft yoki toq faqat ikkisidan birini kiriting! ")
//     }
// }

// let n = +prompt('massiv indekslari uchun son kiriting !');
// namber(n);

//--------------------------

// 21 - misol

// let naber = (n) =>{
//     let arr = [];
//     for(let i = 0; i < n; i++){
//        arr.push(i) ;
//     }
//     console.log(arr);
//     return `massivning ohirgi elamenti " ${arr.length-1} " !`;
// }

// console.log(naber(7));

//--------------------------------------------------------------------

// 22 - misol

// let namber = (n) => {
//     let arr = [];
//     // let b = 0;
//     for(let i = 0; i <= n; i++){
//         arr[i]= prompt(`massivnig ${i}- indeksi uchun qiymat kiriting !`);
        
//     }
//     for(let i = 0 ; i<= n ; i++){
//         for(let j = i+1; j<=n; j++){
//             if(arr[i]==arr[j]){
//                 arr.pop()
//             }
//         }
//     }
//     // console.log(b);
//     return arr;
// }

// console.log(namber(3));

//----------------------------------------------------

// 23 -24 - misolollar

// let praducts = [
//     {
//         name : "Olma",
//         price : 100,
//         wight : 20,
//     },
//     {
//         name : "Non",
//         price : 200,
//         wight : 1,
//     },
//     {
//         name : "Kartoshka",
//         price : 500,
//         wight : 5,
//     },
// ];
// let summa = 0;
// let kg = 0;
// for(let i = 0; i<praducts.length ; i++ ){
//     summa += praducts[i].price;
//     kg += praducts[i].wight;
// }
// console.log(summa);
// console.log(kg);

//-------------------------------------------------------------

// 25 - misol

let praducts = [
    {
        name : "abdulloh",
        age : 100,
        
    },
    {
        name : "jamshit",
        age : 48,
    },
    {
        name : "humoyun",
        age : 67,
    },
];
let summa = 0;
for(let i = 0; i<praducts.length ; i++ ){
    summa += praducts[i].age;
}
console.log(Math.floor(summa/praducts.length));
