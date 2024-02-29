import logo from "../../images/png/color.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [status, setStatus] = useState(false);
    return (
        <header className="flex justify-between h-18 shadow-md px-12 py-2">
            <div className="">
                <img className="w-24" src={logo} alt="logo" />
            </div>

            <nav className="flex items-center gap-10">
                <button className="text-xl  font-medium" href="#" id="signup" onClick={() => setStatus(!status)}> {status ? "Sign out" : "Sign in"}</button>
                <button className="text-xl  font-medium" href="#" id="signup" > Offers </button>
                <button className="text-xl  font-medium" href="#" id="signup" > Help </button>
                <Link className="text-2xl text-custom-default" to="/cart"> <FontAwesomeIcon icon={faShoppingCart} className="cart" /></Link>
                
            </nav>
        </header>
    );
}

export default Header;