// <商品を３種類用意する>
const drink={
    水:120,
    お茶:150,
    コーヒー:130
};
// 文字列がキーになっている


// <投入金額を受け取る>
// 入力を扱うための道具の集まり(決まり文句)
const readline = require("readline");
// この段階ではまだ道具箱を持ってきただけで、入力を受け取る準備はできていない

// ここでreadline(道具)をどう使うのか設定する
// createInterfaceは、readlineモジュールが最初から持っているメソッド
// readlineが持っているcreateInterfaceメソッドを呼び出す作業
const rl=readline.createInterface({
    input: process.stdin,
    // キーボードから入力を受け取る
    output: process.stdout
    // コンソール画面に文字を表示する
});

// rl.question(質問, 関数) questionは質問と関数の２つを受け取るメソッド
rl.question("投入金額を入力してください：",(answer) => {
    const money= Number(answer);
    // Numberは変換関数 入力された文字列を数値に変換している

    console.log(`${money}円投入されました`);

    console.log("商品一覧");
    for(const name in drink){
        console.log(`${name}:${drink[name]}円`);
    }
    // for...inはdrinkのキーを一個ずつ取り出してnameに入れるという意味
    // {drink[name]}は、そのキーの値を示している(mapと同じ使い方)

    // <購入商品を選択できる>(questionメソッドの中にまた新たにquestionメソッドを作る)
    rl.question("購入したい商品を選択してください",(answer2) =>{
        console.log(`選択した商品:${answer2}`);


     rl.close();
    // readline.createInterface()でInterfaceを作る→使い終わったらrl.close()する
    // 最後の質問が終わった時点で閉じるので、２つ目のquestionの中で閉じてok

    });
})



