import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className="header">
            <div className="nav-container">
                <nav>
                    <ul className="nav-links">
                        <li>
                            <a href="#">Camisas</a>
                        </li>
                        <li>
                            <a href="#">Calças</a>
                        </li>
                        <li>
                            <a href="#">Acessórios</a>
                        </li>
                    </ul>
                </nav>
                <img id="logo" src={logo} alt="Loja de roupas" />
                <div className="header-icons">
                    <div className="icon search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div className="icon cart-icon">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
