import React, { useState,useEffect } from "react";
import '../styles/perfil.css';
import {Link} from 'react-router-dom';
import PurchaseBlock from '../components/PurchaseBlock';

const Profile = () =>{
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));
    const [ purchases, setPurchases ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/users/${user._id}/purchases`)
            .then((response) => response.json())
            .then((data) => {
                setPurchases(data);
            })
            .catch((error) => {
                console.log("Erro ao obter compras:", error);
            });
    }, [user]);

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <div className="banner_perfil">
                Perfil
                {user.isAdmin && <Link to="/produtos/back/frutas" className="products-btn">Gerenciar Produtos</Link>}
            </div>
            <div className="perfil_background">
                <h1 id="user_name">Nome: {user.name}</h1>
                <h2 id="email">Email: {user.email}</h2>
                <hr />
                <h1 id="last_purchases_title">Últimas compras</h1>
                {purchases.length ?
                    <span id="last_purchases_container">
                        {purchases.map((purchase, index) => (
                            <PurchaseBlock purchase={purchase} key={index}/>
                        ))}
                    </span>
                :
                    <h4 style={{margin: "30px", color: "grey"}}
                    >Você ainda não efetuou nenhuma compra</h4>
                }
                <hr />
            </div>
        </div>
    )
}

export default Profile;