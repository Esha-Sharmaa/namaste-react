import logo from "../../images/png/color.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="search-container">
                <input className="search" type="text" placeholder="kiya khana hai batao" />
            </div>
            <nav>
                {/* <div className="nav-link"> */}
                <a className="nav-items" href="#"> <FontAwesomeIcon icon={faShoppingCart} className="cart" /></a>
                <a className="nav-items" href="#" id="signup"> Sign Up</a>
                {/* </div> */}
            </nav>
        </header>
    );
}

export default Header;