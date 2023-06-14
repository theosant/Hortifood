import "../styles/products.css";
import Card from "../components/Card"
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SiteSections from "../components/SiteSections";


const ProductsBackoffice = () => {
    const navigate  = useNavigate(); 
    const tipo = "fruta";
    let src = `/imagens/banner${tipo}.jpg`;
    
    const [addProduct, setAddProduct] = useState(null);
    const [products, setProducts] = useState(null);
    
    const handleAddProductClick = () => {
        var input_id = document.getElementById("newProductId");
        var input_src = document.getElementById("newProductSRC");
        var input_name = document.getElementById("newProductName");
        var input_price = document.getElementById("newProductPrice");
        var input_type = document.getElementById("newProductType");
        var input_stock = document.getElementById("newProductStock");

        var newProduct = {
            id: input_id.value,
            src: "/imagens/" + input_src.value,
            name: input_name.value,
            price: input_price.value,
            type: input_type.value,
            stock: input_stock.value,
        }
    }

    const HandlerClick = () => {
        navigate('/produtoback');
    };

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
                {!addProduct ?
                    <button className="add_products" onClick={() => setAddProduct(true)}>
                        ADICIONAR PRODUTO AO CATÁLOGO
                    </button>
                :
                    <div className="add_product_tab">
                        <h1>Novo produto</h1>
                        <span>Nome: </span><input id="newProductName" type="text"></input><br />
                        <span>ID: </span><input id="newProductId" type="text"></input><br />
                        <span>Nome do arquivo de imagem: </span><input id="newProductSRC" type="text"></input><br />
                        <span>Preço por quilo: </span><input id="newProductPrice" type="text"></input><br />
                        <span>Tipo: </span><input id="newProductType" type="text"></input><br />
                        <span>Quantidade em estoque: </span><input id="newProductStock" type="text"></input>Kg<br />
                        <span>Season?: </span><input id="newProductSeason" type="check-box"></input><br />
                        <button onClick={handleAddProductClick}>Adicionar</button>
                    </div>
                }
            </div>
            <div className="cards_container">
                <div className="products_container" style={{display: "inline-block"}}>
                    {products.map((product) => (
                        <div className="cardDisplay">
                            <Card card = {product} HandlerClick={HandlerClick} backOffice/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
};

export default ProductsBackoffice