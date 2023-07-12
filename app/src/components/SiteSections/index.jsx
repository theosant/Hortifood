import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const SiteSections = ({ type, backOffice = false }) =>{
    const productsAdress = backOffice ? `/produtos/back/` : `/produtos/`;

    if(type === "regular"){

        return (
            <div className="background_site_sections regular">
                <Link to={productsAdress + "frutas"}>Frutas</Link>
                <Link to={productsAdress + "sucos"} className="sucos">Sucos</Link>
                <Link to={productsAdress + "vegetais"}>Verduras</Link>
            </div>
        )

    } else {

        return (
            <div className="background_site_sections main_page">
                <div className="secao">
                    <Link  to={productsAdress + "frutas"}>
                        <div className="secao-icon">
                            <img src="imagens/frutas-icon.png" alt="Frutas" style={{width: 100 + 'px', height: 100 + 'px',}}/>
                        </div>
                        <p>Frutas</p>
                    </Link>
                </div>
                <div className="secao">
                    <Link to={productsAdress + "vegetais"}>
                        <div className="secao-icon">
                            <img src="imagens/vegetais-icon.png" alt="Vegetais"/>
                        </div>
                        <p>Vegetais</p>
                    </Link>
                </div>
                <div className="secao">
                    <Link to={productsAdress + "sucos"}>
                        <div className="secao-icon">
                            <img src="imagens/sucos-icon.png" alt="Sucos"/>
                        </div>
                        <p>Sucos</p>
                    </Link>
                </div>
            </div>
        )

    }
}

export default SiteSections;