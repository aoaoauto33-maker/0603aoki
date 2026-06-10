const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(request, response){

    // 1. リクエストされたURLに応じて読み込むファイルを変える
    let filePath;
    let contentType = 'text/html';

    if (request.url === '/b.js') {
        // b.js が要求されたとき (a.htmlと同じフォルダにあると仮定)
        filePath = path.join(__dirname, '..', 'kadai', 'b.js');
        contentType = 'text/javascript'; // JS用の設定
    } else {
        // それ以外（最初のアクセスなど）は a.html を返す
        filePath = path.join(__dirname, '..', 'kadai', 'a.html');
        contentType = 'text/html'; // HTML用の設定
    }

    // 2. 決定したファイルを読み込んで返す
    fs.readFile(filePath, 'utf-8', function(err, data){

        if(err){
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('Server Error: ' + err.message);
            return;
        }

        // 正しい Content-Type を設定して送る
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(data);
    });
});

server.listen(3000, '0.0.0.0', function(){
    console.log('Server running on port 3000');
});