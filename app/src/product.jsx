import React, { useState } from 'react';
import './styles/product.css'
import Footer from "./components/Footer";
import SiteSections from "./components/SiteSections";

const Product = (Props) => {

    const [value, setValue] = useState(1);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

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
                                <h3>Vendido e entregue por Hortifood</h3>
                                <a href="index.css">Ver mais informações</a>
                                <h1>{Props.Product.price} R$</h1>
                                <div className="labels_for_slider">
                                    <p>Verde</p>
                                    <p>Ao ponto</p>
                                    <p>Madura</p>
                                </div>
                                <input type="range"
                                    id="rangeInput"
                                    className="fruit_point"
                                    name="rangeInput"
                                    min={0} max={2} step={1}
                                    value={value}
                                    onChange={handleChange}
                                    >
                                </input>
                                <p>Valor selecionado: {value}</p>
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