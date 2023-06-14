import React from "react";
import '../styles/perfil.css';
import PurchaseBlock from '../components/PurchaseBlock';
import { useAuth } from '../components/Auth/Context';

const Perfil = () =>{
    const { user } = useAuth();
    
    const formatCPF = (cpf) => {
        return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`;
    }

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <div className="banner_perfil">Perfil</div>
            <div className="perfil_background">
                <h2 id="entered">Entrou em: {user.entered}</h2>
                <h1 id="user_name">Nome completo do usuário: {user.name}</h1>
                <h2 id="cpf">CPF: {formatCPF(user.cpf)}</h2>
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
        </div>
    )
}

export default Perfil;