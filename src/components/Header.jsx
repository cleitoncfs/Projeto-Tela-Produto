import { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faShoppingCart,
    faBars,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {/* Overlay escurecido */}
            {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

            <header className="header" data-aos="fade-down">
                <div className="nav-container">
                    <button
                        className="hamburger"
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>

                    <img id="logo" src={logo} alt="Loja de roupas" />

                    <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <li>
                            <a href="#" onClick={closeMenu}>
                                Camisas
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={closeMenu}>
                                Calças
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={closeMenu}>
                                Acessórios
                            </a>
                        </li>
                    </nav>

                    <div className="header-icons">
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="icon"
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
