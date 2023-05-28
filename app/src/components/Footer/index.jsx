import React from "react";
import './index.css'

const Footer = () =>{
    return (
    <div className="footer">
        <div className="info">
            <p><a href="../../aboutus.html">Sobre Nós</a></p>
            <p>Contato: <a href="mailto:contato@hortifood.com">contato@hortifood.com</a></p>
        </div>
        <div className="copyright">© Copyright 2023 - Hortifood</div>
    </div>
    )
}

export default Footer;