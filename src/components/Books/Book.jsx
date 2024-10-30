/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Book = ({book}) => {
    const {bookImage, bookName, id, rating, tag, writter } = book;
    return (
        <div className="border p-6 rounded-lg" id={id}>
            <div className="space-y-4">
                <img className="w-full md:h-[400px] h-[350px] object-cover border rounded-lg" src={bookImage} alt="" />
                <p ><span className="py-2 px-4 rounded-full bg-green-100 text-green-600 font-semibold">{tag}</span></p>
                <h2>{bookName}</h2>
                <p className="text-black/60">By : {writter}</p>
                <hr /> 
                <div className="flex justify-between items-center text-black/60">
                    <NavLink to={`/fiction/${id}`}>
                        Fiction
                    </NavLink>
                    <p>Rating {rating} ⭐</p>
                </div>
            </div>
        </div>
    );
};

export default Book;