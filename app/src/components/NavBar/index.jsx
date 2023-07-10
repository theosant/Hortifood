import React, { useState, useEffect } from "react";
import "./index.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { useAuth } from '../Auth/Context';
import {Link, useNavigate} from 'react-router-dom'
import Resultcontainer from "./Resultcontainer";

const NavBar = ({size, setshowCart, products, _token}) => {
    // const {token, setToken, setUser} = useAuth();
    const [token, setToken] = useState(_token);
    const [searchValue, setsearchValue] = useState('');
    const [list, setList] = useState([]);
    const [showResult, setShowResult] = useState(false);

    // const navigate = useNavigate();

    useEffect(() => {
        if (searchValue === '') {
            setShowResult(false);
        } else {
            setShowResult(true);
            setList(products.filter(item => item.name.toLowerCase().startsWith(searchValue.toLowerCase())));
            console.log(searchValue);
        }
    }, [searchValue, products]);

    useEffect(() =>{
        // function checkToken() {
        //     const item = localStorage.getItem('token');
        //     if (item)   setToken(item);
        // }

        // window.addEventListener('storage', checkToken);

        // return () => {
        //     window.removeEventListener('storage', checkToken);
        // }
        setToken(localStorage.getItem('token'));
    });

    function onSearchChange(e){
        setsearchValue(e.target.value);
    }

    function handleLogout() {
        // setToken(null);
        // setUser();
        let user = {
            entered: '',
            name: '',
            cpf: '',
            email: '',
            purchases: [],
            admin: false,
        };
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', "");
        setToken("");
        // localStorage.setItem('user', "");
        // localStorage.setItem('user', "");
    }

    return (
        <>
            <nav className="nav-links">
            <Link to="/" className="logo">HORTIFOOD</Link>
            <div className="result_container">
                {showResult && <Resultcontainer list={list}/>}
                <input
                    value={searchValue}
                    onFocus={() => setShowResult(true)}
                    onChange={onSearchChange}
                    onBlur={() => setTimeout(() => {setShowResult(false)}, 300)}
                    className="search-bar"
                    type="text"
                    placeholder="Buscar Frutas, Verduras ou Sucos..."
                />
            </div>
                    {
                        token
                        ? <Link to="./profile" className="login-btn">Meu Perfil</Link>
                        : <Link to="./login" className="login-btn">Entrar</Link>
                    }
                    <button onClick={setshowCart} className="cart-btn">
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                        <span>{size}</span>
                        <p>Meu Carrinho</p>
                    </button>
                    {token && <Link to="/" className="logout-btn" onClick={handleLogout}>Logout</Link>}
            </nav>
            <div style={{ height: '77px' }} />
        </>
    )
};

export default NavBar