import { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {

    const [destaques] = useState([
        {
            id: 0,
            src: "./imagens/banana_nanica.jpeg",
            name: "banana nanica1",
            price: "41",
        },
        {
            id: 1,
            src: "./imagens/banana_nanica2.jpeg",
            name: "banana nanica2",
            price: "42",
        },
        {
            id: 2,
            src: "./imagens/banana_nanica3.jpeg",
            name: "banana nanica3",
            price: "43",
        },
    ]);

    console.log(destaques)

    return (
        <div>
            <section className='secoes-do-site'>
                <div className="secao">
                    <a href="#frutas">
                        <div className="secao-icon">
                            <img src="images/frutas-icon.png" alt="Frutas" style={{width: 100 + 'px', height: 100 + 'px',}}/>
                        </div>
                        <p>Frutas</p>
                    </a>
                </div>
                <div className="secao">
                    <a href="#vegetais">
                        <div className="secao-icon">
                            <img src="images/vegetais-icon.png" alt="Vegetais"/>
                        </div>
                        <p>Vegetais</p>
                    </a>
                </div>
                <div className="secao">
                    <a href="#sucos">
                        <div className="secao-icon">
                            <img src="images/sucos-icon.png" alt="Sucos"/>
                        </div>
                        <p>Sucos</p>
                    </a>
                </div>
            </section>
            <div className='main'>
                <div className='destaques'>
                    <Carousel cardInfos = {destaques} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
