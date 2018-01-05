import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
  

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    classify: PropTypes.func.isRequired
  }

  state = {
    query: '',
    newBooks: [],
    searchErr: false,
  }

  getBooks = (event) => {
    const query = event.target.value.trim()
    this.setState({query: query})
    
    if (query) {
      BooksAPI.search(query, 40).then((books) => {
        books.length > 0 ? this.setState({newBooks: books, searchErr: false }) : this.setState({ newBooks: [], searchErr: true })
      })
    } else 
     this.setState({newBooks: [], searchErr: false })
  }

  render() {
    const { query, newBooks, searchErr } = this.state
    const { books, classify } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author" 
              value={this.state.query}
              onChange={this.getBooks}
             />
          </div>
        </div>

         <div className="search-books-results">
           {newBooks.length > 0 && (
             <div>
                <ol className="books-grid">
                  {newBooks.map((book) => (
                    <Book
                      book={book}
                      books={books}
                      key={book.id}
                      classify={classify}
                    />
                  ))}
                </ol>
              </div>
           )}
           { searchErr && (
             <div>
               <div className=''>
                 <p>Search returned 0 books.</p>
               </div>
             </div>
           )}
         </div>
      </div>
  )}
}
          
export default SearchBooks 
