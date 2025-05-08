import {
    FaExternalLinkAlt,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3 className="footer-title">Sobre</h3>
                        <p className="footer-text">
                            Projeto demonstrativo de tela de produto para
                            e-commerce.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Links Úteis</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="#" className="footer-link">
                                    Termos de Uso
                                </a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">
                                    Política de Privacidade
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Redes Sociais</h3>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">
                        © {year} Projeto &quot;Tela de Produto&quot; - Todos os
                        direitos reservados
                    </p>
                    <p className="footer-credits">
                        Desenvolvido por{" "}
                        <a
                            href="https://portfolio-cleiton.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                            aria-label="Portfólio do desenvolvedor (abre em nova aba)"
                        >
                            <span>Cleiton Santos</span>
                            <FaExternalLinkAlt className="link-icon" />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
