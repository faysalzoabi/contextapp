import React, {useContext, useState} from 'react'
import {BookContext} from '../Context/BookContext'
const Bookform = () => {
    // const {addBook} = useContext(BookContext)
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, author);
        // addBook(title, author);
        dispatch({type:'ADD_BOOK', book:{
            title:title, author:author
        }})
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={title}
                    onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="author" value={author}
                    onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value="add book"/>
        </form>
      );
}
 
export default Bookform;