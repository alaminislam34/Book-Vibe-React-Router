import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isTrue, setTrue] = useState(true);
  const [isSticky, setSticky] = useState(false);
  const handleSticky = () => {
    if (window.scrollY > 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/signIn");
  };
  const handleSignUp = () => {
    navigate("/signUp");
  };
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/list">Listed Books</NavLink>
      <NavLink to="/read">Pages to Read</NavLink>
    </>
  );
  return (
    <div
      className={`duration-300 ease-in ${
        isSticky
          ? "sticky top-0 left-0 bg-white/50 backdrop-blur-lg py-2 md:py-4 lg:py-6"
          : ""
      } lg:py-12 md:py-8 py-4 z-50`}
    >
      <header className="w-11/12 mx-auto flex justify-between items-center">
        <div className="flex flex-row gap-2 justify-center items-center">
          <div className="md:hidden">
            <div onClick={() => setTrue(!isTrue)} className="py-2">
              {isTrue ? <RiMenu2Line /> : <RxCross1 />}
            </div>

            <ul
              className={`absolute duration-1000 ${
                isTrue ? "-left-52" : "left-4"
              } flex flex-col border border-[#23BE0A] p-4 bg-white text-[#23BE0A] rounded-lg gap-2`}
            >
              {links}
            </ul>
          </div>
          <NavLink>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
              Book Vibe
            </h2>
          </NavLink>
        </div>
        <nav className="md:flex hidden justify-between items-center text-black/60 item">
          {links}
        </nav>
        <div className="flex flex-row gap-2">
          <NavLink to="/signIn">
            <button
              onClick={handleSignIn}
              className="py-1.5 px-2.5 md:py-2 md:px-4 rounded-lg hover:bg-[#23BE0A] hover:text-white border border-[#23BE0A] text-xs sm:text-sm md:text-base"
            >
              Sign in
            </button>
          </NavLink>
          <NavLink to="/signUp">
            <button
              onClick={handleSignUp}
              className="py-1.5 px-2.5 md:py-2 md:px-4 rounded-lg hover:bg-[#23BE0A] hover:text-white border border-[#23BE0A] text-xs sm:text-sm md:text-base"
            >
              Sign Up
            </button>
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
