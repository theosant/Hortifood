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
    ]);

    console.log(highlights)

    return (
        <div>
            <SiteSections />
            <div className='main'>
                <div className='highlights'>
                    <Carousel cardInfos = {highlights} />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
