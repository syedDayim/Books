import React, { useState } from 'react'
import './App.css'
import BookCreate from './components/BookCreate'
import BookShow from './components/BookShow'
import { nanoid } from 'nanoid'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

  // Generate Random ID
  const generateRandomID = () => {
    return Math.floor(Math.random() * 10000) + 1
  }


  // Creates Book
  const handleBookCreate = (title) => {
    let updatedBook = [
      ...books,
      {id: nanoid(), title}
    ]
    setBooks(updatedBook)
  }

  // Deletes by ID

  const deleteByID =(id) => {
    const filteredData = books.filter((book) => {
      return book.id !== id
    })
    setBooks(filteredData)
   
  }

  
  return (
    <>
      <BookList books={ books } onDelete={deleteByID}/>
      <BookCreate  onCreate = {handleBookCreate}/>
    </>
  )
}

export default App
