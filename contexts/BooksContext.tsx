import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { databases } from '../lib/appwrite';
import { ID, Models, Permission, Query, Role } from 'react-native-appwrite';
import useUser from '../hooks/useUser';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_BOOKS;

type Book = Models.Document & {
    title: string,
    author: string,
    description: string,
    userId: string
}

type CreateBookData = {
    title: string,
    author: string,
    description: string
}

type BooksContextType = {
    books: Book[];
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>;

    fetchBooks: () => Promise<void>;
    fetchBookById: (id: string) => Promise<void>;
    createBook: (data: CreateBookData) => Promise<void>;
    deleteBook: (id: string) => Promise<void>;
};

export const BooksContext = createContext<BooksContextType | undefined>(undefined);

export function BooksProvider({ children }: { children: ReactNode }) {
    const [books, setBooks] = useState<Book[]>([]);
    const { user } = useUser();

    async function fetchBooks() {
        try {
            if (!user?.id) {
                console.error("FetchBooks: No user ID found. User might not be logged in.", user);
                return;
            }

            if (!DATABASE_ID || !COLLECTION_ID) {
                console.error("FetchBooks: Missing Database ID or Collection ID. Check your .env.local file.");
                return;
            }

            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.equal('userId', user.id)
                ]
            );

            setBooks(response.documents as unknown as Book[]);
            console.log("Books fetched:", response.documents.length);
            console.log("Books fetched:", response.documents);
        } catch (err: any) {
            console.error("Error fetching books:", err.message);
            console.error("Full fetch error:", JSON.stringify(err));
        }
    }

    async function fetchBookById(id: string) {
        try {

        } catch (err: any) {

        }
    }

    async function createBook(data: CreateBookData) {
        try {
            if (!user?.id) {
                console.error("CreateBook: No user ID found. User might not be logged in.", user);
                return;
            }

            if (!DATABASE_ID || !COLLECTION_ID) {
                console.error("CreateBook: Missing Database ID or Collection ID. Check your .env.local file.");
                return;
            }

            // console.log("-----------------------------------------");
            // console.log("CreateBook Triggered");
            // console.log("User ID:", user.id);
            // console.log("Database ID:", DATABASE_ID);
            // console.log("Collection ID:", COLLECTION_ID);
            // console.log("Data:", data);
            // console.log("-----------------------------------------");

            const newBook = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                { ...data, userId: user.id },
                [
                    Permission.read(Role.user(user.id)),
                    Permission.write(Role.user(user.id)),
                    Permission.update(Role.user(user.id)),
                    Permission.delete(Role.user(user.id)),
                ]
            );

            console.log("Book created successfully:", newBook.$id);
            setBooks(prev => [newBook as unknown as Book, ...prev]);

        } catch (err: any) {
            console.error("Error creating book:", err.message);
            console.error("Full error object:", JSON.stringify(err));
            throw err;
        }
    }

    async function deleteBook(id: string) {
        try {

        } catch (err: any) {

        }
    }

    useEffect(() => {
        if (user) {
            fetchBooks();
        }
        else {
            setBooks([]);
        }
    }, [user])

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