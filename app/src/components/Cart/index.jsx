import React, { useEffect, useState } from 'react'
import './index.css'
import FruitPoint from '../FruitPoint';

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

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

    return (
        <article className='cart'>
            <table>
                {cart.map((item) => (
                    <tbody className='cart_box'>
                        <tr>
                            <td><img src={item.src}/></td>
                            <td className='cart_item_info'>
                                <h3>{item.name}ffrerfer</h3>
                                <p>R$ {item.price} /Kg</p>

                                <div className="quantityInputCart">
                                    <span
                                        onClick={() => handleMinusClick(item)}
                                        style={{ cursor: 'pointer', maxWidth: "40px"  }}
                                        >-</span>
                                    <span id="quantityCart">{quantity} g</span>
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

                        <span className="cartPrice">R$ {price}</span>
                    </tbody>
                ))}
            </table>
            <div>
                <span>Total: {totalPrice}</span>
            </div>
    </article>
    )
}

export default Cart