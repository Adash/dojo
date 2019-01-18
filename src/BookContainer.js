import React, { Component } from 'react';
import bookCover from './thewaythingsare.jpg';


class BookContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { books: [
      {
        title: 'The way things are',
        author: 'Lama Ole Nydahl',
        year: 1995,
      }
    ]}

  }

  render() {
    return (
      this.state.books.map((book,index)=>{
          return(
            <div className='col-3' key={index}>
              <div className='card'>
                <img 
                  className='card-img-top' 
                  src={bookCover} 
                  alt='book cover'
                  style= {{}}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{book.title}</h5>
                  <p className='card-text'>{book.author}</p>
                  <p className='card-text'>{book.year}</p>
                </div>
              </div>
            </div>
          )})
    )}

}

export default BookContainer;

