// const latop = {
//     nam: "HP",
//     ssd: 512,
//     opertivka: "16 gb",
//     vipusk:"Windows 11 Pro",
//     prassesot: '12th Gen Intel(R) Core(TM) i5-1235U ',
//     tipSistem: '64 raziryad',
//     ustroys:["VS Cod" , "Zoom", "Telagram", "Figma"],
//     nimadur:{
//         nam: "HP",
//         ssd: 512,
//         opertivka: "16 gb",
//         vipusk:"Windows 11 Pro",
//     },
//     fullHaracter: function(){
//         console.log(`${this.nam} , ${this.vipusk} , ${this.opertivka}`)
//     }
    
// }

// console.log(latop);
// latop.fullHaracter();

/// 1- misol ----------------

const calc = {
    qoshish: function(a , b) {
        return a+ b;
    },
    aurish: function(a , b) {
        return a- b;
    },
    kopay: function(a , b) {
        return a* b;
    },
    bolish: function(a , b) {
        return a/ b;
    },
}

console.log(calc.aurish(17,10));

//-------------------------------------------

// 2 -misol

const nabers = {
    cacl: function (a , b , c) {
        switch (c) {
            case "+":
                console.log(a+b);
                break;
            case "-":
                console.log(a-b);
                break;
            case "*":
                console.log(a*b);
                break;
            case "/":
                console.log(a/b);
                break;    
            default:
                console.log("Hatolik !!");
                break;
        }
    }
}

nabers.cacl(20,50,"-");

///--------------------------------------------

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