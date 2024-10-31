import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Fiction = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const book = books.find((book) => book.id === id);
  const {
    bookName,
    bookImage,
    writter,
    tag,
    publisher,
    rating,
    review,
    publishingDate,
    pages,
  } = book;

  const handleAddToLocalStore = (book) => {
    const existingBooks = JSON.parse(localStorage.getItem("bookList")) || [];
    const isStore = existingBooks.some((store) => store.id === book.id);
    if (!isStore) {
      existingBooks.push(book);
      localStorage.setItem("bookList", JSON.stringify(existingBooks));
    } else {
      return alert("book has already selected..");
    }
  };

  return (
    <div className="w-11/12 mx-auto my-12">
      <div>
        <NavLink to="/">
          <p className="text-xl md:text-2xl lg:text-4xl">
            {" "}
            <FaArrowAltCircleLeft />
          </p>
        </NavLink>
      </div>
      {book ? (
        <div className="my-12 grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 lg:gap-12">
          <div className="flex justify-center items-center border rounded-lg">
            <img className="md:h-[450px] h-[350px]" src={bookImage} alt="" />
          </div>
          <div className="space-y-4 p-6">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold">
              {bookName}
            </h3>
            <p className="text-black/80">By : {writter}</p>
            <hr />
            <p className="text-black/80">Fiction</p>
            <hr />
            <p>
              Review:{" "}
              <span className="text-black/70 text-xs md:text-sm">{review}</span>
            </p>
            <p>
              Tag:{" "}
              <span className="text-[#23BE0A] bg-green-100 py-2 px-4 rounded-lg">
                {tag}
              </span>
            </p>
            <table className="text-sm">
              <tbody>
                <tr>
                  <td className="text-black/70 mr-4">Number of pages :</td>
                  <td>{pages}</td>
                </tr>
                <tr>
                  <td className="text-black/70 mr-4">Publisher :</td>
                  <td>{publisher}</td>
                </tr>
                <tr>
                  <td className="text-black/70 mr-4">Year of publishing :</td>
                  <td>{publishingDate}</td>
                </tr>
                <tr>
                  <td className="text-black/70 mr-4">Rating : </td>
                  <td>{rating}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <button
                onClick={() => {
                  handleAddToLocalStore(book);
                }}
                className="md:py-2 md:px-4 py-1.5 px-2.5 text-base md:text-lg rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white font-semibold border-2 border-[#23BE0A]"
              >
                Read
              </button>
              <button
                onClick={() => {
                  handleAddToLocalStore(book);
                }}
                className="md:py-2 md:px-4 py-1.5 px-2.5 text-base md:text-lg rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white font-semibold border-2 border-[#23BE0A] ml-4"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Book is not founded</div>
      )}
      ;
    </div>
  );
};

export default Fiction;
