// function sleep(ms){
//     const startTime = new Date();
//     while(new Date() - startTime < ms);
//     // 現在時刻からスタートタイムを引いて、それが入れた引数の時間より短い間は処理を実行
//     // (５秒間止めたい時とか使う)
//     console.log('sleep done');
//     // 終わったらこれが表示
//     // whileの処理が終わるまで次の処理に行かない(=同期処理)
// }

// // 上の処理が終わるまで下の処理は実行されない(ボタンを押しても反応しない)

// const btn = document.querySelector('button');
// // htmlのボタン要素をホームページ上に取ってくる(取ってくるだけ)

// btn.addEventListener('click', function(){
//     console.log('button clicked');
// });
// // イベントを発火してください
// // クリックしたら、関数を実行


// setTimeout(function(){
// // setTimeout=第二引数に渡した時間の後に、第一引数の関数が実行される
// sleep(5000);
// // ミリ秒 1000=1秒
// },2000);
// // 関数が第一引数、2000が第二引数s





// // タスクキュー
// const btn = document.querySelector('button');

// btn.addEventListener('click', function task2(){
//     console.log('task2 done');
// });

// function a(){
//     setTimeout(function tasuk1(){
//         console.log('task1 done');
//     }, 4000);
//     const startTime = new Date();
//     while(new Date() - startTime < 5000);
//     console.log('fn a done');
// }
// // 同期処理で画面の出力を握ってるから同期処理が終わってからじゃないと非同期が処理されない

// a();





// // コールバック関数と非同期処理
// function a(){
//     setTimeout(function task1(){
//         console.log('task1 done');
//     });
//     // setTimeoutは第二引数を入れないと0秒になる
//     // が、一番最後に出力されるのは、タスクキューで一旦待っていてもらう
//     // 店員さんに呼ばれるまでは待ってる
//     // 同期処理はタスクキューに入らない
//     console.log('fn a done');
// }
// function b(){
//     console.log('fin b done');
// }
// a();
// b();




// // コールバック関数の非同期処理
// function sleep(callback){
//     setTimeout(function(){
//         console.log('hello');
//         callback();
//     }, 3000);
// }
// sleep(function(){
//     console.log('callback done');
// });




// // 非同期処理のチェーン(=繋がり) 実際は使わない
// // 複数の非同期処理を順番に実行する際のコールバック関数
// function sleep(callback, val){
//     setTimeout(function(){
//         console.log(val++);
//         callback(val);
//     }, 3000)
// }
// sleep(function(val){
//     sleep(function(val){
//         sleep(function(val){
//         }, val)// 2が入る
//     }, val)// 1が入る
// }, 0);
// // 最初のvalはここで定義されている(0)





// // <promise>
// // new Promiseでインスタンス化(インスタンス化した時点で実行されている)
// // コンストラクタ関数に渡してあげるものを入れている(無名関数を入れてあげている)
// new Promise(function(resolve, reject){
//     // 成功したらresolve、失敗したらreject(決まり文句)

//     resolve('hello');
//     // resolveに成功処理を書く(paypayの決済成功など)
//     reject('bye');
//     // rejectに失敗処理を書く(paypayの決済失敗など)

// }).then(function(data){
//     // resolveが成功すると、thenの中身を実行する
//     // data='hello'
//     console.log(data);

// }).catch(function(data){
//     // rejectになるとcatchが実行される
//     // この場合はdata='bye'
//     console.log(data);

// }).finally(function(){
//     // finallyは必ず実行される
//     console.log('終了処理');
// });

// // then,catch,finallyはコールバック関数


// // resolve
// new Promise(function(resolve, reject){
//     console.log('promise');
//     resolve();
// }).then(function(){
//     console.log('then1');
// }).then(function(){
//     console.log('then2');
// }).then(function(){
//     console.log('then3');
// });
// console.log('global end');
// // 非同期は一旦タスクキューに入るので同期処理の'global end'から表示される



// // reject
// new Promise(function(resolve, reject){
//     console.log('promise');
//     reject();
// }).then(function(){
//     console.log('then1');
// }).then(function(){
//     console.log('then2');
// }).then(function(){
//     console.log('then3');
// }).catch(function(){
//     console.log('catch');
// });
// console.log('global end');



// // throw(エラーを投げる)
// // resolveの途中でcatchに渡したいときに使うもの
// new Promise(function(resolve, reject){
//     console.log('promise');
//     resolve();
// }).then(function(){
//     console.log('then1');
//     throw new Error();
//     // エラーを投げると、次のthen2ではなく、catchに飛ぶ
// }).then(function(){
//     console.log('then2');
// }).catch(function(){
//     console.log('catch');
// });
// console.log('global end');



// // 非同期処理
// new Promise(function(resolve, reject){
//     console.log('promise');
//     setTimeout(function(){
//         resolve('hello');
//     }, 1000);
// }).then(function(data){
//     console.log('then1: ' + data);
//     return 'bye';
// }).then(function(data){
//     console.log('then2: ' + data);
// }).catch(function(data){
//     console.log('catch: ' + data);
// }).finally(function(){
//     console.log('finally:');
// });
// console.log('global end');
// // ここでのreturnはpromiseとしてreturnしている
// // .thenはpromiseに紐づいている(難しいので次に渡してるんだなーくらいの認識でok)



// //Promiseと並列処理
// function sleep(val){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log(val++);
//             resolve(val);
//         }, val * 500);
//     })
// }
// Promise.all([sleep(2), sleep(3), sleep(4),]).then(function(){
//     console.log('end');
// });
// // .all＝全て同時に実行する
// // 同時に実行されているが、val*500なため時差があるように見えるだけ
// // CPUのコア数に従って同時に実行してくれる並列数が決まる(CPUがjsを実行してくれるので)




// // Promise.race
// function sleep(val){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log(val++);
//             resolve(val);
//         }, val * 500);
//     })
// }
// Promise.race([sleep(2), sleep(3), sleep(4)]).then(function(data){
//     console.log(data);
// })
// // .raceは一回処理が終わったらconsole.log(data);を実行する
// // その後sleep(3)に戻ってくる




// allSetteled
function sleep(val){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(val++);
            resolve(val);
        }, val * 500);
    })
}
Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then(function(data){
    console.log('--- allSettled ---');
    console.log(data);
})