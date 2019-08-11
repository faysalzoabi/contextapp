import React, {createContext, useState, useReducer, useEffect} from 'react';
import uuid from 'uuid/v1'
import { bookReducer } from '../reducers/bookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {
     const [books, dispatch] = useReducer(bookReducer,[], () => {
          const localData = localStorage.getItem('books');
          return localData ? JSON.parse(localData) : []
     });

     useEffect(() => {
          console.log('updated')
          localStorage.setItem('books', JSON.stringify(books));
     },[books]);
     //    const [books, setBooks] =  useState([
//         {title:'name of the wind', author:'faysal',id:1},
//         {title:'name of the emure', author:'faysal',id:2},
//     ]);
    // const addBook = (title, author) => {
    //     setBooks([...books, {title:title, author:author, id:uuid()}])
    // }
    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id))
    // }
    return ( 
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;