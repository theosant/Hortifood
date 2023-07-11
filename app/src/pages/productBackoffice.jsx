import React, { useState, useEffect } from 'react'
import '../styles/product.css'
import { useNavigate, useParams } from 'react-router-dom';

function ProductBackoffice() {
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        async function readProductById(id){
            let produto = await fetch(`http://localhost:3001/product/${id}`);
            produto = await produto.json();
            if(!produto){
                navigate('/404');
            }
            return produto
        }

        readProductById(id).then((resposta) => {
            resposta.amount = 0;
            resposta.ponto = 2;
            console.log(resposta)
            setProduct(resposta)})
    }, [id]);
    
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
        else {
            updateProduct()
            setNameEditStyle(styles.not_editing);
        }
    }
    
    const handlePriceChange = (event) => {
        product.price = event.target.textContent;
    };
    const [priceChange, setPriceChange] = useState(false);
    const handlePriceEdit = () => {
        setPriceChange(!priceChange);
        if(!priceChange) setPriceEditStyle(styles.editing);
        else {
            updateProduct();
            setPriceEditStyle(styles.not_editing);
        }
    }
    
    const handleQuantityChange = (event) => {
        product.on_stock = event.target.textContent;
    };
    const [quantityChange, setQuantityChange] = useState(false);
    const handleQuantityEdit = () => {
        setQuantityChange(!quantityChange);
        if(!quantityChange) setQuantityEditStyle(styles.editing);
        else {
            updateProduct();
            setQuantityEditStyle(styles.not_editing);
        }
    }

    function updateProduct() {
        const updatedProduct = { ...product};

        fetch(`http://localhost:3001/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
        .then((response) => {
            if (response.ok) {
                console.log('Produto atualizado com sucesso!');
            } else {
                console.error('Erro ao atualizar o produto');
            }
        })
        .catch((error) => {
            console.error('Erro ao atualizar o produto:', error);
        });
    }

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <div>
                <div className="background_product">
                    <table>
                        <tr>
                            <td className="product_image_container">
                                {product ?
                                <img alt="produto!" src={product.srcUrl}></img>
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