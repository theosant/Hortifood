import { useState } from 'react';
import './styles/App.css';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import PurchaseBlock from './components/PurchaseBlock';
import Product from './pages/product';
import Products from './pages/products';
import './warning.css';
import Home from './components/Home';
import Cart from './components/Cart';
import AboutUs from './pages/aboutus';
import Login from './pages/login';
import Cadastro from './pages/signup';
import Perfil from './pages/profile'
import { AuthProvider } from './components/Auth/Context'
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

    const [highlights] = useState(
        [
            {
              "id": 0,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "banana nanica1",
              "price": "41",
              "highlight": "true",
              "type": "fruta",
              "season": true
            },
            {
              "id": 1,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "banana nanica2",
              "price": "42",
              "highlight": "true",
              "type": "suco",
              "season": true
            },
            {
              "id": 2,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "banana nanica3",
              "price": "43",
              "highlight": "true",
              "type": "vegetal",
              "season": false
            },
            {
              "id": 3,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "maçã vermelha",
              "price": "25",
              "highlight": "false",
              "type": "fruta",
              "season": true
            },
            {
              "id": 4,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "maçã verde",
              "price": "30",
              "highlight": "false",
              "type": "fruta",
              "season": false
            },
            {
              "id": 5,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "morango",
              "price": "15",
              "highlight": "false",
              "type": "fruta",
              "season": true
            },
            {
              "id": 6,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "laranja",
              "price": "20",
              "highlight": "false",
              "type": "fruta",
              "season": true
            },
            {
              "id": 7,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "abacaxi",
              "price": "35",
              "highlight": "false",
              "type": "fruta",
              "season": false
            },
            {
              "id": 8,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "melancia",
              "price": "28",
              "highlight": "false",
              "type": "fruta",
              "season": true
            },
            {
              "id": 9,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "uva verde",
              "price": "18",
              "highlight": "false",
              "type": "fruta",
              "season": true
            },
            {
              "id": 10,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "uva roxa",
              "price": "22",
              "highlight": "false",
              "type": "fruta",
              "season": false
            },
            {
              "id": 11,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "pera",
              "price": "32",
              "highlight": "false",
              "type": "fruta",
              "season": true
            },
            {
              "id": 12,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "abobrinha",
              "price": "8",
              "highlight": "true",
              "type": "vegetal",
              "season": true
            },
            {
              "id": 13,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "beterraba",
              "price": "5",
              "highlight": "true",
              "type": "vegetal",
              "season": false
            },
            {
              "id": 14,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "cebola",
              "price": "3",
              "highlight": "true",
              "type": "vegetal",
              "season": true
            },
            {
              "id": 15,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "cenoura",
              "price": "4",
              "highlight": "true",
              "type": "vegetal",
              "season": false
            },
            {
              "id": 16,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "tomate",
              "price": "6",
              "highlight": "false",
              "type": "vegetal",
              "season": true
            },
            {
              "id": 17,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "brócolis",
              "price": "9",
              "highlight": "false",
              "type": "vegetal",
              "season": true
            },
            {
              "id": 18,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "pepino",
              "price": "5",
              "highlight": "false",
              "type": "vegetal",
              "season": false
            },
            {
              "id": 19,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "alface",
              "price": "2",
              "highlight": "true",
              "type": "vegetal",
              "season": true
            },
            {
              "id": 20,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "suco de laranja",
              "price": "5",
              "highlight": "true",
              "type": "suco",
              "season": true
            },
            {
              "id": 21,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "suco de uva",
              "price": "6",
              "highlight": "false",
              "type": "suco",
              "season": true
            },
            {
              "id": 22,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "suco de abacaxi",
              "price": "4",
              "highlight": "true",
              "type": "suco",
              "season": false
            }
          ]
          );

          localStorage.setItem('produtos', JSON.stringify(highlights));

    return (
        <div>
          <AuthProvider>
            <NavBar size={cart.length} setshowCart={HandleClickCart}/>


                <Routes>
                    <Route exact path="/" element={<Home cardInfos={highlights} HandlerClick={HandlerClick} />}></Route>
                    <Route exact path="/sobre" element={<AboutUs />}></Route>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/signup" element={<Cadastro/>}></Route>
                    <Route exact path="/forgotpass" element={<ForgotPassword />}></Route>
                    <Route exact path="/produto/:id" element={<Product/>}></Route>
                    <Route exact path="/produtos/:tipo" element={<Products/>}></Route>
                    <Route exact path="/profile" element={<Perfil />}></Route>
                </Routes>

            {showcart && <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}
            {warning && <div className='warning'>Item já adicionado ao seu carrinho</div>}
            <Footer />
          </AuthProvider>
        </div>
    );
}

export default App;
