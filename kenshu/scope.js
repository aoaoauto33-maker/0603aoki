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



// // 即時関数...定義と同時に一度だけ実行される関数
// // 実行結果が呼び出し元に返却される
// let result = (function(bb){
//     return `値だよ:${bb}`;
// })
// console.log(result(5));


// // 関数式 変数bの中に入れちゃうことで関数がグローバルスコープからスクリプトスコープになる
// // 最後に()を入れることで定義した瞬間に実行できるようになる
// // メリット=1回しか使わない場合はこれでok、スコープを閉じられる
// let b = function(){
//     console.log('called');
// }();
// // let result = (function(仮引数) {
// //     return 戻り値;
// // })(実引数);s


// // 即時関数の使い所
// let a = (function(){
//     let privateVal = 0;
//     let publicVal = 10;
//     function privateFunction(){
//         console.log('private function is called.')
//     }
//     function publicFunction(){
//         console.log('public function is called.')
//     }
//     return{publicVal, publicFunction}
// })();

// a.publicFunction();
// console.log(a.publicVal);


