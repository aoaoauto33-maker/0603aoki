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
const moneyInput = document.getElementById('moneyInput');
const moneyBtn   = document.getElementById('moneyBtn');
const itemInput  = document.getElementById('itemInput');
const itemBtn    = document.getElementById('itemBtn');
const refundBtn  = document.getElementById('refundBtn');
// 新しく、隠してあるエリア全体を取得する
const itemArea   = document.getElementById('itemArea');

// 投入金額を保存しておくための変数
let money = 0;




// <お金投入>
moneyBtn.addEventListener('click',() => {
    const answer = moneyInput.value; //入力欄から文字を受け取る
    money = Number(answer)
    // Numberは変換関数 入力された文字列を数値に変換している

if(money > 1000){
    console.log('もう一度入力してください')
}else{
    console.log(`${money}円投入されました`);


    console.log("商品一覧");
    for(const  drinkList in drink){
        console.log(`${drinkList}: ${drink[drinkList].price}円`);
    }

    // 隠していた商品エリアを表示させる
    itemArea.style.display = 'block';
}
});




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



