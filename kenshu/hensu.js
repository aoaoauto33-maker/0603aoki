// //型確認
// function printTypeAndValue(val){
//     console.log(typeof val, val);
// }

let a = 0;
printTypeAndValue(a);
let b = '1' + a;
printTypeAndValue(b);
// 暗黙的な型変換で文字列型に
let c = 15 - b;
printTypeAndValue(c);
// これも暗黙的に数値型に変えてくれてる
let d = c - null;
printTypeAndValue(d);
let e = d - true;
printTypeAndValue(e);




// // falsyとtruthy
// let a = 0;
// console.log(Boolean(a));
// let b = '';
// console.log(Boolean(b));
// let c = 0n;
// console.log(Boolean(c));
// let d = null;
// console.log(Boolean(d));
// let e = parseInt("");
// console.log(Boolean(e));
// let f;
// console.log(Boolean(f));




// 関数とオブジェクト
function fn(){
    console.log('fn!');
}
fn.prop = 0;
fn.method = function(){
    console.log('method!');
}
fn();
fn.method();
console.log(fn.prop);




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




// // bindとthis(むずい)
// // bindはthisの参照先を変えてくれる
// window.name='Bob';
// const person = {
//     name: 'Tom',
//     hello: function(){
//         console.log('Hello' + this.name);
//     }
//     // ↑これはメソッド(オブジェクトの中の関数はメソッドという)
// }
// const helloTom = person.hello.bind(person);
// // bindを使ってpersonを使ってください
// // bindにはオブジェクトを入れる
// function fn(callback){
//     callback();
// }
// fn(helloTom);


// function a() {
//     console.log('Hello ' + this.name);
// }
// const b = a.bind({name: 'Tim'});
// // bindメソッドを使うとbは関数扱いになる(関数を入れているので)
// b();
// //「Hello Tim」と出力される



// // call,apply
// const tim= {name: 'Tim'}
// function a(){
//     console.log('Hello' + this.name);
// }
// const b = a.bind(tim);
// b();
// a.call(tim);
// a.apply(tim);


// // call
// const tim = {name:'Tim'}
// function a(name){
//     console.log('Hello' + name);
// }
// a.call(tim, 'Tom');
// // callの第二引数は実引数を固定


// // apply
// const tim = {name: 'Tim'}
// function a(name1,name2){
//     console.log('Hello' + name1 + ',' + name2);
// }
// a.apply(tim,['Tom','Bob']);



// // まとめ
// window.name= 'Bob';
// const person ={
//     name:'Tom',
//     hello: function(){
//         console.log('Hello' + this.name);
//     }
// }
// person.hello();

// const hello = person.hello;
// hello();

// const helloTom = person.hello.bind(person);
// helloTom();

// person.hello.call(person);
// person.hello.apply(person);



// // アロー関数とthis
// window.name = 'Bob';
// const person ={
//     name:'Tom',
//     hello:function(){
//         console.log('Hello' + this.name);
//     },
//     hi:() => {
//         console.log('Hello' + this.name);
//     }
// }
// person.hello();
// // Hello Tomと出力される
// person.hi();
// // Hello Bobと出力される
// // アロー関数はメソッドにはならない




// window.name= 'Bob';
// const a = () => console.log('Bye' + this.name);
// const person = {
//     name:'Tom',
//     hello(){
//         console.log('Hello' + this.name);
//         a();
//     }
// }
// person.hello();



// window.name= 'Bob';
// const person = {
//     name: 'Tom',
//     hello() {
//         console.log('Hello' + this.name);
//         const a = () =>nconsole.log('Bye' + this.name);
//         a();
//     }
//     // アロー関数が無名関数(メソッド)の中に入ってたら参照先はメソッドに従う
// }
// person.hello();