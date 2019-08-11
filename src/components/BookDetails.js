import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';

const BookDetails = ({book}) => {
    // console.log('props',props);
    // const {removeBook} = useContext(BookContext)
    const {dispatch} = useContext(BookContext);
    return ( 
        // <li onClick={() => removeBook(book.id)}>
        <li onClick={() => dispatch({type:'REMOVE_BOOK',id:book.id})}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
     );
}
 
export default BookDetails;