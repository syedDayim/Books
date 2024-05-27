import React, { useEffect, useContext } from 'react'
import './App.css'
import BookCreate from './components/BookCreate'
import BookShow from './components/BookShow'
import BookList from './components/BookList'
import BooksContext from './context/Books'

function App() {
  const { getAllBooks } = useContext(BooksContext)

  useEffect(() => {
    getAllBooks();
  }, [])

  
  
  return (
    <>
      <BookList />
      <BookCreate />
    </>
  )
}

export default App
