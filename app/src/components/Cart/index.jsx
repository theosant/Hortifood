import React, { useEffect, useState } from 'react'
import './index.css'
import FruitPoint from '../FruitPoint';

const Cart = ({cart, setCart,handleChange}) => {
    const [price, setPrice] = useState(0);

    return (
        <article className='cart'>
        {
            cart.map((item) =>{
                return <div className='cart_box'>
                    <div className='cart_img'>
                        <img src={item.src}/>
                        <p>{item.name}</p>
                    </div>
                    
                    <FruitPoint width={250} heigth={10}/>
                </div>
            })}
            <div>
                <span>Total:</span>
                <span>R$ - {price}</span>
            </div>
    </article>
  )
}

export default Cart