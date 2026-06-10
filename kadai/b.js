// <商品を３種類用意する>
const drink={
    水:120,
    お茶:150,
    コーヒー:130
};
// 文字列がキーになっている


// 画面のボタンや入力欄をJavaScriptに持ってくる(決まり文句)
const moneyInput = document.getElementById("moneyInput");
const moneyBtn   = document.getElementById("moneyBtn");
const itemInput  = document.getElementById("itemInput");
const itemBtn    = document.getElementById("itemBtn");
// 新しく、隠してあるエリア全体を取得する
const itemArea   = document.getElementById("itemArea");

// 投入金額を保存しておくための変数
let money = 0;


moneyBtn.addEventListener('click',() => {
    const answer = moneyInput.value; //入力欄から文字を受け取る
    money = Number(answer)
    // Numberは変換関数 入力された文字列を数値に変換している

    console.log(`${money}円投入されました`);

    console.log("商品一覧");
    for(const name in drink){
        console.log(`${name}: ${drink[name]}円`);
    }

    // 隠していた商品エリアを表示させる
    itemArea.style.display = "block";
});


itemBtn.addEventListener('click', () => {
    const answer2 = itemInput.value;
    console.log(`選択した商品: ${answer2}`);

    if(drink[answer2] <= money){
        console.log(`${answer2}のお買い上げありがとうございます！`);

        const change = money - drink[answer2];
        console.log(`おつり: ${change}円`);
    }else{
        console.log("お金が足りません")
    }
});




