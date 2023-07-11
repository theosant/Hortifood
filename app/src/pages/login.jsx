import React, { useState, useContext } from "react";
import { useAuth } from '../components/Auth/Context';
import '../styles/login.css';
import '../warning.css';
import {Link, useNavigate} from 'react-router-dom';

function initialState() {
    return { email:'', password: '' };
}

async function login({email,password}) {
    const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      return { token: data.token, user: data.user };
    }

    if (data.message) {
      return { error: true };
    }
}

const Login = (props) => {
    const [values, setValues] = useState(initialState);
    const [warning, setWarning] = useState(null);
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
        Promise.resolve(login(values))
          .then(({ token, error, user }) => {
            if (token) {
              localStorage.setItem('token', token);
              localStorage.setItem('user', JSON.stringify(user));
              props._setToken(token);
              props._setUser(user);

              navigate('/');
            }
      
            if (error) {
              setWarning(true);
              setTimeout(() => {
                setWarning(false);
              }, 3000);
            }
          })
          .catch((error) => {
            console.error('Erro ao fazer login:', error);
          });
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