import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
  


const Books = () => {
    
    const {books} = useLoaderData()
    return (
      <div>
        
        <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2 mt-8">
          {books.map((book) => (
            <Book key={book.isbn13} book={book}></Book>
          ))}
        </div>
      </div>
    );
};

export default Books;