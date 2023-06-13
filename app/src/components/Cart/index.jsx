import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Context';
import './index.css';
import FruitPoint from '../FruitPoint';

const Cart = ({setshowCart,cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const { token } = useAuth();
    const navigate = useNavigate();

    const handleMinusClick = (product) => {
        if(quantity > 100){
            setQuantity(quantity - 100);
            setPrice(price - (product.price * 0.1));
            setTotalPrice(totalPrice - price);
        }
    }
    const handlePlusClick = (product) => {
        setQuantity(quantity + 100);
        setPrice(price + (product.price * 0.1))
        setTotalPrice(totalPrice + price);
    }

    const handleRemove= (id) => {
        const arr = cart.filter(item => item.id !== id)
        setCart(arr);
        localStorage.setItem('cart', JSON.stringify(arr))
    }

    const handlePurchase = () => {
        if (token)
        navigate('/payment');
        else 
        navigate('/login');
    }

    return (
        <article className='cart'>
            <div className="close_cart_container">
                <button className="close_cart_button" onClick={setshowCart}>X</button>
            </div>
            <div className='cart_top_margin'>margin</div>
            {cart.length ? 
                <table>
                    {cart.map((item) => (
                        <tbody className='cart_box'>
                            <tr>
                                <td><img src={item.src}/></td>
                                <td className='cart_item_info'>
                                    <h3>{item.name}</h3>
                                    <p>R$ {item.price} /Kg</p>

                                    <div className="quantityInputCart">
                                        <span
                                            onClick={() => handleMinusClick(item)}
                                            style={{ cursor: 'pointer', maxWidth: "40px"  }}
                                            >-</span>
                                        <input type='number' value={quantity} id="quantityCart"/>g
                                        <span
                                            onClick={() => handlePlusClick(item)}
                                            style={{ cursor: 'pointer', maxWidth: "40px" }}
                                            >+</span>
                                    </div>

                                </td>
                            </tr>

                            <div className='cartFP'>
                                <FruitPoint width={340} heigth={10}/>
                            </div>

                            <span className="cartPrice">R$ {price.toFixed(2)}</span>
                            <button className='exclude_cart_item_button' onClick={() => handleRemove(item.id)}>X</button>
                        </tbody>
                    ))}
                </table>
            :
            <h1 style={{color: "#414141", marginLeft: "30px"}}>Carrinho Vazio... &#x1F61E;</h1>}

            <div className='cart_bottom_margin'>margin</div>

            {cart.length ? 
                <div className="cart_total_price_container">
                    <span className="cart_total_price">Valor Total: R$ {totalPrice}</span> <br />
                    <button className='cart_end_purchase' onClick={() => handlePurchase()} >Finalizar Compra</button> <br />
                    <button className="flush_cart_button" onClick={() => {setCart([]);localStorage.setItem('cart', JSON.stringify([]))}} >Limpar Carrinho</button>
                </div>
            :
            <></>}
        </article>
    )
}

export default Cart