import React from "react";
import './index.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (

        <div className="footer">
          <div className="info">
            <p>
              <Link to="/sobre">Sobre Nós</Link>
            </p>
            <p>
              Contato: <text>contato@hortifood.com</text>
            </p>
          </div>
          <div className="copyright">
            © Copyright 2023 - Hortifood
          </div>
        </div>
    );
};  

export default Footer;