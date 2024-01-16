
// let a = 10000;

// for (let i = 0.1; i >=1 ; i += 0.1){
//     if(i > 1.1){
        
//     }

// }

// let a = 6;
// let b = 9;

// for(let i = a ; i <= b ; i++){
//     for (let j = 1 ; j <= i ; j++){
//         console.log(i);
//     }
// }

// let n = 50;
// for(let i = 1; i <=20 ; i++){
//     if(n % i === 0){
//         console.log(i);
//     }
// }

////////////////----------- Uy vazifalar -------------//////////////

// 1- misol

// let a = 7;
// let b = 12;
// let c = 0
// for (let i = a; i <= b; i++){
//     console.log(i);
//     c++
// }
// console.log(c + " chiqarilgan sonlar soni");

//-----------------------------------------------------------------

// 2 -misol

// let a = 7;
// let b = 12;
// let c = 0
// for (let i = b-1; i > a; i--){
//     console.log(i);
//     c++
// }
// console.log(c + " chiqarilgan sonlar soni");

//-----------------------------------------------------------------------

// 3 - miosl
// let narh = 10;

// for(let i = 1 ; i < 11; i++){
//     console.log(`${i} kg konfet narhi ${narh * i}`);
// }

//------------------------------------------------------------------------

// 4 - misol

// let narh = 10000;
// for(let i = 1 ; i <= 2; i += 0.2){
//     console.log(`${i} kg konfet narhi ${narh * i}`);
// }

//------------------------------------------------------------------------

// 5 - misol

// let a = 1;
// let b = 10;
// let c = 0;
// for(let i = a + 1; i < b ; i++){
//     c += i;
// }
// console.log(`a va b oraligidagi barcha butun sonlarning yigindisi ${c} barobar`);

//--------------------------------------------------------------------------------------

// 7 - misol

// let a = 1;
// let b = 5;
// let c = 1;
// for(let i = a + 1; i < b ; i++){
//     c *= i;
// }
// console.log(`a va b oraligidagi barcha butun sonlarning ko'paytmasi ${c} barobar`);

//-----------------------------------------------------------------------------------------

// 8 -misol

//  let n =10;
//  let s =0;

//  for(let i = 1; i<=n; i++){
//     s += 1/i
//  }
//  console.log(s);

// -------------------------------------------------------------------------------

// 9 -misol

//  let n =2;
//  let s =1;

//  for(let i = 1.1; i<=n; i += 0.1){
//     //console.log(+i.toFixed(1));
//     s *= i
//  }
//  console.log(s);

//----------------------------------------------------------------------------

//10 -misol 

// let n = 5;
// let s = 0;
// for (let i=1; i<=(2*n-1) ; i +=2){
//     s += i;
//     console.log(s)
// }
// console.log(`${n} ning kivadrati ${s} ga teng`);

//-----------------------------------------------------------------

// 11- misol

// let n = 5;
// let a = 2;
// let c = 1;
// for(let i = 1; i <= n; i++ ){
//     c*=a;
// }
// console.log(`${a} soninig ${n} darajasi teng ${c} ga`);

//------------------------------------------------------------------------

// 12- misol

// let n = 5;
// let a = 2;
// for(let i = 1; i <= n; i++ ){
//     console.log(`${a} ning ${i} darajasi teng `+ a ** i + " ga");
// }

//-----------------------------------------------------------------

// 13 - misol

// let n = 5;
// let a = 2;
// let c = 0;
// for(let i = 1; i <= n; i++ ){
//     console.log(`${a} ning ${i} darajasi teng `+ a ** i + " ga");
//     c += a**i;
// }
// console.log( `${a} ning darjalarinigi yigindisi ` + c  + " ga teng");

//--------------------------------------------------------------------------

// 14 - misol

// let n = 7;
// let a = 0;
// for(let i = 1; i <= n; i++){
//     a += i;
// }
// console.log(a);

//----------------------------------------------------------------------------

// 15 - misol

// let n = 3;
// let k = 2;
// let s = 0;
// for(let i = 1; i <= n; i++){
//     s+=i**k
// }
// console.log(s);

//---------------------------------------------------------------------------

// 16 - misol

// let n = 3;
// let s = 0;
// let a = 0;
// for(let i = 1; i <= n; i++){
//     a += i**i ;
// }
// console.log(a);

//------------------------------------------------------

//17 --misol

// let a = 4;
// let b = 11;

// for(let i=a + 1; i < b; i++){
//     console.log(i);
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

//----------------------------------------------------------------

// 18 -misol

// let n = 40;
// let a = 0;
// let b = 0;

// for(let i=1; i<=n; i++){
//     if(n%i==0){
//         console.log(i);
//         a++
//         b+=i
//     }
// }
// console.log(`${n} soninig boluvchilari soni  ${a} ga barobar ,ularning yigindisi ${b} ga teng`);

//------------------------------------------------------------------------------------------------------

// 19 - misol

// let n = 18;
// let a = 0;
// for(let i = 1; i <= n; i++){
//     if(n % i == 0){
//         console.log(i);
//         a++
//     }
// }
// if(a==2){
//     console.log(` Kiritgan ${n} soningiz tub`);
// }else{
//     console.log(` Kiritgan ${n} soningiz tub emas`);
// }

//--------------------------------------------------------------

// 20 -misol

// let a = 3
// let b = 5

// for(let i = a; i <= b; i++){
//     for(let j = 1; j <= i; j++){
//         console.log(i);
//     }
// }

//--------------------------------------------------------------------

//21-misol

// let a = 32;
// let b = 6;
// while(b < a){
//     a -= b
// }
// console.log(a);



//-----------------------------------------------------------------------

// 22-misol

// let a = 32;
// let s = a;
// let b = 6;
// let c = 0;
// while(b < a){
//     a -= b
//     c ++
// }
// console.log(`siz kiritgan ${s} uzunlikdagi kesmanig ishida ${b} kesmadan ${c} ta joylashtirishlik mumkun !`);

//------------------------------------------------------------------------------------

// 23 - misol 

// let n = 81;
// let b=0;
// let a = 1;
// while(n>a){
//     a *= 3; 
//     b++
//     if(a==n){
//         console.log(`3 ning ${b} chi darajasi`);
//     }
//     if(a>n){
//         console.log(`3 ning darajasi emas`);
//     }
// }

//------------------------------------------------------------------------------

// 24 - misol

// let n = 32;
// let son = n;
// let m = 6;
// let butun = 0;

// while(n>m){
//     n-=m;
//     butun++
// }
// console.log(`kiritilgan ${son} sonini ${m} ga bo'lganimizda ${butun} butun qismi ${n} qoldiq`);

//---------------------------------------------------------------------------------

// 30 - misol


let n = 19;
let a = 1;
let c=0;
while(n>=a){
    if(n % a==0){
        console.log(a);
        c++
    }
    a++
}
if(c==2){
    console.log(`${n} kiritgan soniz tub!`);
}else{
    console.log(`${n} kirtitgan soniz tub emas!`);
}





//----------------------------------------------------------------------------------------------------