# ベースイメージとしてNode.js 14のイメージを選択
FROM node:14-slim

# コンテナ内の作業ディレクトリを/appに設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコンテナ内の作業ディレクトリにコピー
COPY package*.json ./

# アプリケーションの依存関係をインストールするためにコンテナ内でnpm installを実行
RUN npm install

# アプリケーションのソースコードの残りを作業ディレクトリにコピー
COPY . .

# アプリケーションはポート3000でリッスンするので、Dockerにこのポートを公開するように指示
EXPOSE 3000

# アプリケーションを起動するコマンド
CMD [ "node", "index.js" ]
