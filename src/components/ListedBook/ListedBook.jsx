import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ListedBook = () => {
    const navigate = useNavigate();
    const [isActive, setActive] = useState("read");

    const handleBtn1 = () => {
        navigate('/list/readBooks');
        setActive('read')
    }
    const handleBtn2 = () => {
        navigate('/list/wishBooks');
        setActive('wish')
    }
    return (
        <div className="w-11/12 mx-auto">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold py-6 bg-gray-200 text-center rounded-lg">Books</h3>
            <div className="my-4 flex justify-center items-center">
                <select name="Sort by" className="py-3 px-6 rounded-lg text-base md:text-lg bg-[#23BE0A] text-white font-semibold outline-none">
                    <option disabled selected>Sort by</option>
                    <option >Pages</option>
                </select>
            </div>
            <div className="my-4 md:my-12 flex flex-row justify-start items-center gap-2 md:gap-3 lg:gap-4 border-b border-[#23BE0A]">
                <button onClick={handleBtn1} className={`py-2 px-4 rounded-t-lg ${isActive == 'read' ? 'border-t-2 border-l-2 border-r-2 border-[#23BE0A] text-[#23BE0A]' : 'border-white'} font-semibold border-l-2 border-r-2 border-t-2 `}>Read Books</button>

                <button onClick={handleBtn2} className={`py-2 px-4 rounded-t-lg ${isActive == 'wish' ? 'border-t-2 border-l-2 border-r-2 border-[#23BE0A] text-[#23BE0A]' : 'border-white'} font-semibold border-l-2 border-r-2 border-t-2 `}>Wishlist Books</button>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBook;