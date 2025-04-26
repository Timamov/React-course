# Используем официальный Node.js образ
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и lock файл
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Открываем порт Vite
EXPOSE 5173

# Запускаем Vite с поддержкой HMR и внешнего доступа
CMD ["npm", "run", "dev", "--", "--host"]

