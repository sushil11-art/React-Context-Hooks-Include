import React,{createContext,useReducer,useEffect} from 'react';
// import {useState} from 'react';
// import {v1 as uuid} from "uuid"; 
import { bookReducer } from '../reducers/bookReducer';

export const BookContext=createContext();

const BookContextProvider=(props)=>{
    // with reducer
    const [books,dispatch]=useReducer(bookReducer,[],()=>{
        const localData=localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []
    })
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books));
    },[books]);
    // without reducer
    // const [books,setBooks]=useState([
    //     {title:'first book',author:'Sushil',id:1},
    //     {title:'second book',author:'Sujan',id:2},
    //     {title:'third book',author:'aasish',id:3},
    // ]);

    // without reducer .....with context
    // const addBook=(title,author)=>{
    //     setBooks([...books,{title:title,author:author,id:uuid()}])
    // };
    // const removeBook=(id)=>{
    //     setBooks(books.filter(book=>book.id !== id));
    // };
        return (
            // <BookContext.Provider value={{books,addBook,removeBook}}>
            <BookContext.Provider value={{books,dispatch}} >
                {props.children}
            </BookContext.Provider>
        );

}

export default BookContextProvider;