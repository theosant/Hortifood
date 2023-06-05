import React, { useState } from 'react';
import './styles/product.css'
import Footer from "./components/Footer";
import SiteSections from "./components/SiteSections";

const Product = (Props) => {

    const [fruitPoint, setFruitPoint] = useState(1);
    const handleFruitPointChange = (event) => {
        setFruitPoint(event.target.value);
    };
    
    const [quantity, setQuantity] = useState(100);
    
    const handleMinusClick = () => {
        if(quantity > 100){
            setQuantity(quantity - 100);
            setPrice(price - (Props.Product.price * 0.01));
        }
    }
    const handlePlusClick = () => {
        setQuantity(quantity + 100);
        setPrice(price + (Props.Product.price * 0.01))
    }
    
    const [price, setPrice] = useState(Props.Product.price * 0.01);
    
    // console.log(quantity * 0.1 * );

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <SiteSections type = "regular" />
            <div>
                <div className="background_product">
                    <table>
                        <tr>
                            <td className="product_image_container">
                                <img src="/images/banana.png" alt="produto!"></img>
                            </td>
                            <td className="product_data_container">
                                <h1>{Props.Product.name}</h1>

                                <h3
                                    style={{ color: "#7A7A7A", fontSize: "15px", fontWeight: 400, marginBottom: 20 + "px"}}
                                >Vendido e entregue por Hortifood</h3>

                                <div className="labels_for_slider">
                                    <p className="verde">Verde</p>
                                    <p className="ao_ponto">Ao ponto</p>
                                    <p className="madura">Madura</p>
                                </div>

                                <input type="range"
                                    className="fruit_point"
                                    name="rangeInput"
                                    min={0} max={2} step={1}
                                    value={fruitPoint}
                                    onChange={handleFruitPointChange}
                                    >
                                </input> {/* <p>Valor selecionado: {fruitPoint}</p> */}

                                <h1 style={{color: "#334932", marginTop: 30 + "px"}}>{Props.Product.price} R$</h1>

                                <div className="quantityInput">
                                    <span
                                        id="minus"
                                        onClick={handleMinusClick}
                                        style={{ cursor: 'pointer' }}
                                        >-</span>
                                    <span id="quantity">{quantity} g</span>
                                    <span
                                        id="plus"
                                        onClick={handlePlusClick}
                                        style={{ cursor: 'pointer' }}>+</span>
                                </div>
                                
                                <h2 id="finalPrice">Preço: {price.toFixed(2)}</h2>

                                <button id="addToCart">Adicionar ao Carrinho</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};  

export default Product;