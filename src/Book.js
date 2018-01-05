import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ClassifyBooks from './ClassifyBooks' 

class Book extends Component {

  static PropTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    classify: PropTypes.func.isRequired,
  }

  render() {
    const { book, books, classify } = this.props

    return (
      <li>

        <div className="book">

          <div className="book-top">
            <div
              className="book-cover"
              style={{ width:128, height:188, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
            </div>
            <ClassifyBooks
              book={book}
              books={books}
              classify={classify}
            />
          </div>

          <div className="book-title">{ book.title }</div>
          {
            book.authors && book.authors.map((author, index) => (
              <div className="book-authors" key={index}>{author}</div>
            ))
          }
          </div>

        </li>
    )
  }
}
export default Book
