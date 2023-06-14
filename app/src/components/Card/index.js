import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function Card({ card, HandlerClick, backOffice = false }) {
    const productadress = `/produto/${card.id}`;
    // console.log(productadress);
    return (
        <div className='carrossel-item' key={card.id}>
            <Link className="carrossel-item__link" to={productadress}>
                
                <img className="carrossel-item__img" src={card.src} alt={card.alt} />
                <p>{card.name}</p>
            </Link>
            <p>R$ {card.price}/Kg</p>
            {
                backOffice
                ? <button onClick={() => HandlerClick(card)}>Gerenciar</button>
                : <button onClick={() => HandlerClick(card)}>Adicionar ao Carrinho</button>
            }
            
        </div>
    )
}

export default Card