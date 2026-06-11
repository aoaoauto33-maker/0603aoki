// <商品を３種類用意する>
const drink={
    水:{ price:120, stock:5,
    },
    お茶:{ price:150, stock:5,
    },
    コーヒー:{ price:130, stock:5
    }
    // 文字列がキーになっている
};



// <釣り銭の在庫を用意する>
const changeStock ={
    500 : 5,
    100 : 20,
    50  : 10,
    10  : 20
}



// <画面のボタンや入力欄をJavaScriptに持ってくる(決まり文句)>
const itemInput  = document.getElementById('itemInput');
const itemBtn    = document.getElementById('itemBtn');
const refundBtn  = document.getElementById('refundBtn');
// 新しく、隠してあるエリア全体を取得する
const itemArea   = document.getElementById('itemArea');

// 投入金額を保存しておくための変数
let money = 0;




// <お金投入>
function insertMoney(coin){
    
    if(money + coin > 1000){
        console.log('これ以上は入りません');

    }else{
    money += coin;

    changeStock[coin] += 1;

    console.log(`${coin}円投入されました`);
    console.log(`現在の投入金額: ${money}円`);

    console.log('商品一覧');
    console.log('--------');
    for(const  drinkList in drink){
        console.log(`${drinkList}: ${drink[drinkList].price}円`);
    }
    console.log('--------');

    
    // 隠していた商品エリアを表示させる
    itemArea.style.display = 'block';
   }
}





// 各ボタンを発火させる
function btnFire(){
    const coins = [500,100,50,10]
    for(const coin of coins){
        const button = document.getElementById(`btn${coin}`);

        button.addEventListener('click', () => {
            insertMoney(coin);
        });
    }
}
btnFire();






// <商品購入>
itemBtn.addEventListener('click', () => {
    const answer2 = itemInput.value;
    console.log(`選択した商品: ${answer2}`);

    // <商品が存在するか判定>
    if(!drink[answer2]){
        console.log('その商品は存在しません');

    // <金額判定>
    }else if(money < drink[answer2].price){

        console.log('お金が足りません');
        console.log(`残額: ${money}円`);
    
    // <在庫判定>
    }else if(drink[answer2].stock <= 0){

        console.log('この商品は在庫切れです');
        
    // <全部クリア>
    }else{
        console.log(`${answer2}のお買い上げありがとうございます！`);

        money -= drink[answer2].price;
        drink[answer2].stock -= 1;


        console.log(`おつり: ${money}円`);
        console.log(`在庫: ${drink[answer2].stock}`);

        algorithm();
    }
});




// <返金処理>
refundBtn.addEventListener('click', () =>{
    const refundMoney = money;
    // 現在の値を保存

    money = 0;
    // 値に0を入れ直して保存

    console.log(`${refundMoney}円が返金されました`);
});




// 釣り銭アルゴリズム
function algorithm(){
    let change = money;
    // 今のmoneyの値を保存しておく


    const coins = [500,100,50,10];
    // 500から順番通りに計算させたいので配列とofを使う

    for(const coinValue of coins){

    // Math.min(必要枚数, 在庫)...少ない方を使うメソッド
    const coin = Math.min(
        Math.floor(change / coinValue), 
        // まずは500で割って何枚になるか計算
        changeStock[coinValue]
        // 今抱えている在庫
    );

    change -= coin * coinValue;
    // 必要枚数と500円をかけて今の値から引いてそれをchangeに保存

    changeStock[coinValue] -= coin;
    // 在庫から計算した硬貨の枚数を引く

    console.log(`${coinValue}円玉を${coin}枚数使いました`);
    console.log(changeStock);

    if(change > 0){
        console.log('釣銭不足です');
    }

    }
}



