const APP_TITLE = 'Reactアプリ';

export function getTriangle(base, height){
    return base * height/2;
}

export class Article{
    getAppTitle(){
        return APP_TITLE;
    }
}

// これ自体がモジュール
// exportをつけると他のファイルで参照できるようになる(javaと違ってこれが必要)