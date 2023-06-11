import React, { useState, useContext } from "react";
import "./index.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AuthContext from '../Auth/Context';
import {Link} from 'react-router-dom'

const NavBar = ({size, setshowCart}) => {
    const { token } = useContext(AuthContext);
    return (
        <>
            <nav className="nav-links">
            <Link to="/" className="logo">HORTIFOOD</Link>
            <input className="search-bar" type="text" placeholder="&#xF002; Buscar Frutas ou Verduras..." />
                    {
                        token
                        ? <Link to="./profile" className="login-btn">Meu Perfil</Link>
                        : <Link to="./login" className="login-btn">Entrar</Link>
                    }
                    <button onClick={setshowCart} className="cart-btn">
                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                        <span>{size}</span>
                        Meu Carrinho
                    </button>
            </nav>
            <div style={{ height: '77px' }} />
        </>
    )
};

export default NavBar