import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

function useBooks() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used within a BooksProvider");
    }

    return context;
}

export default useBooks
