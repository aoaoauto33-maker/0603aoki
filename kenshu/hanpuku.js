// インクリメント
// i++と++iの違いは何？(土日に調べておいてね)

let i = 0;
console.log(i++);

let ii = 0;
console.log(++ii);



// const array = [1,2,3,4,5];
// for(i=0; i < array.length; i++){
//     console.log(array[i]);
// }

// let v, i = 0;
// while(v = array[i++]){
//     console.log(v);
// }



// // for....in
// const obj ={
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3'
// }
// Object.prototype.method = function(){}
// for(let key in obj){
//     console.log(key, obj[key]);
// }
// // 配列にfor...inは使わない、オブジェクトに対して使う
// // オブジェクトの中身を列挙できる

// // for....ofは配列の反復処理をしたいときに使う(for....ofの方が使うよ)



const obj = {japanese:100, Math:70, sience:30, history:80, English:5};
for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}


