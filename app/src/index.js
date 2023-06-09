import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import AboutUs from './aboutus';
import Login from './login';
import Product from './product';
import Perfil from './perfil';
import PurchaseDetails from "./purchasedetails"
import Payment from './payment';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const product = {
//   name: "Banana Nanica",
//   price: 40,
// }

// const user = {
//     name: "Claudio",
//     email: "sdnciuner@",
//     entered: "10/10/10",
//     cpf: "XXX.XXX.XXX-XX",
//     purchases: [
//       {
//         price: "40",
//         date: "10/10/10",
//       },
//       {
//         price: "500",
//         date: "20/20/20",
//       },
//     ]
// }

root.render(
  <React.StrictMode>
    <App />
    {/* <AboutUs /> */}
    {/* <Login /> */}
    {/* <Product Product = {product}/> */}
    {/* <Perfil user = {user} /> */}
    {/* <PurchaseDetails /> */}
    {/* <Payment /> */}
  </React.StrictMode>
);