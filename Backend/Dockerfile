# 使用官方 Node.js 运行时作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app

# 复制整个项目到工作目录
COPY server/ .

# 安装依赖
RUN npm install

# 暴露应用运行的端口
EXPOSE 3000

# 启动应用
CMD [ "node", "app.js" ]
