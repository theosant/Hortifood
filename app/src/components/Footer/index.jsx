import React from "react";
import './index.css'

import { Link, BrowserRouter } from 'react-router-dom';

const Footer = () => {
    return (
      <BrowserRouter>
        <div className="footer">
          <div className="info">
            <p>
              <Link to = "../../aboutus.jsx">Sobre Nós</Link>
            </p>
            <p>
              Contato: <a href="mailto:contato@hortifood.com">contato@hortifood.com</a>
            </p>
          </div>
          <div className="copyright">
            © Copyright 2023 - Hortifood
          </div>
        </div>
      </BrowserRouter>
    );
};  

export default Footer;