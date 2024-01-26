let h1 = document.getElementById("tatil");
console.log(h1);
let text = document.getElementsByClassName("text");
console.log(text[0]);
let p = document.getElementsByTagName("p");
console.log(p[3]);
let p4 = document.querySelector("#text");
console.log(p4);
let p5 = document.getElementsByName("p5");
console.log(p5[0].innerHTML);

p5[0].innerHTML = "salom javascript";
