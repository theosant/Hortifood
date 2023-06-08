import React, { useState } from 'react'

const Cart = ({cart, setCart, HandlerClick}) => {
    const [price, setPrice] = useState(0);
    return (
        <article>
        {
            cart.map((item) =>{
                return <div className='cart_box'>
                    <div className='cart_img'>
                        <img src={item.src}/>
                        <p>{item.name}</p>
                    </div>
                    <div>
                        <button>+</button>
                        <button>-</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button>Remover</button>
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