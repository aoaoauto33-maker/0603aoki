let obj={
    property1: 'Hello',
    property2: function(){
        console.log(this.property1 + 'zzz')
    },
    property3: {
        bye: 'Bye'
    }
}

// オブジェクトのキーへのアクセス方法
// どっちでもいいけど.property1の書き方の方がいいかも
console.log(obj.property1);
console.log(obj[`property1`]);



// // <配列>
// // 配列の宣言は2通り(上がおすすめ)
// const fruits = [];
// let numbers = new Array();

// // 宣言と一緒に初期化
// const colors = ["Red","Green","Blue"];

// // 値の代入、変更
// const fruits2 = ["Apple","Banana"];
// fruits[1] = "Orange";
// console.log(fruits2);

// fruits2.push("Melon");
// console.log(fruits2);


// <配列のループ>
const fruits = ["Apple", "Banana", "Orange"];

// 方法１　多分初心者向け 条件次第で止められる
for(let i=0; i< fruits.length; i++){
    console.log(fruits[i]);
}

// 方法２　forEach構文 止められない
fruits.forEach((fruits, index) => {
    console.log(index, fruits);
});

// 方法３　これ１番使う fruitに全部入ってから表示される(インデックスは取得できない)
// これも止められないけど書く量が少ないのでこれがいい
for(const fruit of fruits){
    console.log(fruit);
}



// // <よく使う配列操作メソッド３選>
// const numbers = [1,2,3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);
// // mapは１個ずつ取ってその処理を行なってくれる

// const numbers2 = [1,2,3,4,5];
// const even = numbers2.filter(num => num % 2 ===0);
// console.log(even);
// // filter機能(条件に合うものだけ残す)

// const numbers3 = [1,2,3,4];
// const sum = numbers3.reduce((accumulator, current) => accumulator + current,
// console.log(sum));
// // 配列を一つの値にしてくれる
