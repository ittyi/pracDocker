# ベースとなるイメージの設定
FROM python:3.11-slim

# ワーキングディレクトリの設定
WORKDIR /app

# 依存関係リストのコピー
COPY requirements.txt requirements.txt

# 依存関係のインストール
RUN pip install -r requirements.txt

# ソースコードのコピー
COPY . .

# ポート4000を公開
EXPOSE 4000

# 実行コマンド
CMD [ "python", "app.py" ]
