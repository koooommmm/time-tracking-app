# time-tracking-app

## 使用技術
- フロントエンド
  - Next.js
- バックエンド
  - Django
- DB
  - MySQL

## 環境構築
### 前提条件
- Dockerが利用可能であること

### 構築方法
```
# ビルド
docker compose build

# 初期構築時はmigrateが必要
docker compose exec backend python manage.py migrate

# コンテナ起動
docker compose up
```
