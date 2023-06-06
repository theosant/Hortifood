import React from "react";
import './styles/perfil.css'
import Footer from './components/Footer';
import SiteSections from './components/SiteSections'
import PurchaseBlock from './components/PurchaseBlock'

const Perfil = ({ user }) =>{

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <SiteSections type = "regular"/>
            <div className="banner_perfil">Perfil</div>
            <div className="perfil_background">
                <h2 id="entered">Entrou em: {user.entered}</h2>
                <h1 id="user_name">Nome completo do usuário: {user.name}</h1>
                <h2 id="cpf">CPF: {user.cpf}</h2>
                <h2 id="email">Email: {user.email}</h2>
                <hr />
                <h1 id="last_purchases_title">Últimas compras</h1>
                <span id="last_purchases_container">
                    {user.purchases.map((purchase, index) => (
                        <PurchaseBlock purchase={purchase} key={index}/>
                    ))}
                </span>
                <hr />
            </div>
            <Footer />
        </div>
    )
}

export default Perfil;