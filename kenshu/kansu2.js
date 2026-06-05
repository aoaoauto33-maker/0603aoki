// // コンストラクタ関数
// function Person(name,age){
//     // インスタンスの関数なんだということをわかりやすくするため大文字で書いてるだけ
//     this.name=name;
//     this.age=age;
// }
// const bob = new Person('Bob',20);
// console.log(bob);



// // クラス表記
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     hello(){
//         console.log('Hello' + this.name);
//     }
// }

// // インスタンス化
// const per1 = new Person('Bob',30);
// console.log(per1);





// // クラス継承
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     hello(){
//         console.log('Hello' + this.name);
//     }
// }
// class japanese extends Person{
//     // extendsが継承 name,age,helloをjapaneseが継承
//     constructor(name,age,gender){
//         super(name,age);
//         // 継承したものはsuperで囲ってあげる
//         this.gender = gender;
//     }

//     hi(){
//     console.log('Hi ' + this.name);
//     }

//     bye(){
//     console.log('Bye ' + this.name);
//     }
// }
// const person = new japanese('Bob',30,'Male');
// console.log(person);
// person.hi();







// ゲッターとセッター
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    get name(){
        return this.name + '!!';
    }

    set name(value){
        this.name = value;
    }
}
const person = new Person('Bob',30);
console.log(person.name);
