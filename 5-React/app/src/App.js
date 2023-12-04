import './App.css'
import React, { Fragment } from 'react'

function App() {
  // Define cell styles
  const cellStyles = {
    border: '1px solid blue',
    padding: '8px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
  var books = [
    { book_name: 'Strangers', author: 'Christine' },
    {
      book_name: 'Harry Potter and the Philosopher’s Stone',
      author: 'J.K.Howling',
    },
  ]
  const bookDetails = books.map((bookObj) => ({
    book_name: bookObj.book_name,
    author: bookObj.author,
  }))

  return (
    <Fragment>
      {bookDetails.map((book, index) => (
        <p key={index}>
          The book is {book.book_name} and the author is {book.author}
        </p>
      ))}
    </Fragment>
  )
}

export default App
