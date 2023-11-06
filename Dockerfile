# Sử dụng hình ảnh Node.js chính thức
FROM node:18.16.1

# Mở cổng mạng mà ứng dụng của bạn cần để chạy
EXPOSE 5000

# Tạo thư mục làm việc
WORKDIR /app

# Sao chép file package.json và package-lock.json vào thư mục làm việc
COPY package.json package-lock.json ./

# Cài đặt các gói npm
RUN npm install

# Sao chép tất cả các file và thư mục còn lại vào thư mục làm việc trong container
COPY . .

# Chạy ứng dụng
CMD ["node", "server.js"]