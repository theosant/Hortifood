import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function Card({ card, HandlerClick, backOffice = false }) {
    const productadress = backOffice ? `/produto/back/${card._id}` : `/produto/${card._id}`;

    return (
        <div className='carrossel-item' key={card._id}>
            <Link className="carrossel-item__link" to={productadress}>
                <img className="carrossel-item__img" src={card.srcUrl} alt={card.alt} />
                <p>{card.name}</p>
            </Link>
            {card.type === "sucos" ? 
                <p>R$ {card.price}/L</p>
            :
                <p>R$ {card.price}/Kg</p>
            }
            {backOffice ?
                <button onClick={() => HandlerClick(card)}>Gerenciar</button>
            :
                <button onClick={() => HandlerClick(card)}>Adicionar ao Carrinho</button>
            }
        </div>
    )
}

export default Card