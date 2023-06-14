import React, { useState, useContext } from "react";
import { useAuth } from '../components/Auth/Context';
import '../styles/login.css';
import '../warning.css';
import {Link, useNavigate} from 'react-router-dom';

function initialState() {
    return { email:'', password: '' };
}

function login({email,password}) {
    if (email === 'admin@mail.com' && password === 'admin') {
        return { token: '1234', admin: true };
    }

    if (email === 'user@mail.com' && password === 'user') {
        return {token: '1234', admin: false };
    }

    return { error: true }
}

const Login = (props) =>{
    const [values, setValues] = useState(initialState);
    const [warning, setWarning] = useState(null);
    const { setToken, setUser } = useAuth();
    const navigate = useNavigate();

    function onChange(e) {
        const {value, name} = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    function onSubmit(e) {
        e.preventDefault();
        const { token, error, admin } = login(values);
        console.log(values);

        if (token) {
            setToken(token);
            let today = new Date(); 
            let user = {
                entered: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} - ${today.getHours()}h${today.getMinutes()}`,
                name: 'Alan Turing',
                cpf: '12345678909',
                email: 'admin@mail.com',
                purchases: [],
                admin
            };
            setUser(user)

            // localStorage.setItem('token', token);
            // localStorage.setItem('user', JSON.stringify(user));

            navigate('/');
        }

        if (error) {
            setWarning(true);
            setTimeout(() => {
                setWarning(false)
            }, 3000);
        }
    }

    return (
        <section className="login">
            <h1>Login</h1>
            {warning && <div className="warning">Usuário ou senha inválidos</div>}
            <form action="" method="post" onSubmit={onSubmit}>
                <label for="email">
                    <b><span className="material-symbols-rounded"></span> Email</b>
                </label>
                <input type="email" placeholder="example@mail.com" name="email" onChange={onChange} className="form-input" required/>
            
                <label for="password"><b><span className="material-symbols-rounded"></span> Senha</b></label>
                <input type="password" placeholder="Digite sua senha" name="password" onChange={onChange} className="form-input" required/>
                <Link to="/forgotpass" className="forgot-pass">Esqueceu a senha?</Link>

                <button type="submit">Entrar</button>
                <hr />
                <Link to="/signup" className="signup__button">Cadastrar-se</Link>
            </form>
        </section>
    )
}

export default Login;