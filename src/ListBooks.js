import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'


class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    classify: PropTypes.func.isRequired
  }

  state = {shelfChange: false}

  render() {

    const { books, classify } = this.props
    const shelfTypes = [{ class: 'currentlyReading', heading: 'Currently Reading' },
                        { class: 'wantToRead', heading: 'Want To Read' },
                        { class: 'read', heading: 'Read'}]
    
    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {shelfTypes.map((shelf, index) => {
            const shelfBooks = books.filter( book => book.shelf === shelf.class)
            return (
              <div className="bookshelf" key={index}>
                <h2 className="bookshelf-title">{shelf.heading}</h2>
                <div className="bookshelf-books">
                  <BookShelf
                    books={shelfBooks}
                    classify={classify}
                  />
                </div>
              </div> 
          )})}
       </div>

       <div className="open-search">
         <Link to="/search">Search</Link>
       </div>
          
     </div>
     )
  }
}

export default ListBooks
