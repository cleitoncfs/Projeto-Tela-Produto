import { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faShoppingCart,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("Estado anterior:", menuOpen);
        setMenuOpen(!menuOpen);
        console.log("Novo estado:", !menuOpen);
    };

    return (
        <header className="header">
            <div className="nav-container">
                {/* Botão Hamburger */}
                <button className="hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Logo */}
                <img id="logo" src={logo} alt="Loja de roupas" />

                {/* Links de Navegação */}
                <nav>
                    <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
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

                {/* Ícones do Cabeçalho */}
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
