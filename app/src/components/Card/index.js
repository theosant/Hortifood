import React from 'react'
import './style.css'

function Card(props) {
  return (
    <div class="carrossel-item">
      <img src={props.src} alt={props.alt} />
      <p>{props.name}</p>
      <p>R$ {props.price}/Kg</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  )
}

export default Card