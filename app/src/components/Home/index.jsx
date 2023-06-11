import React, { useState } from 'react'
import Carousel from '../Carousel';
import SiteSections from '../SiteSections';

import './style.css'

function Home({cardInfos, HandlerClick}) {
    // const [sucos, setSucos] = useState([]);
    // useState(() => {
    //     const arr = cardInfos.filter(objeto => objeto.type === 'suco');
    //     setSucos(arr);
    //   }, [cardInfos]);
    return (
    <>
      <div className="home_banner">
          <h1>Bem-Vindo à rede são-carlense <br />
            de entrega de frutas, hortaliças e sucos</h1>
          <img src="/imagens/bannerprincipal.jpg" alt="banner" />
      </div>
      <SiteSections type = "main"/>
      <div className='main'>
          <div className='highlights'>
              <h1>Destaques</h1> <hr />
              <Carousel cardInfos = {cardInfos} HandlerClick = {HandlerClick} />

              <h1>Temporada</h1> <hr />
              <h1>Sucos Famosos</h1> <hr />
              <Carousel cardInfos = {cardInfos.filter(objeto => objeto.type === 'suco')} HandlerClick = {HandlerClick} />
          </div>
      </div>
    </>
  )
}

export default Home