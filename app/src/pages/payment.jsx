import React, { useState, useEffect } from "react";
import '../styles/payment.css'
import SiteSections from '../components/SiteSections'
import { Link } from "react-router-dom";

const Payment = ({setCart}) =>{
    const cart = JSON.parse(localStorage.cart) 
    const [totalPrice, setTotalPrice] = useState(0)
    const [final_value, setFinalValue] = useState(0);

    const handleTotalPrice = () => {
        let total = 0;
        cart.forEach((product,index) => {
            if(checkboxes[index].checked)
                total += product.amount*product.price/1000
        })
        setTotalPrice(total);
    }


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
    let checkboxes = document.getElementsByClassName("selected");
    const handleCheckAllclick = (event) => {
        cart.forEach((purchase) => {
            purchase.chosen = event.target.checked;
        });

        checkboxes = document.getElementsByClassName("selected");
        for(let i = 0; i < checkboxes.length; i++)
            checkboxes[i].checked = event.target.checked;
        handleTotalPrice()
    };
    
    useEffect(() => {
        handleTotalPrice()
      }, [cart,checkboxes]); 

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
                            <td>{p.name}</td>
                            <td>{p.type}</td>
                            <td>{(p.amount/1000).toFixed(2)}Kg</td>
                            <td>{(p.amount/1000* p.price).toFixed(2)} R$</td>
                            <td><input defaultChecked={true} className="selected" type="checkbox" onChange={() => handleCheckboxClick(p)}></input></td>
                        </tr>
                    </table> </div>
                ))}
                <hr />
                <table className="payment_table">
                    <tr>
                        <td></td><td></td><td></td>
                        <td><span>Todos:</span><input defaultChecked={true} type="checkbox" id="selectAll" onClick={handleCheckAllclick}></input></td>
                    </tr>
                </table>
                <p id="totalPayment">Valor Total: {totalPrice.toFixed(2)} R$</p>

                <h2>Pagamento</h2>
                <span className="cardInfoSpan">Número do cartão:</span> <input className="creditCardInfo" type="text"></input> <br />
                <span className="cardInfoSpan">Nome no cartão:</span> <input className="creditCardInfo" type="text"></input> <br />
                <span className="cardInfoSpan">Validade:</span> <input className="creditCardInfo" type="text"></input> <br />
                <span className="cardInfoSpan">Código de segurança:</span> <input className="creditCardInfo" type="text"></input> <br />

                <Link to="/thanks" onClick={() => {setCart([]);localStorage.setItem('cart', JSON.stringify([]))}} id="sendPurchase">Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Payment;