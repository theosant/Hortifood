import React, { useState } from "react";
import "./index.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useAuth } from '../Auth/Context';
import {Link} from 'react-router-dom'
import Resultcontainer from "./Resultcontainer";

const NavBar = ({size, setshowCart, products}) => {
    const {token} = useAuth();
    const [value,setValue] = useState('');
    const [list,setList] = useState([]);
    const [showResult,setShowResult] = useState(false);

    function onChange(e){
        setValue(e.target.value);
        if(e.target.value === ''){
            setShowResult(false);
        } else{
            setShowResult(true)
            setList(products.filter(item => item.name.toLowerCase().startsWith(value.toLowerCase())))
        }
    }

    return (
        <>
            <nav className="nav-links">
            <Link to="/" className="logo">HORTIFOOD</Link>
            <div className="result_container">
                {showResult && 
                <Resultcontainer list={list}/>}
                <input value={value} onChange={onChange} className="search-bar" type="text" placeholder="&#xF002; Buscar Frutas ou Verduras..." />
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
            </nav>
            <div style={{ height: '77px' }} />
        </>
    )
};

export default NavBar