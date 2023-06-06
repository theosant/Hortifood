import React from "react";
import './styles/purchasedetails.css'
import Footer from './components/Footer';
import SiteSections from './components/SiteSections'

const PurchaseDetails = () =>{

    const purchase_details = [{
            item: "banana",
            price: "10",
            category: "frutas",
            final_price: "14",
        },
        {
            item: "suco",
            price: "20",
            category: "sucos",
            final_price: "15",
        },
    ]

    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <SiteSections type = "regular"/>
            <div className="purchase_details_background">
                <h1>Detalhes da compra</h1>
                <h3>Realizada em: XX/XX/XXXX</h3>
                <h3>Para o CEP: </h3>
                <h2 id="price">Valor XX R$</h2>
                <h2 style={{ marginTop: "40px" }}>Descrição dos itens:</h2>
                <hr /> <table className="purchase_details_table">
                    <tr>
                        <td>Item</td><td>Categoria</td><td>Quantidade</td><td>Valor final</td>
                    </tr>
                </table>
                <hr />
                {purchase_details.map((p) => (
                    <div> <table className="purchase_details_table">
                        <tr>
                            <td>{p.item}</td><td>{p.category}</td><td>{p.price}</td><td>{p.final_price}</td>
                        </tr>
                    </table> </div>
                ))}
                <hr />
            </div>
            <Footer />
        </div>
    )
}

export default PurchaseDetails;