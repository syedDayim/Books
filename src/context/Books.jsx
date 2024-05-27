import { createContext, useState } from "react";
import axios from 'axios';


const BooksContext = createContext();

const Provider = ({ children }) => {
    const [books, setBooks] = useState([])

    const getAllBooks = async () => {
        const response = await axios.get("http://localhost:3001/books")
        setBooks(response.data)
    }

    // Edit book by ID
    const editBookByID = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book;
        })
        setBooks(updatedBooks)
    }

    // Creates Book
    const handleBookCreate = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title
        })
        let updatedBook = [
            ...books,
            response.data
        ]
        setBooks(updatedBook)
    }

    // Deletes by ID

    const deleteByID = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`)
        const filteredData = books.filter((book) => {
            return book.id !== id
        })
        setBooks(filteredData)
    }


    const valueToShare = {
        books,
        getAllBooks,
        editBookByID,
        handleBookCreate,
        deleteByID,

    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
};

export { Provider };
export default BooksContext;
