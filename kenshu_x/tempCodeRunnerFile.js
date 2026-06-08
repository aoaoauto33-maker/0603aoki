
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