import React, { useState } from "react";
import './styles/payment.css'
import Footer from './components/Footer';
import SiteSections from '../components/SiteSections'

const Payment = () =>{

    const [cart, setCart] = useState([
        {
            item: "banana",
            price: "10",
            category: "frutas",
            final_price: "14.2",
            chosen: false,
        },
        {
            item: "suco",
            price: "20",
            category: "sucos",
            final_price: "15.2",
            chosen: false,
        },
        {
            item: "suco",
            price: "20",
            category: "sucos",
            final_price: "15",
            chosen: false,
        },
    ]);

    const [final_value, setFinalValue] = useState(0);

    const handleCheckboxClick = (purchase) => {
        const updatedCart = cart.map((item) => {
            if (item === purchase) {
                const updatedItem = { ...item };
                updatedItem.chosen = !updatedItem.chosen;
                
                if(updatedItem.chosen === true)
                    setFinalValue(final_value + parseFloat(updatedItem.final_price));
                else
                    setFinalValue(final_value - parseFloat(updatedItem.final_price));

                    return updatedItem;
                }
                return item;
            });
            
        setCart(updatedCart);

        const selectAllButton = document.getElementById("selectAll");
        selectAllButton.disabled = false;
        selectAllButton.checked = false;
    };
    
    const handleCheckAllclick = (event) => {
        setFinalValue(0);
        cart.forEach((purchase) => {
            purchase.chosen = true;
            setFinalValue((prevValue) => prevValue + parseFloat(purchase.final_price));
        });

        const checkboxes = document.getElementsByClassName("selected");
        for(let i = 0; i < checkboxes.length; i++)
            checkboxes[i].checked = true;

        event.target.disabled = true;
    };

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <SiteSections type = "regular"/>
            <div className="payment_background">
                <h1 style={{fontSize: "40px"}}>Pagamento</h1>
                <h3>CEP de envio: XXXX</h3>
                <h2 style={{ marginTop: "40px" }}>No carrinho agora:</h2>
                <hr /> <table className="payment_table">
                    <tr>
                        <td>Item</td><td>Categoria</td><td>Quantidade</td><td>Valor final</td><td></td>
                    </tr>
                </table>
                <hr />
                {cart.map((p, index) => (
                    <div key={index}> <table className="payment_table">
                        <tr>
                            <td>{p.item}</td>
                            <td>{p.category}</td>
                            <td>{p.price}</td>
                            <td>{p.final_price}</td>
                            <td><input className="selected" type="checkbox" onChange={() => handleCheckboxClick(p)}></input></td>
                        </tr>
                    </table> </div>
                ))}
                <hr />
                <table className="payment_table">
                    <tr>
                        <td></td><td></td><td></td>
                        <td><span>Todos:</span><input type="checkbox" id="selectAll" onClick={handleCheckAllclick}></input></td>
                    </tr>
                </table>
                <p id="totalPayment">Valor Total: {final_value.toFixed(2)} R$</p>

                <h2>Pagamento</h2>
                <span className="cardInfoSpan">Número do cartão:</span> <input className="creditCardInfo" type="text"></input> <br />
                <span className="cardInfoSpan">Nome no cartão:</span> <input className="creditCardInfo" type="text"></input> <br />
                <span className="cardInfoSpan">Validade:</span> <input className="creditCardInfo" type="text"></input> <br />
                <span className="cardInfoSpan">Código de segurança:</span> <input className="creditCardInfo" type="text"></input> <br />
                
                <button id="sendPurchase">Finalizar Compra</button>
            </div>
            <Footer />
        </div>
    )
}

export default Payment;