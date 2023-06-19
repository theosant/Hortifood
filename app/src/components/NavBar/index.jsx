import React, { useState } from "react";
import "./index.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useAuth } from '../Auth/Context';
import {Link, useNavigate} from 'react-router-dom'
import Resultcontainer from "./Resultcontainer";

const NavBar = ({size, setshowCart, products}) => {
    // const {token, setToken, setUser} = useAuth();
    const token = localStorage.getItem('token');
    const [value,setValue] = useState('');
    const [list,setList] = useState([]);
    const [showResult,setShowResult] = useState(false);

    const navigate = useNavigate();

    function onChange(e){
        setValue(e.target.value);
        if(e.target.value === ''){
            setShowResult(false);
        } else{
            setShowResult(true)
            setList(products.filter(item => item.name.toLowerCase().startsWith(value.toLowerCase())))
        }
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
        // localStorage.setItem('user', "");
        // localStorage.setItem('user', "");
    }

    return (
        <>
            <nav className="nav-links">
            <Link to="/" className="logo">HORTIFOOD</Link>
            <div className="result_container">
                {showResult && 
                <Resultcontainer list={list}/>}
                <input value={value} onFocus={() => setShowResult(true)} onChange={onChange} onBlur={() => setTimeout(() => {setShowResult(false)}, 70)}  className="search-bar" type="text" placeholder=" Buscar Frutas ou Verduras..." />
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