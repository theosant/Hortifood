import { useState } from 'react';
import './styles/App.css';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
// import PurchaseBlock from './components/PurchaseBlock';
import Product from './pages/product';
import ProductBackoffice from './pages/productBackoffice';
import Products from './pages/products';
import ProductsBackoffice from './pages/productsBackoffice';
import Payment from './pages/payment';
import './warning.css';
import Home from './components/Home';
import Cart from './components/Cart';
import AboutUs from './pages/aboutus';
import Login from './pages/login';
import Cadastro from './pages/signup';
import Perfil from './pages/profile'
import Pagina404 from './pages/404'
import { AuthProvider } from './components/Auth/Context'
import { Protected } from './components/Routes/Protected';
import ForgotPassword from './pages/forgotpassword';

import {Route, Routes} from 'react-router-dom'

function App() {
    const [cart, setCart] = useState(JSON.parse(localStorage.cart));
  
    const [highlights] = useState(
        [
            {
              "id": 0,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "banana nanica1",
              "price": "41",
              "highlight": "true",
              "type": "frutas",
              "season": true
            },
            {
              "id": 1,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "banana nanica2",
              "price": "42",
              "highlight": "true",
              "type": "sucos",
              "season": true
            },
            {
              "id": 2,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "banana nanica3",
              "price": "43",
              "highlight": "false",
              "type": "vegetais",
              "season": false
            },
            {
              "id": 3,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "maçã vermelha",
              "price": "25",
              "highlight": "false",
              "type": "frutas",
              "season": true
            },
            {
              "id": 4,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "maçã verde",
              "price": "30",
              "highlight": "false",
              "type": "frutas",
              "season": false
            },
            {
              "id": 5,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "morango",
              "price": "15",
              "highlight": "false",
              "type": "frutas",
              "season": true
            },
            {
              "id": 6,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "laranja",
              "price": "20",
              "highlight": "false",
              "type": "frutas",
              "season": true
            },
            {
              "id": 7,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "abacaxi",
              "price": "35",
              "highlight": "false",
              "type": "frutas",
              "season": false
            },
            {
              "id": 8,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "melancia",
              "price": "28",
              "highlight": "false",
              "type": "frutas",
              "season": true
            },
            {
              "id": 9,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "uva verde",
              "price": "18",
              "highlight": "false",
              "type": "frutas",
              "season": true
            },
            {
              "id": 10,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "uva roxa",
              "price": "22",
              "highlight": "false",
              "type": "frutas",
              "season": false
            },
            {
              "id": 11,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "pera",
              "price": "32",
              "highlight": "false",
              "type": "frutas",
              "season": true
            },
            {
              "id": 12,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "abobrinha",
              "price": "8",
              "highlight": "true",
              "type": "vegetais",
              "season": true
            },
            {
              "id": 13,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "beterraba",
              "price": "5",
              "highlight": "true",
              "type": "vegetais",
              "season": false
            },
            {
              "id": 14,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "cebola",
              "price": "3",
              "highlight": "true",
              "type": "vegetais",
              "season": true
            },
            {
              "id": 15,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "cenoura",
              "price": "4",
              "highlight": "true",
              "type": "vegetais",
              "season": false
            },
            {
              "id": 16,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "tomate",
              "price": "6",
              "highlight": "false",
              "type": "vegetais",
              "season": true
            },
            {
              "id": 17,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "brócolis",
              "price": "9",
              "highlight": "false",
              "type": "vegetais",
              "season": true
            },
            {
              "id": 18,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "pepino",
              "price": "5",
              "highlight": "false",
              "type": "vegetais",
              "season": false
            },
            {
              "id": 19,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "alface",
              "price": "2",
              "highlight": "true",
              "type": "vegetais",
              "season": true
            },
            {
              "id": 20,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "suco de laranja",
              "price": "5",
              "highlight": "true",
              "type": "sucos",
              "season": true
            },
            {
              "id": 21,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "suco de uva",
              "price": "6",
              "highlight": "false",
              "type": "sucos",
              "season": true
            },
            {
              "id": 22,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "suco de abacaxi",
              "price": "4",
              "highlight": "true",
              "type": "sucos",
              "season": false
            },
            {
              "id": 23,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "suco de goiaba",
              "price": "5",
              "highlight": "true",
              "type": "sucos",
              "season": false
            },
            {
              "id": 24,
              "src": "/imagens/banana_nanica.jpeg",
              "name": "suco de maçã",
              "price": "6",
              "highlight": "true",
              "type": "sucos",
              "season": false
            },
          ]
          );
          
    localStorage.setItem('produtos', JSON.stringify(highlights));

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
        item.amount = item.amount ? item.amount : 1000;
        item.ponto = item.ponto ? item.ponto : 2;
        setCart([...cart,item]);
        localStorage.setItem('cart', JSON.stringify([...cart,item]));
    }

    const handleChange = (item,d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if(data.id === item.id) 
                ind = index
        })
        if(ind === -1) return
        const tempArr = cart;
        tempArr[ind].amount += d
        if(tempArr[ind].amount === 0) 
            tempArr[ind].amount = 100;
            setCart([...tempArr])
            localStorage.setItem('cart', JSON.stringify([...tempArr]));
    }

    const handleSlider = (item, ponto) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if(data.id === item.id) 
                ind = index
        })
        if(ind === -1) return
        const tempArr = cart;
        tempArr[ind].ponto = ponto
        setCart([...tempArr])
        localStorage.setItem('cart', JSON.stringify([...cart,item]));
    }

    return (
        <div>
          <AuthProvider>
            <NavBar size={cart.length} products={highlights} setshowCart={HandleClickCart}/>
                <Routes>
                    <Route exact path="/" element={<Home cardInfos={highlights} HandlerClick={HandlerClick} />}></Route>
                    <Route exact path="/sobre" element={<AboutUs />}></Route>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/signup" element={<Cadastro/>}></Route>
                    <Route exact path="/forgotpass" element={<ForgotPassword />}></Route>
                    <Route exact path="/produto/:id" element={<Product handleChange={handleChange} HandlerClick={HandlerClick}/>}></Route>
                    <Route exact path="/produtos/:tipo" element={<Products HandlerClick={HandlerClick}/>}></Route>
                    <Route exact path="/produtoback" element={<Protected adminOnly><ProductBackoffice /></Protected>}></Route>
                    <Route exact path="/produtosback" element={<Protected adminOnly><ProductsBackoffice /></Protected>}></Route>
                    <Route exact path="/profile" element={<Protected><Perfil /></Protected>} />
                    <Route exact path="/payment" element={<Protected><Payment setCart={setCart} setshowCart={HandleClickCart}/></Protected>}></Route>
                    <Route exact path="*" element={<Pagina404 />}></Route>
                </Routes>
            {showcart && <Cart setshowCart={HandleClickCart} cart={cart} setCart={setCart} handleChange={handleChange}/>}
            {warning && <div className='warning'>Item já adicionado ao seu carrinho</div>}
            <Footer />
          </AuthProvider>
        </div>
    );
}

export default App;
