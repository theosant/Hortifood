import "../styles/products.css";
import Card from "../components/Card"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Products = () => {
    const {tipo} = useParams()
    let src = `/banner_${tipo}.jpg`;

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
            <div className="site_section_banner">
                <img src={src} alt="banner" />
            </div>
            <div className="products_container" style={{display: "inline-block"}}>
                {
                    products.map((product) => (
                        <Card card = {product} />
                    ))
                }
            </div>

        </div>
    )
};

export default Products