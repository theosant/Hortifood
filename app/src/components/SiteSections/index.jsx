import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const SiteSections = ({ type }) =>{
    if(type === "regular"){

        return (
            <div className="background_site_sections regular">
                <Link  to="/produtos/fruta">Frutas</Link>
                <Link  to="/produtos/suco" className="sucos">Sucos</Link>
                <Link  to="/produtos/vegetal">Verduras</Link>
            </div>
        )

    } else {

        return (
            <div className="background_site_sections main_page">
                <div className="secao">
                    <Link  to="/produtos/fruta">
                        <div className="secao-icon">
                            <img src="imagens/frutas-icon.png" alt="Frutas" style={{width: 100 + 'px', height: 100 + 'px',}}/>
                        </div>
                        <p>Frutas</p>
                    </Link>
                </div>
                <div className="secao">
                    <Link to="/produtos/vegetal">
                        <div className="secao-icon">
                            <img src="imagens/vegetais-icon.png" alt="Vegetais"/>
                        </div>
                        <p>Vegetais</p>
                    </Link>
                </div>
                <div className="secao">
                    <Link  to="/produtos/suco">
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