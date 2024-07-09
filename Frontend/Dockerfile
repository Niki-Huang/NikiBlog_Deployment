# 使用官方Nginx镜像作为基础镜像
FROM nginx:latest

# 自定义标签
LABEL author="niki"

# 将Nginx配置文件复制到容器中
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 将dist文件夹复制到Nginx默认静态文件目录中
COPY dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]
