import React,{useContext,useState} from 'react';
import { BookContext } from '../context/BookContext';

const NewBookForm=()=>{
    // without reducer
    // const {addBook}=useContext(BookContext);
    // with reducer
    const {dispatch}=useContext(BookContext);
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        // with reducer
        dispatch({type:'ADD_BOOK',book:{title,author}});
        // addBook(title,author);
        setTitle('');
        setAuthor('');
        // console.log(title)E;E:

        // console.log(author);
    }
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter book title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
        <input type="text" placeholder="enter author" value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
        <input type="submit" value="Add book" />

        </form>
    );
}
export default NewBookForm;