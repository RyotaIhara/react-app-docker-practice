# ベースイメージ
FROM node:14-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存パッケージをインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# ポート3000を開放
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]
