import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("Book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <>
      <div className="my-4 md:my-6 lg:my-12 flex justify-center items-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Books</h2>
      </div>
      <div className="w-11/12 mx-auto my-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {books.map((book, index) => (
          <Book key={index} book={book}></Book>
        ))}
      </div>
    </>
  );
};

export default Books;
