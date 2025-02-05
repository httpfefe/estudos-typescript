"use strict";
function soma(a, b) {
    return a + b;
}
console.log(soma(4, 4));
//tipos primitivos
//  fefe = String;
//  123 = Number;
//  true or false = boolean; 
let x = 10;
let y = 34;
console.log(x);
const a = 13.25435;
console.log(a);
//string
const firtName = 'fefe';
console.log(firtName.toLocaleLowerCase());
let fullname;
//boolean
let c = false;
console.log(c);
console.log(typeof c);
c = true;
console.log(typeof c);
//inference e annotation
const ann = 'text';
let inf = 'textt';
//inf = 1; erro pois a variavel e tipo string
const numeros = 32;
const numeroemstring = numeros.toString();
const printsnumber = 'imprima o numero ${numeros}';
