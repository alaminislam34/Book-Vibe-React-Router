
import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('Book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <>
        <div className="w-11/12 mx-auto my-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
        </div>
        </>
    );
};

export default Books;