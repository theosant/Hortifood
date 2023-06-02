import { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import SiteSections from './components/SiteSections';

function App() {

    const [highlights] = useState([
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
        {
            id: 3,
            src: "./imagens/banana_nanica3.jpeg",
            name: "banana nanica4",
            price: "44",
        },
        {
            id: 4,
            src: "./imagens/banana_nanica3.jpeg",
            name: "banana nanic5",
            price: "45",
        },
        {
            id: 5,
            src: "./imagens/banana_nanica3.jpeg",
            name: "banana nanic6",
            price: "46",
        },
    ]);

    return (
        <div>
            <SiteSections />
            <div className='main'>
                <div className='highlights'>
                    <h1>Destaques</h1> <hr />
                    <Carousel cardInfos = {highlights} />

                    <h1>Temporada</h1> <hr />
                    <h1>Sucos Famosos</h1> <hr />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
