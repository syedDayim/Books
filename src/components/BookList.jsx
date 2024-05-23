import React from 'react'
import BookShow from "./BookShow"

function BookList({ books, onDelete, onEdit }) {

    const renderedElements = books.map((book) => {
        return <BookShow book={book} onDelete={onDelete} onEdit={onEdit} />
    })

    return (
        <>
            <div className='book-list'> {renderedElements}</div>
        </>
    )
}

export default BookList


