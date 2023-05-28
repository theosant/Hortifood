import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../Card';

const NextArrow = (props) => (
    <div className="slick-next" {...props}>
        Next
    </div>
);

const PrevArrow = (props) => (
    <div className="slick-arrow slick-prev" {...props}>
        Previous
    </div>
);

const Carousel = ({ cardInfos }) => {

    const settings = {
        dots: true, // Exibe os pontos de navegação
        infinite: true, // Permite a rolagem contínua
        speed: 500, // Velocidade da animação
        slidesToShow: 3, // Quantidade de slides visíveis ao mesmo tempo
        slidesToScroll: 1, // Quantidade de slides a serem rolados por vez
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
  
    return (
        <div className='carrossel'>
            <Slider {...settings}>
                {cardInfos.map((card) => (
                    <Card card = {card} />
                ))}

            </Slider>
        </div>
    );
};

export default Carousel;