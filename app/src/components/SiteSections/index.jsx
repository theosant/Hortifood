import React from "react";
import './index.css'

const SiteSections = (props) =>{
    console.log(props.type);
    if(props.type === "regular"){

        return (
            <div className="background_site_sections regular">
                <a href="./index.css" class="frutas">Frutas</a>
                <a href="./index.css" class="sucos">Sucos</a>
                <a href="./index.css" class="verduras">Verduras</a>
            </div>
        )

    } else {

        return (
            <div className="background_site_sections main_page">
                <div className="secao">
                    <a href="#frutas">
                        <div className="secao-icon">
                            <img src="images/frutas-icon.png" alt="Frutas" style={{width: 100 + 'px', height: 100 + 'px',}}/>
                        </div>
                        <p>Frutas</p>
                    </a>
                </div>
                <div className="secao">
                    <a href="#vegetais">
                        <div className="secao-icon">
                            <img src="images/vegetais-icon.png" alt="Vegetais"/>
                        </div>
                        <p>Vegetais</p>
                    </a>
                </div>
                <div className="secao">
                    <a href="#sucos">
                        <div className="secao-icon">
                            <img src="images/sucos-icon.png" alt="Sucos"/>
                        </div>
                        <p>Sucos</p>
                    </a>
                </div>
            </div>
        )

    }
}

export default SiteSections;