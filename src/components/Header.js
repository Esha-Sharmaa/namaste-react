import logo from "../../images/png/color.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
const Header = () => {
    const [status, setStatus] = useState(false);
    return (
        <header>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>

            <nav>
                <a className="nav-items" href="#"> <FontAwesomeIcon icon={faShoppingCart} className="cart" /></a>
                <button className="nav-items" href="#" id="signup" onClick={() => setStatus(!status)}> { status ? "Sign out" : "Sign in"}</button>
            </nav>
        </header>
    );
}

export default Header;