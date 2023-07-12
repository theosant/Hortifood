import React, { useState, useEffect } from "react";
import '../styles/payment.css'
import SiteSections from '../components/SiteSections'
import { Link } from "react-router-dom";

const Payment = ({cart, setCart, _user}) =>{
    const [totalPrice, setTotalPrice] = useState(0)
    const [finalValue, setFinalValue] = useState(0);

    const handleTotalPrice = () => {
        let total = 0;
        cart.forEach((product,index) => {
            if(checkboxes[index].checked)
                total += product.amount*product.price/1000
        })
        setTotalPrice(total);
    }

    // function updateProduct() {
    //     const updatedProduct = { ...product};

    //     fetch(`http://localhost:3001/product/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(updatedProduct),
    //     })
    //     .then((response) => {
    //         if (response.ok) {
    //             console.log('Produto atualizado com sucesso!');
    //         } else {
    //             console.error('Erro ao atualizar o produto');
    //         }
    //     })
    //     .catch((error) => {
    //         console.error('Erro ao atualizar o produto:', error);
    //     });
    // }


    const handleCheckboxClick = (purchase) => {
        const updatedCart = cart.map((item) => {
            if (item === purchase) {
                const updatedItem = { ...item };
                updatedItem.chosen = !updatedItem.chosen;

                if(updatedItem.chosen === true)
                    setFinalValue(finalValue + parseFloat(updatedItem.final_price));
                else
                    setFinalValue(finalValue - parseFloat(updatedItem.final_price));

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
        handleTotalPrice();
    }, [cart, checkboxes]); 

    const handleSendPurchase = () => {
        let input_CEP = document.getElementById("CEP");

        let id = _user._id;
        let today = new Date();
        let itemstoUpdate = cart.filter((p, index) => checkboxes[index].checked === true)
        itemstoUpdate.forEach(item => {
            item.on_stock -= item.amount/1000
            let itemupdated = {
                "name": item.name,
                "price": item.price,
                "highlight": item.highlight,
                "type": item.type,
                "season": item.season,
                "srcUrl": item.srcUrl,
                "on_stock": item.on_stock
            }
            
            fetch(`http://localhost:3001/product/${item._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
            })
            .then((response) => {
                if (response.ok) {
                    console.log('Produto atualizado com sucesso!');
                } else {
                    console.error('Erro ao atualizar o produto');
                }
            })
            .catch((error) => {
                console.error('Erro ao atualizar o produto:', error);
            });
        })
        let purchaseItems = cart
            .filter((p, index) => checkboxes[index].checked === true)
            .map(p => ({ name: p.name, type: p.type, price: p.price, amount: p.amount }));
      
        let newPurchase = {
            userID: {id},
            price: {finalValue},
            date: {today},
            cep: input_CEP.value,
            method: 'Cartão de Crédito',
            items: purchaseItems
        }

        fetch("http://localhost:3001/purchase", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Compra inserida no banco de dados:", data);
                setCart([]);
                localStorage.setItem("cart", JSON.stringify([]));
            })
            .catch((error) => {
                console.log("Erro ao inserir compra:", error);
            });

        // setCart([]);
        // localStorage.setItem('cart', JSON.stringify(cart));
    }

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <SiteSections type = "regular"/>
            <div className="payment_background">
                <h1 style={{fontSize: "40px"}}>Pagamento</h1>
                <span>CEP de envio:</span> <input  id="CEP" className="creditCardInfo" type="text"></input> <br />
                <h2 style={{ marginTop: "30px", marginBottom: "0px" }}>No carrinho agora:</h2>
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
                            <td>{(p.amount/1000).toFixed(2)}</td>
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
                <span className="cardInfoSpan">Número do cartão:</span> <input id="cardNumber" className="creditCardInfo" type="text"></input> <br />
                <span className="cardInfoSpan">Nome no cartão:</span> <input id="cardName" className="creditCardInfo" type="text"></input> <br />
                <span className="cardInfoSpan">Validade:</span> <input id="cardValidity" className="creditCardInfo" type="text"></input> <br />
                <span className="cardInfoSpan">Código de segurança:</span> <input id="cardSecCode" className="creditCardInfo" type="text"></input> <br />

                <Link to='/thanks' onClick={handleSendPurchase} id="sendPurchase">Finalizar Compra</Link>
            </div>
        </div>
    )
}

export default Payment;