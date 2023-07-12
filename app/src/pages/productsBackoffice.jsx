import "../styles/products.css";
import Card from "../components/Card"
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SiteSections from "../components/SiteSections";

const ProductsBackoffice = ({HandlerClick}) => {
    const navigate  = useNavigate(); 
    const {tipo} = useParams()
    let src = `/imagens/banner${tipo}.jpg`;
    
    const [addProduct, setAddProduct] = useState(null);
    const [products, setProducts] = useState(null);
    
    const handleAddProductClick = () => {
        let input_src = document.getElementById("newProductSRC");
        let input_name = document.getElementById("newProductName");
        let input_price = document.getElementById("newProductPrice");
        let input_type = document.getElementById("newProductType");
        let input_stock = document.getElementById("newProductStock");
        let input_season = document.getElementById("newProductSeason");
        let input_highlight = document.getElementById("newProductHighlight");

        let newProduct = {
            srcUrl:input_src.value,
            name: input_name.value,
            price: input_price.value,
            type: input_type.value,
            on_stock: input_stock.value,
            season: input_season.checked,
            highlight: input_highlight.checked,
        }

        fetch(`http://localhost:3001/product/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
        .then((response) => {
            if (response.ok) {
                console.log('Produto adicionado com sucesso!');
            } else {
                console.error('Erro ao adicionar o produto');
            }
        })
        .catch((error) => {
            console.error('Erro ao adicionar o produto:', error);
        });
        navigate(0)
    }

    useEffect(() => {
        async function readProductsByType(tipo){
            try {
                const response = await fetch('http://localhost:3001/product/');
                const data = await response.json();
                const produtos = data.filter((obj) => obj.type === tipo);
                if(produtos.length === 0){
                    navigate('/404');
                }
                return produtos
            } catch (error) {
                console.error('Error fetching data:', error);
                }
            
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
            <SiteSections type="regular" backOffice={true}/>
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
                        <span>Nome do arquivo de imagem: </span><input id="newProductSRC" type="text"></input><br />
                        <span>Preço por quilo: </span><input id="newProductPrice" type="text"></input><br />
                        <span>Tipo do produto:  </span>
                        <select id="newProductType">
                            <option>frutas</option>
                            <option>vegetais</option>
                            <option>sucos</option>
                        </select><br />
                        <span>Quantidade em estoque: </span><input id="newProductStock" type="text"></input>por L ou Kg<br />
                        <span>Temporada?: </span><input id="newProductSeason" type="checkbox"></input><br />
                        <span>Destaque?: </span><input id="newProductHighlight" type="checkbox"></input><br />
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