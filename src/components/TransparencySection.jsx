import "./TransparencySection.css";

const TransparencySection = () => {
    return (
        <div className="transparency-section">
            <div className="transparency-box">
                <h2>Transparência Total</h2>
                <p>
                    Compreender e valorizar a importância de nossa vestimenta é
                    fundamental no aprendizado de viver com menos. Quanto mais
                    sabemos, melhores decisões fazemos, mais valorizamos o que
                    temos, e como resultado - menos necessitaremos.
                </p>
            </div>
            <div className="transparency-box">
                <h3>Custo de Produção</h3>
                <p>Detalhes todos os custos que temos para criar o produto.</p>
                <a href="#">Ver detalhamento de custos</a>
            </div>
            <div className="transparency-box">
                <h3>Rastreabilidade</h3>
                <p>Saiba de onde vem o material para as suas roupas.</p>
                <a href="#">Mostrar origem do produto</a>
            </div>
            <div className="transparency-box">
                <h3>Impacto de CO2</h3>
                <p>
                    Veja a redução de impacto ambiental que tivemos no ano de
                    2024.
                </p>
                <a href="#">Mostrar estudo</a>
            </div>
        </div>
    );
};

export default TransparencySection;
