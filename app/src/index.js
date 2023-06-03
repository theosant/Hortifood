import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import AboutUs from './aboutus';
// import Login from './login';
import Product from './product';

const root = ReactDOM.createRoot(document.getElementById('root'));

const product = {
  name: "Banana Nanica",
  price: "40,00",
}

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AboutUs /> */}
    {/* <Login /> */}
    <Product Product = {product}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
