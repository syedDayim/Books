import React, { useState } from 'react'
import BookEdit from './BookEdit'

function BookShow({ book, onDelete }) {
  const [edit, setEdit] = useState(false)
  const style ={
    height: "675px",
  }
  const handleEdit = () => {
    setEdit(!edit)
  }

  let content = edit ? <BookEdit /> : <h3>{ book.title }</h3>

  return (
    <div key={book.id} className="book-show">
      {content}
      <div className='actions'>
        <button className='edit' onClick={handleEdit}>
          Edit
        </button>
        <button className='delete' onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
