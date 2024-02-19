import logo from "../../images/png/color.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [status, setStatus] = useState(false);
    return (
        <header>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>

            <nav>
                <Link className="nav-items" to="/cart"> <FontAwesomeIcon icon={faShoppingCart} className="cart" /></Link>
                <Link className="nav-items" to="/About"> About us </Link>
                <button className="nav-items" href="#" id="signup" onClick={() => setStatus(!status)}> { status ? "Sign out" : "Sign in"}</button>
            </nav>
        </header>
    );
}

export default Header;