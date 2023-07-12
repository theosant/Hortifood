import "../styles/products.css";
import Card from "../components/Card"
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SiteSections from "../components/SiteSections";

const Products = ({HandlerClick, backOffice}) => {
    const navigate = useNavigate();
    const {tipo} = useParams()
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
            const produtos = JSON.parse(localStorage.produtos).filter((obj) => obj.type === tipo);
            if(produtos.length === 0){
                navigate('/404');
            }
            return produtos
        }
        readProductsByType(tipo).then( (resposta) => {
            setProducts(resposta)})
    }, [tipo]);

    if(!products){
        return (
            <div>
                <div className="site_section_banner">
                    {/* <img src={src} alt="banner" /> */}
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
            <div className="cards_container">
                <div className="products_container" style={{display: "inline-block"}}>
                    {products.map((product) => (
                        <div className="cardDisplay">
                            <Card card = {product} backOffice={backOffice} HandlerClick={HandlerClick} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
};

export default Products