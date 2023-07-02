import React, { useState, useEffect } from 'react'
import '../styles/product.css'
import { useNavigate, useParams } from 'react-router-dom';

function ProductBackoffice() {
    console.log("backoffice")

    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    let { id } = useParams();
    id = parseInt(id);

    console.log(id);

    useEffect(() => {
        function delay(){
            return new Promise(function(resolve) {
                setTimeout(resolve, 100);
            });
        }
    
        async function readProductById(id){
            await delay();
            const produto = JSON.parse(localStorage.produtos).find((obj) => obj.id === id);
            if(!produto){
                navigate('/404');
            }
            return produto
        }
        readProductById(id).then( (resposta) => {
            console.log(resposta);
            resposta.amount = 0;
            resposta.ponto = 2;
            setProduct(resposta);
        })
    }, [id]);

    // console.log(product)
    // let { id } = useParams();
    // id = parseInt(id);

    // useEffect(() => {
    //     function delay(){
    //         return new Promise(function(resolve) {
    //             setTimeout(resolve, 100);
    //         });
    //     }
    
    //     async function readProductById(id){
    //         await delay();
    //         return JSON.parse(localStorage.produtos).find((obj) => obj.id === id);
    //     }
    //     readProductById(id).then( (resposta) => {
    //         setProduct(resposta)})
    // }, [id]);

    
    const styles = {
        editing: {
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#CACACA",
            
        },
        not_editing: {
            border: "none",
            borderRadius: "5px",
            backgroundColor: "white",
            textDecoration: "underline"
        },
    };
    const [nameEditStyle, setNameEditStyle] = useState(styles.not_editing);
    const [priceEditStyle, setPriceEditStyle] = useState(styles.not_editing);
    const [quantityEditStyle, setQuantityEditStyle] = useState(styles.not_editing);
    
    const handleNameChange = (event) => {
        product.name = event.target.textContent;
    };
    const [nameChange, setNameChange] = useState(false);
    const handleNameEdit = () => {
        setNameChange(!nameChange);
        if(!nameChange) setNameEditStyle(styles.editing);
        else setNameEditStyle(styles.not_editing);
    }
    
    const handlePriceChange = (event) => {
        product.price = event.target.textContent;
    };
    const [priceChange, setPriceChange] = useState(false);
    const handlePriceEdit = () => {
        setPriceChange(!priceChange);
        if(!priceChange) setPriceEditStyle(styles.editing);
        else setPriceEditStyle(styles.not_editing);
    }
    
    const handleQuantityChange = (event) => {
        product.price = event.target.textContent;
    };
    const [quantityChange, setQuantityChange] = useState(false);
    const handleQuantityEdit = () => {
        setQuantityChange(!quantityChange);
        if(!quantityChange) setQuantityEditStyle(styles.editing);
        else setQuantityEditStyle(styles.not_editing);
    }

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <div>
                <div className="background_product">
                    <table>
                        <tr>
                            <td className="product_image_container">
                                {product ?
                                <img alt="produto!" src={product.src}></img>
                                :
                                <h1>Carregando</h1>}
                            </td>

                            <td className="product_data_container">
                                {product ?
                                    <>
                                        <h1
                                            style={{display: "inline-block"}}
                                            contentEditable={nameChange}
                                            onBlur={handleNameChange}
                                        >{product.name}</h1>
                                        <button style={nameEditStyle} onClick={handleNameEdit}>Editar nome</button>
                                    </>
                                    :
                                        <h1>Carregando</h1>}

                                <h3
                                    style={{ color: "#7A7A7A", fontSize: "15px", fontWeight: 400, marginBottom: 20 + "px"}}
                                >Vendido e entregue por Hortifood</h3>

                                {product ?
                                    <>
                                        <h1
                                            style={{color: "#334932", marginTop: 30 + "px", display: "inline-block"}}
                                            contentEditable={priceChange}
                                            onBlur={handlePriceChange}
                                        >{product.price}</h1> R$
                                        <button style={priceEditStyle} onClick={handlePriceEdit}>Editar preço do produto</button>

                                        <div className="stock_quantity">
                                            Quantidade em Estoque: <span 
                                                                        contentEditable={quantityChange}
                                                                        onBlur={handleQuantityChange}
                                                                    >{product.on_stock}</span> Kg
                                        </div>
                                        <button style={quantityEditStyle} onClick={handleQuantityEdit}>Editar Estoque</button>
                                    </>
                                :
                                    <h1>Carregando</h1>}

                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductBackoffice