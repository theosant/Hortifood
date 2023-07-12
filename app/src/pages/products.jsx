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
        const fetchData = async () => {
            try {
            const response = await fetch('http://localhost:3001/product/');
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, []);

    useEffect(() => {
        async function readProductsByType(tipo){
            try {
                const response = await fetch('http://localhost:3001/product/');
                const data = await response.json();
                const produtos = data.filter((obj) => obj.type === tipo && obj.on_stock > 0);
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