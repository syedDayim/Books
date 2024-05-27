import React, { useState, useContext } from 'react';
import BooksContext from '../context/Books';

function BookEdit({ book, handleEdit }){
    const [title, setTitle] = useState(book.title);
    const { books, editBookByID } = useContext(BooksContext)

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        editBookByID(book.id, title)
        handleEdit()
        
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="book-edit">
                <label htmlFor="edit">Title</label>
                <input className="input" type="text" value={title} onChange={handleChange} />
                <button className="button is-primary">Save</button>
            </form>
        </>
    )
}

export default BookEdit