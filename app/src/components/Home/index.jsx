import React, { useState } from 'react'
import Carousel from '../Carousel';
import SiteSections from '../SiteSections';
import Products from '../Products';

import './style.css'

function Home({cardInfos, HandlerClick}) {
    const [sucos, setSucos] = useState([]);
    useState(() => {
        const arr = cardInfos.filter(objeto => objeto.type === 'suco');
        setSucos(arr);
      }, [cardInfos]);
  return (
    <>
    <SiteSections type = "main"/>
    <div className='main'>
        <div className='highlights'>
            <h1>Destaques</h1> <hr />
            <Carousel cardInfos = {cardInfos} HandlerClick = {HandlerClick} />

            <h1>Temporada</h1> <hr />
            <h1>Sucos Famosos</h1> <hr />
            <Carousel cardInfos = {cardInfos.filter(objeto => objeto.type === 'suco')} HandlerClick = {HandlerClick} />
        </div>
    </div></>
  )
}

export default Home