import React from 'react';
import BookShow from "./BookShow";
import { useContext } from 'react';
import BooksContext from '../context/Books';


function BookList() {
    const { books } = useContext(BooksContext);

    const renderedElements = books.map((book, index) => (
        <BookShow key={book.id} book={book} />
    ));

    return (
        <>
            <div className='book-list'>
                {renderedElements}
            </div>
        </>
    );
}
export default BookList;