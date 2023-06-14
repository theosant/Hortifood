import React, { useState, useEffect} from 'react';
import '../styles/product.css'
import FruitPoint from '../components/FruitPoint'
import { useParams } from 'react-router-dom';

const Product = ({HandlerClick}) => {

    const [product, setProduct] = useState(null);
    let { id } = useParams();
    id = parseInt(id);

    useEffect(() => {
        function delay(){
            return new Promise(function(resolve) {
                setTimeout(resolve, 100);
            });
        }
    
        async function readProductById(id){
            await delay();
            return JSON.parse(localStorage.produtos).find((obj) => obj.id === id);
        }
        readProductById(id).then( (resposta) => {
            setProduct(resposta)})
    }, [id]);


    const [fruitPoint, setFruitPoint] = useState(1);
    const handleFruitPointChange = (event) => {
        setFruitPoint(event.target.value);
    };

    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const handleQuantityInput = (event) => {
        if(quantity > 100 && quantity < 10000){
            console.log(event.value)
            setQuantity(event.value);
            setPrice(event.value * 0.1 * product.price);
        }
    }
    
    console.log(quantity);
    const handleMinusClick = () => {
        if(quantity > 100){
            setQuantity(quantity - 100);
            setPrice(price - (product.price * 0.1));
        }
    }
    const handlePlusClick = () => {
        setQuantity(quantity + 100);
        setPrice(price + (product.price * 0.1))
    }
    
    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <div>
                <div className="background_product">
                    <table>
                        <tr>
                            <td className="product_image_container">
                                <img src={product ?  product.src : ""} alt="produto!"></img>
                            </td>
                            <td className="product_data_container">
                                {product ? <h1>{product.name}</h1> : <h1>Carregando...</h1>}

                                <h3
                                    style={{ color: "#7A7A7A", fontSize: "15px", fontWeight: 400, marginBottom: 20 + "px"}}
                                >Vendido e entregue por Hortifood</h3>

                                <FruitPoint width = {350} height = {15}/>

                                <h1 style={{color: "#334932", marginTop: 30 + "px"}}>R$ {product ?  product.price : "..."}/Kg</h1>

                                <div>

                                    <div className="quantityInput">
                                        <span
                                            onClick={handleMinusClick}
                                            style={{ cursor: 'pointer', maxWidth: "40px"  }}
                                            >-</span>
                                        <input type="number" onChange={handleQuantityInput} value={quantity} id="quantity"/>
                                        <span
                                            onClick={handlePlusClick}
                                            style={{ cursor: 'pointer', maxWidth: "40px" }}
                                            >+</span>
                                    </div>
                                    <span style={{display: "inline-block", marginLeft: "15.5%"}}>gramas</span>
                                </div>
                                <h2 style={{color: "#4A8149"}}>Total: R${price.toFixed(2)}</h2>

                                <button onClick={() => HandlerClick(product)} id="addToCart">Adicionar ao Carrinho</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Product;