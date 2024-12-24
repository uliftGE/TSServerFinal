import express, { Request, Response } from 'express';
import {
  Book,
  GetBookResponseBody,
  GetBooksResponseBody,
  UpdateBookRequestBody,
  CreateBookRequestBody,
  UpdateBookResponseBody,
  CreateBookResponseBody,
  Genre,
} from '../types/book';
import { ApiResponse } from '../types/api';
import { books } from '../data';

const router = express.Router();

// GET /books - 모든 책 목록을 가져옵니다.
router.get('/', (req, res: Response<ApiResponse<GetBooksResponseBody>>) => {
  res.json({ time: new Date().toISOString(), error: null, data: books });
});

// GET /books/:id - 특정 책의 상세 정보를 가져옵니다.
router.get(
  '/:id',
  (
    req: Request<{ id: string }>,
    res: Response<ApiResponse<GetBookResponseBody>>
  ) => {
    const bookId = parseInt(req.params.id, 10);
    const book = books.find((b) => b.id === bookId);

    if (book !== undefined) {
      res.json({ time: new Date().toISOString(), error: null, data: book });
      return;
    }
    res.status(404).json({
      time: new Date().toISOString(),
      error: '책을 찾을 수 없습니다.',
      data: null,
    });
  }
);

// PATCH /books/:id - 특정 책을 업데이트 합니다.
router.patch(
  '/:id',
  (
    req: Request<{ id: string }, unknown, UpdateBookRequestBody>,
    res: Response<ApiResponse<UpdateBookResponseBody>>
  ) => {
    const bookId = parseInt(req.params.id, 10);
    const { review } = req.body;
    const book = books.find((b) => b.id === bookId);

    if (book !== undefined) {
      if (review === '') {
        res.status(400).json({
          time: new Date().toISOString(),
          error: `body parameter 'review'는 필수입니다.`,
          data: null,
        });
        return;
      }
      if (review) {
        book.review = review;
      }
      res.json({ time: new Date().toISOString(), error: null, data: book });
      return;
    }
    res.status(404).json({
      time: new Date().toISOString(),
      error: '책을 찾을 수 없습니다.',
      data: null,
    });
  }
);

// POST /books - 책을 추가합니다.
router.post(
  '/',
  (
    req: Request<unknown, unknown, CreateBookRequestBody>,
    res: Response<ApiResponse<CreateBookResponseBody>>
  ) => {
    const { title, description, genre, coverImage } = req.body;

    if (!title || !description || !genre || !coverImage) {
      res.status(400).json({
        time: new Date().toISOString(),
        error: `body parameter 'title', 'description', 'genre', 'coverImage'는 필수입니다.`,
        data: null,
      });
      return;
    }

    if (!Object.values(Genre).includes(genre)) {
      res.status(400).json({
        time: new Date().toISOString(),
        error: `body parameter 'genre'는 Genre에 있는 값이어야 합니다.`,
        data: null,
      });
      return;
    }

    const newBook: Book = {
      id: books.length + 1,
      title,
      description,
      genre,
      coverImage,
      read: false,
      review: '',
    };

    books.push(newBook);
    res.json({ time: new Date().toISOString(), error: null, data: newBook });
  }
);

export default router;
