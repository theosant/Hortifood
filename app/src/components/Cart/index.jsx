import React, { useEffect, useState } from 'react'
import './index.css'

const Cart = ({cart, setCart,handleChange}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => {
            ans += item.price * item.amount;
        }) 
        setPrice(ans);
    }

    const handleRemove= (id) => {
        const arr = cart.filter(item => item.id !== id)
        setCart(arr);
    }


    useEffect(() =>{
        handlePrice();
    })

    return (
        <article className='cart'>
        {
            cart.map((item) =>{
                return <div className='cart_box'>
                    <div className='cart_img'>
                        <img src={item.src}/>
                        <p>{item.name}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item,-1)}>-</button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item,+1)} >+</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remover</button>
                    </div>
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