import React from "react";
import './index.css'

const PurchaseBlock = ({ purchase }) =>{
    // console.log(purchase.purchase.price)
    // console.log(purchase.price)

    return (
        <div className="purchase_background">
           <h3>Em {purchase.date}</h3>
           <h1 id="purchase_price">{purchase.price} R$</h1>
           <div id="purchase_details_button">Detalhes da compra</div>
        </div>
    )
}

export default PurchaseBlock;