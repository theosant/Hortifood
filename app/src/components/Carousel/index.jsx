import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css'
import Card from '../Card';

const NextArrow = () => (
    <div className="arrow next-arrow">
        &gt;
    </div>
);

const PrevArrow = () => (
    <div className="arrow prev-arrow">
        &lt;
    </div>
);

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
            <div className="carousel-arrows">
                <PrevArrow />
                <NextArrow />
            </div>
            <Slider {...settings}>
                {cardInfos.map((card, index) => (
                    <Card card={card} key={index} HandlerClick = {HandlerClick}/>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;