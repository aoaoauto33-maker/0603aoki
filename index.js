const name="田中";
const age=25;

console.log(`名前: ${name}`);
console.log(`年齢: ${age}`);

function greet(name){
    return `こんにちは、 ${name}さん！`;
}

console.log(greet("佐藤"));


const fruits=["りんご","みかん","ぶどう"];
fruits.forEach((fruits) => {
    console.log(`フルーツ: ${fruits}`);
})


const score=75;
if(score>=80){
    console.log("合格");
}else{
    console.log("不合格");
}

const fn3=(age) => {
    return 'あなたの年齢は'+age;
}

console.log(fn3(25));


// // 分割代入
// const list = [10,20,30];
// const [x,y,z] = list;
// const [a,b] = list;
// const [i,j,k,l] = list;
// const [m, ,n] = list;
// const [one, ...rest] = list;




// オブジェクトの分割代入
const member1 = {
    name: 'TOM',
    gender: 'male',
    age: 20,
};
// キーと値が入ってるもの＝オブジェクト

const {name1,gender,memo= '---' } = member1;
// nameとgenderはmember1のものを取ってきているが、memoだけ新たに定義している

const{gender: sex } = member1;
// genderっていうキーの名前を変更することもできるよ
const{name2, ...resnt} = member1;
// やっぱりnameだけ取って後は配列に入れちゃおう

const member2 = {
    name: 'TOM',
    address:{
        prefecture:'東京都',
        city:'江東区',
    },
    // addressというキーの中にさらにオブジェクトを入れてキーと値も入れる
};

const { address, address: {city} } = member2;
// member2のaddressと、addressの中のcityだけ持ってきて欲しい
console.log(address);
console.log(city);



// 可変長引数
function sum(...nums){
    let result = 0;
    for(const num of nums){
        // nums(引数何個でもok)をnumに入れ込む
        result += num;
    }
    return result;
}
console.log(sum(1,2,3,4,5,6,7,8,9));


// スプレット構文による引数の展開
const nums2 = [10,25,5];
console.log(sum(nums2));
console.log(sum(...nums2));



// 分割代入によるオブジェクト引数の分解
function greet({name,age}){
    // {}は特定のものだけ抜き取りたい時に使う
    console.log(`Hello my name is ${name}, ${age} years old`);
}
const member = {name: 'TOM', gender: 'male', age:20};
greet(member);


// Optional Chaining演算子
const str = "こんにちは";
console.log(str.substring(1));
if(str !== null && str !== undefined){
    console.log(str.substring(1));
}
console.log(str?.substring(1));
// 通常はif文で作るが、Optional Chainingで?を使ってもok
// ?=もしstrに値が入ってたら表示して


// null合体演算子
// let value = null;
// console.log(value ?? '規定値');

let value = null;
value ??= '規定値';
console.log(value);