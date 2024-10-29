import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    const handleSignIn = () => {
        navigate('/signIn')
    }
    const handleSignUp = () => {
        navigate('/signUp')
    }
    return (
        <div className="py-12">
            <header className="w-11/12 mx-auto flex justify-between items-center">
                <NavLink>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Book Vibe</h2>
                </NavLink>
                <nav className="flex justify-between items-center text-black/60 item">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/list">Listed Books</NavLink>
                    <NavLink to="/read">Pages to Read</NavLink>
                </nav>
                <div className="btn flex flex-row gap-2">
                    <NavLink to="/signIn"><button onClick={handleSignIn} >Sign in</button></NavLink>
                    <NavLink to="/signUp"><button onClick={handleSignUp} >Sign Up</button></NavLink>
                </div>
            </header>
        </div>
    );
};

export default Navbar;