import React, { useState } from 'react';
import TitleImage from '../images/titulo.svg'; 
import LoginImage from '../images/image-Login.svg'; 

interface LoginProps {
    onClose: () => void; 
    onLoginSuccess: () => void; 
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username || !password) {
            setErrorMessage('Please complete all fields.');
            return;
        }
        // Lógica de autenticação
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div style={styles.modalContainer}>
            {/* Overlay que escurece o fundo */}
            <div style={styles.overlay} onClick={onClose}></div>
            
            {/* Conteúdo do modal */}
            <div style={styles.container}>
                <button 
                    type="button" 
                    style={styles.btnClose}
                    onClick={onClose} 
                >
                    Close
                </button>
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
                            style={styles.input1}
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
                    <button
                        type="submit"
                        style={{
                            ...styles.button,
                            backgroundColor: isHovered ? '#3A9C47' : '#4AC959',
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

// Estilos
const styles: { [key: string]: React.CSSProperties } = {
    modalContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    btnClose: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none', 
        border: 'none', 
        fontSize: '20px',
        cursor: 'pointer',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '700'
    },
    container: {
        fontFamily: 'Montserrat, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '0px', 
        width: '932px', 
        height: '721px', 
        zIndex: 10, 
        position: 'relative',
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
        marginBottom: '30 px',
        alignItems: 'center',
    },
    label: {
        fontWeight: '600',
        fontSize: '24px',
        marginBottom: '3px',
    },
    input1: {
        width: '342px',
        height: '54px',
        fontSize: '21px',
        borderRadius: '10px',
        border: '1px solid #959595',
        padding: '10px',
        marginBottom: '30px',
    },
    input: {
        width: '342px',
        height: '54px',
        fontSize: '21px',
        borderRadius: '10px',
        border: '1px solid #959595',
        padding: '10px'
    },
    button: {
        fontWeight: '500',
        fontSize: '24px',
        width: '300px',
        height: '64px',
        margin: '56px 21px 0 21px',
        padding: '15px 30px',
        backgroundColor: '#4AC959',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-in-out',
    },
    error: {
        color: 'red',
        fontSize: '21px',
        marginBottom: '30px'
    },
};

export default Login;