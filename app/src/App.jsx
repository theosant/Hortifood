import { useState } from 'react';
import './styles/App.css';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import PurchaseBlock from './components/PurchaseBlock';
import Product from './pages/product';
import './warning.css';
import Home from './components/Home';
import Cart from './components/Cart';
import AboutUs from './pages/aboutus';
import Login from './pages/login';
import Cadastro from './pages/signup';
import Perfil from './pages/profile'
import AuthProvider from './components/Auth/Provider'
import RouteAdmin from './components/Routes/RouteAdmin'
import ForgotPassword from './pages/forgotpass';

import {Route, Routes, Router} from 'react-router-dom'

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

    return (
        <div>
            <NavBar size={cart.length} setshowCart={HandleClickCart}/>

            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Home cardInfos={highlights} HandlerClick={HandlerClick} />}></Route>
                    <Route exact path="/sobre" element={<AboutUs />}></Route>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/signup" element={<Cadastro/>}></Route>
                    <Route exact path="/forgotpass" element={<ForgotPassword />}></Route>
                    <Route path="/profile" element={<RouteAdmin component={Perfil} />} // Envolve RouteAdmin em um componente Route
    />
                </Routes>
            </AuthProvider>

            {showcart && <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}
            {warning && <div className='warning'>Item já adicionado ao seu carrinho</div>}
            <Footer />
        </div>
    );
}

export default App;
