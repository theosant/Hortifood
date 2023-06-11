import React, { useState } from 'react';
import '../styles/product.css'
import FruitPoint from '../components/FruitPoint'

const Product = ({product}) => {

    const [fruitPoint, setFruitPoint] = useState(1);
    const handleFruitPointChange = (event) => {
        setFruitPoint(event.target.value);
    };

    const [quantity, setQuantity] = useState(100);

    const handleMinusClick = () => {
        if(quantity > 100){
            setQuantity(quantity - 100);
            setPrice(price - (product.price * 0.01));
        }
    }
    const handlePlusClick = () => {
        setQuantity(quantity + 100);
        setPrice(price + (product.price * 0.01))
    }
    
    const [price, setPrice] = useState(product.price * 0.01);

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <div>
                <div className="background_product">
                    <table>
                        <tr>
                            <td className="product_image_container">
                                <img src={product.src} alt="produto!"></img>
                            </td>
                            <td className="product_data_container">
                                <h1>{product.name}</h1>

                                <h3
                                    style={{ color: "#7A7A7A", fontSize: "15px", fontWeight: 400, marginBottom: 20 + "px"}}
                                >Vendido e entregue por Hortifood</h3>

                                <FruitPoint width = {350} height = {15}/>

                                <h1 style={{color: "#334932", marginTop: 30 + "px"}}>{product.price} R$</h1>

                                <div className="quantityInput">
                                    <span
                                        onClick={handleMinusClick}
                                        style={{ cursor: 'pointer', maxWidth: "40px"  }}
                                        >-</span>
                                    <span id="quantity">{quantity} g</span>
                                    <span
                                        onClick={handlePlusClick}
                                        style={{ cursor: 'pointer', maxWidth: "40px" }}
                                        >+</span>
                                </div>
                                
                                <h2 style={{color: "#4A8149"}}>Preço: {price.toFixed(2)} R$</h2>

                                <button id="addToCart">Adicionar ao Carrinho</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};  

export default Product;