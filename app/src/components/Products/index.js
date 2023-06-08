import React from 'react'
import Card from '../Card'
import './style.css'
const Products = ({lista, HandlerClick}) => {
  return (
    <section className='CardsContainer'>
        {
            lista.map((item) => {
                return <Card card={item} HandlerClick={HandlerClick}/>
            })
        }
    </section>
  )
}

export default Products