import productImage from "../assets/produto.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
    return (
        <div className="product-container">
            <div className="product-image">
                <img src={productImage} alt="Camisa" />
            </div>
            <div className="product-details">
                <h1 className="product-title">Gola polo sport</h1>
                <div className="product-meta">
                    <div className="product-rating-and-reviews">
                        <div className="product-rating">
                            {/* Use o componente FontAwesomeIcon para renderizar as estrelas */}
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <span className="reviews-count">78 Avaliações</span>
                        </div>
                    </div>
                    <p className="product-price">R$ 100,00</p>
                    <div className="product-colors">
                        <h3>Cores Disponíveis</h3>
                        <ul className="color-list">
                            <li
                                className="color-option"
                                data-color="Dark Navy"
                            ></li>
                            <li
                                className="color-option"
                                data-color="Black"
                            ></li>
                            <li className="color-option" data-color="Grey"></li>
                        </ul>
                    </div>
                    <div className="product-sizes">
                        <h3>Selecione o Tamanho</h3>
                        <select id="size-select" name="sizes">
                            <option value="small">P</option>
                            <option value="medium" selected>
                                M
                            </option>
                            <option value="large">G</option>
                        </select>
                    </div>
                    <button className="add-to-cart-btn">
                        Adicionar ao Carrinho
                    </button>
                </div>
                <div className="product-description">
                    <h2>Detalhes do Produto</h2>
                    <p>
                        Camisa de alta qualidade, feita com material nobre e
                        importado.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
