import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css'
import Card from '../Card';

const Carousel = ({ cardInfos,HandlerClick }) => {

    const settings = {
        dots: true, // Exibe os pontos de navegação
        infinite: true, // Permite a rolagem contínua
        speed: 500, // Velocidade da animação
        slidesToShow: 5, // Quantidade de slides visíveis ao mesmo tempo
        slidesToScroll: 1, // Quantidade de slides a serem rolados por vez
    };
  
    return (
        <div className="carrossel">
            <Slider {...settings}>
                {cardInfos.map((card, index) => (
                    <Card card={card} key={index} HandlerClick = {HandlerClick}/>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;