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
    <button type="button" style={styles.btnClose}>close</button>
        <div style={styles.images}>
        <img 
        src={LoginImage}
        alt="Login"
        style={styles.loginImage}
        />
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
        <button type="submit" style={styles.button}>Sign in</button>
    </form>
    </div>
);
};

const styles: { [key: string]: React.CSSProperties } = {
container: {
    fontFamily: 'Monstserrat, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%',
    height: '721px',
    top: '117px',
    left: '254px',
},
btnClose: {
    width: '55px',
    height: '64px',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '64px',
    background: 'none', 
    border: 'none', 
    cursor: 'pointer',
    position: 'absolute',
    top: '0',
    right: '0',
    marginRight: '23px'
},
images: {
    display: 'flex',  
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
    marginBottom: '5px',
},
input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
},
button: {
    fontWeight: '500',
    fontSize: '24px', 
    width: '300px',
    height: '64px',
    margin: '0 auto',
    padding: '15px 30px',
    backgroundColor: '#4AC959',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    lineHeight: '29.26px',
    alignContent: 'center',
},
error: {
    color: 'red',
    fontSize: '14px',
},
};

export default Login;
