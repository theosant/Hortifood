import "../styles/products.css";
import Card from "../components/Card"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SiteSections from "../components/SiteSections";


const ProductsBackoffice = ({HandlerClick}) => {
    const tipo = "fruta";
    let src = `/imagens/banner${tipo}.jpg`;

    const [products, setProducts] = useState(null);
    useEffect(() => {
        function delay(){
            return new Promise(function(resolve) {
                setTimeout(resolve, 100);
            });
        }
    
        async function readProductsByType(tipo){
            await delay();
            return JSON.parse(localStorage.produtos).filter((obj) => obj.type === tipo);
        }
        readProductsByType(tipo).then( (resposta) => {
            setProducts(resposta)})
    }, [tipo]);

    if(!products){
        return (
            <div>
                <div className="site_section_banner">
                    <img src={src} alt="banner" />
                </div>
                <div className="products_container" style={{display: "inline-block"}}>
                </div>
            </div>
        )
    }
    
    return (
        <div>
            <SiteSections type="regular"/>
            <div className="site_section_banner">
                <h1>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h1>
                <img src={src} alt="banner" />
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <button className="add_products">
                    ADICIONAR PRODUTOS AO CATÁLOGO
                </button>
            </div>
            <div className="cards_container">
                <div className="products_container" style={{display: "inline-block"}}>
                    {products.map((product) => (
                        <div className="cardDisplay">
                            <Card card = {product} HandlerClick={HandlerClick} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
};

export default ProductsBackoffice