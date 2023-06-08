import React from 'react'
import './index.css'

function Card({ card, HandlerClick }) {
    return (
        <div className='carrossel-item' key={card.id}>
            <img src={card.src} alt={card.alt} />
            <p>{card.name}</p>
            <p>R$ {card.price}/Kg</p>
            <button onClick={() => HandlerClick(card)}>Adicionar ao Carrinho</button>
        </div>
    )
}

export default Card