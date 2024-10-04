import React, { useState } from 'react';
import TitleImage from '../images/titulo.svg'; 
import LoginImage from '../images/image-Login.svg'; 

const Login: React.FC = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
    setErrorMessage('Please complete all fields.');
    return;
    }
    // Lógica de autenticação
};

return (
    <div style={styles.container}>
        <div>
        <img 
        src={LoginImage}
        alt="Login"
        style={styles.loginImage}
        />
        </div>
        <div>
        <img 
        src={TitleImage} 
        alt="Título"
        style={styles.titleImage} 
        />
        </div>
    {errorMessage && <p style={styles.error}>{errorMessage}</p>}
    <form onSubmit={handleSubmit} style={styles.loginForm}>
        <div style={styles.inputContainer}>
        <label style={styles.label}>User:</label>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
        />
        </div>
        <div style={styles.inputContainer}>
        <label style={styles.label}>Password:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
        />
        </div>
        <button type="submit" style={styles.button}>Entrar</button>
    </form>
    </div>
);
};

const styles: { [key: string]: React.CSSProperties } = {
container: {
    display: 'flex',
    flexDirection: 'column', // Organiza os itens em coluna
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    width: '932px',
    height: '721px',
    top: '117px',
    left: '254px',
    gap: '0px',
    opacity: '1', // Corrigido para visibilidade
},
images: {
    display: 'flex', // Adicionei aqui para exibir as imagens lado a lado
    gap: '20px', // Adicione um espaço entre as imagens, se desejar
},
loginForm: {
    width: '342px',
    height: '322px',
},
loginImage: {
    width: '231px',
    height: '231px',
},
titleImage: {
    width: '535px',
    height: '141px',
},
inputContainer: {
    marginBottom: '30px',
    textAlign: 'left',
},
label: {
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: '5px',
},
input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
},
button: {
    width: '300px',
    height: '64px',
    padding: '15px 30px',
    borderRadius: '5px',
    backgroundColor: '#4AC959',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
},
error: {
    color: 'red',
    fontSize: '14px',
},
};

export default Login;
