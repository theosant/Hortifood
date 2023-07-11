import React, { useState,useEffect } from "react";
import '../styles/perfil.css';
import {Link} from 'react-router-dom';
import PurchaseBlock from '../components/PurchaseBlock';
// import { useAuth } from '../components/Auth/Context';

const Profile = () =>{
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));
    const [ purchases, setPurchases ] = useState([]) 

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <div className="banner_perfil">
                Perfil
                {user.admin && <Link to="/produtosback" className="products-btn">Gerenciar Produtos</Link>}
            </div>
            <div className="perfil_background">
                <h1 id="user_name">Nome: {user.name}</h1>
                <h2 id="email">Email: {user.email}</h2>
                <hr />
                <h1 id="last_purchases_title">Últimas compras</h1>
                <span id="last_purchases_container">
                    {purchases.map((purchase, index) => (
                        <PurchaseBlock purchase={purchase} key={index}/>
                    ))}
                </span>
                <hr />
            </div>
        </div>
    )
}

export default Profile;