import React, { useState } from 'react';
import '../styles/signup.css';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nome,
      email: email,
      password: senha,
      address: endereco,
      telephone: telefone,
    };

    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw new Error(data.message)
        }

        console.log('Resposta do backend:', data);
  
        setNome('');
        setSenha('');
        setEndereco('');
        setTelefone('');
        setEmail('');
        navigate('/login');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar:', error);
      });
  };

  return (
    <div className="signup">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome: <br />
            <input className="form-input" type="text" value={nome} name="name" onChange={(e) => setNome(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            E-mail: <br />
            <input className="form-input" type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Senha: <br />
            <input className="form-input" type="password" value={senha} name="password" onChange={(e) => setSenha(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Endereço: <br />
            <input className="form-input" type="text" value={endereco} name="address" onChange={(e) => setEndereco(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Telefone: <br />
            <input className="form-input" type="text" value={telefone} name="telephone" onChange={(e) => setTelefone(e.target.value)} />
          </label>
        </div>
        <button type="submit" className="btn-submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
