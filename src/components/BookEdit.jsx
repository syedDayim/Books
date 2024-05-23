import React, { useState } from 'react';

function BookEdit({ book, handleEdit, onEdit}){
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(book.id, title)
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