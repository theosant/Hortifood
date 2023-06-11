import React, { useState } from 'react';
import '../styles/ForgotPassword.css'; // Importe o arquivo de estilo CSS

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica para enviar o e-mail de redefinição de senha
    // Normalmente, você chamaria uma função assíncrona para enviar uma solicitação ao servidor

    // Exemplo de código fictício:
    // sendPasswordResetEmail(email);

    setIsSubmitted(true);
  };

  return (
    <div className="login">
      {isSubmitted ? (
        <p>Um e-mail de redefinição de senha foi enviado para o endereço {email}.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Esqueceu a senha?</h2>
          <label>
            E-mail: <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </label>
          <button type="submit" className="btn-submit">Enviar</button>
        </form>
      )}
    </div>
  );
}

export default ForgotPassword;
