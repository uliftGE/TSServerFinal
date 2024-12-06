"use strict";
// src/routes/books.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_1 = require("../@types/book");
const data_1 = require("../data");
const router = express_1.default.Router();
// GET /books - 모든 책 목록을 가져옵니다.
router.get('/', (req, res) => {
    res.json({ time: new Date().toISOString(), error: null, data: data_1.books });
});
// GET /books/:id - 특정 책의 상세 정보를 가져옵니다.
router.get('/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const book = data_1.books.find((b) => b.id === bookId);
    if (book !== undefined) {
        res.json({ time: new Date().toISOString(), error: null, data: book });
        return;
    }
    res.status(404).json({
        time: new Date().toISOString(),
        error: '책을 찾을 수 없습니다.',
        data: null,
    });
});
// PATCH /books/:id - 특정 책을 업데이트 합니다.
router.patch('/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const { review } = req.body;
    const book = data_1.books.find((b) => b.id === bookId);
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
});
// POST /books - 책을 추가합니다.
router.post('/', (req, res) => {
    const { title, description, genre, coverImage } = req.body;
    if (!title || !description || !genre || !coverImage) {
        res.status(400).json({
            time: new Date().toISOString(),
            error: `body parameter 'title', 'description', 'genre', 'coverImage'는 필수입니다.`,
            data: null,
        });
        return;
    }
    // genre가 Genre enum에 있는지 확인
    if (!Object.values(book_1.Genre).includes(genre)) {
        res.status(400).json({
            time: new Date().toISOString(),
            error: `body parameter 'genre'는 Genre에 있는 값이어야 합니다.`,
            data: null,
        });
        return;
    }
    const newBook = {
        id: data_1.books.length + 1,
        title,
        description,
        genre,
        coverImage,
        read: false,
        review: '',
    };
    data_1.books.push(newBook);
    res.json({ time: new Date().toISOString(), error: null, data: newBook });
});
exports.default = router;
