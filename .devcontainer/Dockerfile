FROM node:22-slim
# renuixが起動、自分のPCの中に別のOSが入れられる、みたいなイメージ

WORKDIR /workspace

RUN apt-get update && \
    apt-get install -y git && \
    rm -rf /var/lib/apt/lists/*

# グローバルにnodeが使えればJSの実行には十分
# 必要に応じてpnpmやtypescriptを追加できる
RUN npm install -g nodemon