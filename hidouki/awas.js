// ラーメンを作る
function cook(val, ms){
    return new Promise(function(resolve){
        console.log(val + '工程を始めます');
        setTimeout(function(){
            console.log('できました！');
            resolve();
        }, ms);
});
}

async function mate(){
    let val = await cook('お湯を沸かす', 5000);

    console.log('次は麺を茹でます');

    val = await cook('麺を茹でる', 2000);

    console.log('次はスープを作ります');

    val = await cook('スープを作る',3000);

    console.log('最後に盛り付けをします');

    val = await cook('盛り付けをする',2000);

    console.log('料理が完成しました');
}
mate();
