// let a =2;
// function fn1(){
//     let a =1;
//     function fn2(){
//         let a = 3;
//         console.log(a);
//     }
//     fn2();
// }
// fn1();
// // レキシカルスコープ＝自分が参照できる範囲



// 即時関数...定義と同時に一度だけ実行される関数
// 実行結果が呼び出し元に返却される
let result = (function(bb){
    return `値だよ:${bb}`;
})
console.log(result(5));


// 関数式 変数bの中に入れちゃうことで関数がグローバルスコープからスクリプトスコープになる
let b = function(){
    console.log('called');
}();


// 即時関数の使い所
let a = (function(){
    let privateVal = 0;
    let publicVal = 10;
    function privateFunction(){
        console.log('private function is called.')
    }
    function publicFunction(){
        console.log('public function is called.')
    }
    return{publicVal, publicFunction}
})();

a.publicFunction();
console.log(a.publicVal);


