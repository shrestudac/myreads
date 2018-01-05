import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class App extends Component {
  state = {
    books : [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  classify = ( newBook, newShelf ) => {
    BooksAPI.update(newBook, newShelf).then(response => {
      newBook.shelf = newShelf
      var updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    return (
      
      <div className="app">

        <Route exact path='/' render={() => (
          <ListBooks 
            books={this.state.books}
            classify={this.classify}
          />
        )}/>

        <Route exact path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            classify={this.classify}
          />
        )}/>

      </div>
    );
  }
}

export default App;
