import productImage from "../assets/produto.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetails.css";

const ProductDetails = () => {
    return (
        <div className="product-container">
            <div className="product-image">
                <img src={productImage} alt="Camisa polo sport" />
            </div>

            <div className="product-details">
                <h1 className="product-title">Gola Polo Sport</h1>

                <div className="product-meta">
                    <div className="product-rating-and-reviews">
                        {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon icon={faStar} key={i} />
                        ))}
                        <span className="reviews-count">78 Avaliações</span>
                    </div>

                    <p className="product-price">R$ 100,00</p>

                    <div className="product-colors">
                        <h3>Cores Disponíveis</h3>
                        <ul className="color-list">
                            {["Dark Navy", "Black", "Grey"].map((color) => (
                                <li
                                    key={color}
                                    className="color-option"
                                    data-color={color}
                                    role="button"
                                    aria-label={`Selecionar cor ${color}`}
                                    tabIndex={0}
                                />
                            ))}
                        </ul>
                    </div>

                    <div className="product-sizes">
                        <h3>Selecione o Tamanho</h3>
                        <select
                            id="size-select"
                            name="sizes"
                            defaultValue="medium"
                            aria-label="Selecionar tamanho"
                        >
                            <option value="small">P</option>
                            <option value="medium">M</option>
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
