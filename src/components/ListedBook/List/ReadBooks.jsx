/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { MdOutlineGroup } from "react-icons/md";
import { TbPageBreak } from "react-icons/tb";
import { useState } from "react";

const ReadBooks = () => {
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem("bookList")) || [];
  });
  return data.length === 0 ? (
    <p className="text-xl md:text-2xl lg:text-4xl font-bold my-4 md:my-6 lg:my-12 text-center">
      No Read Book Available
    </p>
  ) : (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold">
        Read list : {data.length}
      </h1>
      <div>
        {data.map((book, index) => (
          <div
            key={index}
            className="border p-4 md:p-6 lg:p-8 rounded-lg my-4 flex flex-col md:flex-row justify-start items-center gap-4 md:gap-6 lg:gap-12"
          >
            <div className="p-4 rounded-lg bg-gray-200 flex justify-center items-center">
              <img
                className="w-[200px] h-[220px] object-cover"
                src={book.bookImage}
                alt=""
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                {book.bookName}
              </h2>
              <p className="text-black/70 font-medium text-sm md:text-base">
                By: {book.writter}
              </p>
              <div className="flex flex-wrap justify-between gap-4 items-center space-y-4">
                <p>
                  Tag :{" "}
                  <span className="py-1 px-2 md:py-2 md:px-4 rounded-full bg-[#dffada] text-[#23BE0A] inline-block text-xs md:text-sm lg:text-base">
                    {book.tag}
                  </span>
                </p>
                <p className="flex justify-center items-center gap-2 text-xs md:text-sm lg:text-base">
                  <SlCalender /> Year of Publishing: {book.publishingDate}
                </p>
              </div>
              <div className="flex justify-between items-center text-black/70 text-xs md:text-sm lg:text-base space-y-4">
                <p className="flex gap-2 justify-center items-center">
                  <MdOutlineGroup /> Publisher: {book.publisher}
                </p>
                <p className="flex gap-2 justify-center items-center text-xs md:text-sm lg:text-base">
                  <TbPageBreak /> Pages: {book.pages}
                </p>
              </div>
              <hr />
              <div className="flex flex-wrap gap-4 items-center">
                <div>
                  <p className="flex-1 py-1 px-2 md:py-2 md:px-3 rounded-full bg-blue-100 text-blue-500 text-xs md:text-sm lg:text-base">
                    Category: {book.category}
                  </p>
                </div>
                <div>
                  <p className="text-yellow-400 bg-yellow-50 py-1 px-2 md:py-2 md:px-3 rounded-full text-xs md:text-sm lg:text-base">
                    Rating {book.rating} ⭐
                  </p>
                </div>
                <div>
                  <Link>
                    <button className="py-2 text-xs md:text-sm lg:text-base px-3 md:py-2.5 md:px-4 rounded-full text-white bg-[#23BE0A] font-semibold">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadBooks;
