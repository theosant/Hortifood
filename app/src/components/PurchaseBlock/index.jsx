import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const PurchaseBlock = ({ purchase }) =>{

    return (
        <div className="purchase_background">
           <h3>Em {purchase.date}</h3>
           <h1 id="purchase_price">{purchase.price} R$</h1>
           <Link
                to="/purchasedetails"
                id="purchase_details_button"
                >Detalhes da compra</Link>
        </div>
    )
}

export default PurchaseBlock;