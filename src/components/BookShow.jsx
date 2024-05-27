import React, { useContext, useState } from 'react'
import BookEdit from './BookEdit'
import BooksContext from '../context/Books'

function BookShow({ book }) {
  const [edit, setEdit] = useState(false)
  const { deleteByID } = useContext(BooksContext)

  const handleEdit = () => {
    setEdit(!edit)
  }


  let content = edit ? <BookEdit book={book} handleEdit={handleEdit} /> : <h3>{ book.title }</h3>


  return (
    <>
    <div key={book.id} className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />
      {content}
      <div className='actions'>
        <button className='edit' onClick={handleEdit}>
          Edit
        </button>
        <button className='delete' onClick={() => deleteByID(book.id)}>
          Delete
        </button>
      </div>
    </div>
    </>
  )
}
export default BookShow
