import { useState } from 'react';
import './styles/App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import SiteSections from './components/SiteSections';
import NavBar from './components/NavBar';
import PurchaseBlock from './components/PurchaseBlock';
import Products from './components/Products';
import './warning.css'
import Cart from './components/Cart';


function App() {
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);
    const [showcart, setshowCart] = useState(false);

    function HandleClickCart(){
        setshowCart(!showcart);
    }

    const HandlerClick = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
            if(item.id === product.id){
                isPresent = true;
            }
        })
        if(isPresent){
            setWarning(true)
            setTimeout(() => {
                
                setWarning(false)
            }, 2000)
            return;
        }
        setCart([...cart,item]);
    }

    const handleChange = (item,d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if(data.id === item.id) 
                ind = index
        })
        const tempArr = cart;
        tempArr[ind].amount += d
        if(tempArr[ind].amount === 0) 
            tempArr[ind].amount = 1;
            setCart([...tempArr])
    }

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
    const list = [
        {
            id: 0,
            src: "./imagens/banana_nanica.jpeg",
            name: "banana nanica1",
            price: "41",
            amount: 3
        },
        {
            id: 1,
            src: "./imagens/banana_nanica2.jpeg",
            name: "banana nanica2",
            price: "42",
            amount: 3
        },
        {
            id: 2,
            src: "./imagens/banana_nanica3.jpeg",
            name: "banana nanica3",
            price: "43",
            amount: 3
        },
        {
            id: 3,
            src: "./imagens/banana_nanica3.jpeg",
            name: "banana nanica4",
            price: "44",
            amount: 3
        },
        {
            id: 4,
            src: "./imagens/banana_nanica3.jpeg",
            name: "banana nanic5",
            price: "45",
            amount: 3
        },
        {
            id: 5,
            src: "./imagens/banana_nanica3.jpeg",
            name: "banana nanic6",
            price: "46",
            amount: 3
        },
    ];

    return (
        <div>
            <NavBar size={cart.length} setshowCart={HandleClickCart}/>
            <SiteSections type = "main"/>
            <div className='main'>
                <div className='highlights'>
                    <h1>Destaques</h1> <hr />
                    <Carousel cardInfos = {highlights} HandlerClick = {HandlerClick} />

                    <h1>Temporada</h1> <hr />
                    <h1>Sucos Famosos</h1> <hr />
                </div>
            </div>
            {
                showcart && <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
            }
            <Products lista={list} HandlerClick = {HandlerClick}/>
            {
                warning && <div className='warning'>Item já adicionado ao seu carrinho</div>
            }
            <Footer />
        </div>
    );
}

export default App;
