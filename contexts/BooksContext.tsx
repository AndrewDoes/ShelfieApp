import React, { createContext, ReactNode, useState } from 'react'

const database_id = process.env.EXPO_PUBLIC_APPWRITE_DATABASE;
const collection_id = process.env.EXPO_PUBLIC_APPWRITE_BOOKS;

type Book = {
    id: string,
    title: string,
    author: string
}

type MyContextType = {
    book: Book;
};

type BooksContextType = {
    books: Book[];
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>;

    fetchBooks: () => Promise<void>;
    fetchBookById: (id: string) => Promise<void>;
    createBook: (data: Book) => Promise<void>;
    deleteBook: (id: string) => Promise<void>;
};

export const BooksContext = createContext<BooksContextType | undefined>(undefined);

export function BooksProvider({ children }: { children: ReactNode }) {
    const [books, setBooks] = useState<Book[]>([]);

    async function fetchBooks() {
        try {

        } catch (err: any) {

        }
    }

    async function fetchBookById(id: string) {
        try {

        } catch (err: any) {

        }
    }

    async function createBook(data: Book) {
        try {

        } catch (err: any) {

        }
    }

    async function deleteBook(id: string) {
        try {

        } catch (err: any) {

        }
    }

    return (
        <BooksContext.Provider value={{
            books,
            setBooks,
            fetchBooks,
            fetchBookById,
            createBook,
            deleteBook
        }}>
            {children}
        </BooksContext.Provider>
    )

}