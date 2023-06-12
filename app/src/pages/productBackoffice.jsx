import React, { useState, useEffect } from 'react'
import '../styles/product.css'
import { useParams } from 'react-router-dom';

function ProductBackoffice({cardInfos, HandlerClick}) {

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

    const handleInputChange = (event) => {
        product.name = event.target.textContent;
    };

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <div>
                <div className="background_product">
                    <table>
                        <tr>
                            <td className="product_image_container">
                                <img alt="produto!"></img>
                            </td>
                            <td className="product_data_container">
                                {product ? <h1>{product.name}</h1> : <h1>Carregando</h1>}

                                <h3
                                    style={{ color: "#7A7A7A", fontSize: "15px", fontWeight: 400, marginBottom: 20 + "px"}}
                                >Vendido e entregue por Hortifood</h3>

                                <FruitPoint width = {350} height = {15}/>

                                <h1 style={{color: "#334932", marginTop: 30 + "px"}}>... R$</h1>

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
                                
                                <h2 style={{color: "#4A8149"}}>Preço: ... R$</h2>

                                <button  id="addToCart">Adicionar ao Carrinho</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductBackoffice