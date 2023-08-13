// Expressライブラリをインポート
const express = require('express');

// Expressを初期化
const app = express();

// リッスンするポートを定義
const port = 3000;

// ルートパス('/')へのGETリクエストのルートハンドラを定義
app.get('/', (req, res) => {
  res.send('Hello, Docker!!!!!');
});

// 指定したポートでアプリをリッスン
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
