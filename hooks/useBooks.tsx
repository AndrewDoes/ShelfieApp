import React, { useContext } from 'react'
import { BooksContext } from '../contexts/BooksContext';

function useBooks() {
    const context = useContext(BooksContext);

    if (!context) {
        throw new Error("useUser must be used within a BooksProvider");
    }

    return context;
}

export default useBooks
