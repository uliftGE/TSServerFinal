// src/app.ts

import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/books';
import path from 'path';
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
console.log(__dirname);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/books', bookRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}에서 서버가 운영중입니다!`);
});
