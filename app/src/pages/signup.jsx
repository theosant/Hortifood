import React, { useState } from 'react';
import '../styles/signup.css';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [id, setId] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode processar os dados do formulário, como enviar para um servidor ou atualizar o estado do componente pai
    console.log('Dados do formulário:', { nome, id, endereco, telefone, email });

    // Resetar o formulário
    setNome('');
    setId('');
    setEndereco('');
    setTelefone('');
    setEmail('');
  };

  return (
    <div className="signup">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome: <br />
            <input className="form-input" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            E-mail: <br />
            <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Endereço: <br />
            <input className="form-input" type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Telefone: <br />
            <input className="form-input" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </label>
        </div>
        <Link to="/login" className="btn-submit">Cadastrar</Link>
      </form>
    </div>
  );
}

export default Cadastro;
