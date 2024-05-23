import React, { useState, useEffect } from 'react'
import './App.css'
import BookCreate from './components/BookCreate'
import BookShow from './components/BookShow'
import BookList from './components/BookList'
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([])

  const getAllBooks = async () => {
    const response = await axios.get("http://localhost:3001/books")
    setBooks(response.data)
  }
  useEffect(() => {
    getAllBooks();
  }, [])

  // Edit book by ID
  const editBookByID = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, ...response.data}
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


  
  return (
    <>
      <BookList books={books} onDelete={deleteByID} onEdit={editBookByID}/>
      <BookCreate  onCreate = {handleBookCreate}/>
    </>
  )
}

export default App
