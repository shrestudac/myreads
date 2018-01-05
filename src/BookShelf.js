import React, { Component } from 'react';
import * as BooksAPI  from './BooksAPI'
import './App.css'
import Book from './Book'
import PropTypes from 'prop-types'


class BookShelf extends Component {

  state = {};
  static propTypes = {
    books: PropTypes.array.isRequired,
    classify: PropTypes.func.isRequired,
  }

  render() {
    const { books, classify } = this.props

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            book={book}
            books={books}
            key={book.id}
            classify={classify}
          />
        ))}
      </ol>
    )
  }
}
export default BookShelf;
