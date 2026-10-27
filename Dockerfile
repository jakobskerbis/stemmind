FROM node:22-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
ENV NODE_ENV=production PORT=3000 STEMMIND_DB=/data/stemmind.db
VOLUME /data
EXPOSE 3000
CMD ["npm", "start"]
