/* eslint-disable react/prop-types */

import { Link, NavLink } from "react-router-dom";

const Book = ({ book }) => {
  const { bookImage, bookName, id, rating, tag, writter } = book;
  return (
    <Link to={`/fiction/${id}`}>
      <section className="h-full">
        <div className="card border shadow-xl h-full">
          <figure className="p-6 bg-base-300 rounded-lg">
            <img
              className="w-[200px] h-[250px] object-cover border rounded-lg"
              src={bookImage}
              alt="Book"
            />
          </figure>
          <div className="card-body p-4 space-y-2">
            <h2 className="card-title text-base">
              Tag
              <div className="badge badge-secondary">{tag}</div>
            </h2>
            <h2 className="text-lg font-medium">{bookName}</h2>
            <p className="text-black/60">By: {writter}</p>
            <div className="divider divider-neutral"></div>
            <div className="flex justify-between items-center text-black/60">
              <p>Fiction</p>
              <p className="text-end">Rating {rating} ⭐</p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Book;
