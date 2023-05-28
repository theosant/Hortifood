import React from 'react'
import './index.css'

function Card({ card }) {
    // console.log(card);
    return (
        <div className='carrossel-item'>
            <img src={card.src} alt={card.alt} />
            <p>{card.name}</p>
            <p>R$ {card.price}/Kg</p>
            <button>Adicionar ao Carrinho</button>
        </div>
    )
}

export default Card