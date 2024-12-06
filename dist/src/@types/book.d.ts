export declare enum Genre {
    Fiction = "Fiction",
    Mystery = "Mystery",
    Romance = "Romance",
    Fantasy = "Fantasy",
    ScienceFiction = "Science Fiction",
    Biography = "Biography",
    SelfHelp = "Self-Help"
}
export type Book = {
    id: number;
    title: string;
    description: string;
    read: boolean;
    genre: Genre;
    coverImage: string;
    review: string;
};
export type GetBookResponseBody = Book;
export type GetBooksResponseBody = Book[];
export type UpdateBookRequestBody = {
    read?: boolean;
    review?: string;
};
export type UpdateBookResponseBody = Book;
export type CreateBookRequestBody = {
    title: string;
    description: string;
    genre: Genre;
    coverImage: string;
};
export type CreateBookResponseBody = Book;
//# sourceMappingURL=book.d.ts.map