// //型確認
// function printTypeAndValue(val){
//     console.log(typeof val, val);
// }

// let a = 0;
// printTypeAndValue(a);
// let b = '1' + a;
// printTypeAndValue(b);
// // 暗黙的な型変換で文字列型に
// let c = 15 - b;
// printTypeAndValue(c);
// // これも暗黙的に数値型に変えてくれてる
// let d = c - null;
// printTypeAndValue(d);
// let e = d - true;
// printTypeAndValue(e);




// falsyとtruthy
let a = 0;
console.log(Boolean(a));
let b = '';
console.log(Boolean(b));
let c = 0n;
console.log(Boolean(c));
let d = null;
console.log(Boolean(d));
let e = parseInt("");
console.log(Boolean(e));
let f;
console.log(Boolean(f));




// // 関数とオブジェクト
// function fn(){
//     console.log('fn!');
// }
// fn.prop = 0;
// fn.method = function(){
//     console.log('method!');
// }
// fn();
// fn.method();
// console.log(fn.prop);




// // コールバック関数
// function hello(){
//     console.log('HELLO');
// }
// function fn(callback){
//     callback('TOM');
// }
// fn(hello);
// fn(function(name){
//     console.log('Hello' + name);
// });
// setTimeout(hello,3000);
// // ３秒後にhelloを実行してね



// // this
// const person ={
//     name:'TOM',
//     hello: function(){
//         console.log('HELLO' + this.name);
//     }
// }
// person.hello();



// コールバック関数とthis
window.name = 'Bob';
const person = {
    name: 'TOM',
    hello: function(){
        console.log('Hello' + this.name);
    }
}
function fn(callback){
    callback();
}
fn(person.hello);




// bindとthis(むずい)
window.name='Bob';
const person = {
    name: 'Tom',
    hello: function(){
        console.log('Hello' + this.name);
    }
}
const helloTom = person.hello.bind(person);
function fn(callback){
    callback();
}
fn(helloTom);