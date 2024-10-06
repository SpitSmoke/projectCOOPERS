import React, { useState } from 'react';
import Login from './Login'; // Certifique-se de que o caminho está correto

const TodoList: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
    const [showLogin, setShowLogin] = useState(false); // Estado para controlar a visibilidade do modal de login

    // Função para abrir o modal de login
    const handleLoginOpen = () => {
        setShowLogin(true);
    };

    // Função para fechar o modal de login
    const handleLoginClose = () => {
        setShowLogin(false);
    };

    return (
        <div>
            {/* Seção Hero */}
            <header style={styles.hero}>
                <h1 style={styles.title}>Bem-vindo à sua lista de tarefas!</h1>
                <button style={styles.loginButton} onClick={handleLoginOpen}>
                    Entrar
                </button>
            </header>

            {/* Exibe o modal de Login se o estado showLogin for true */}
            {showLogin && <Login onClose={handleLoginClose} onLoginSuccess={onLoginSuccess} />}

            {/* Aqui você pode adicionar a lógica da sua lista de tarefas */}
            <div style={styles.todoList}>
                <h2>Suas Tarefas</h2>
                {/* Adicione a lógica e os componentes para sua lista de tarefas aqui */}
            </div>
        </div>
    );
};

// Estilos
const styles: Record<string, React.CSSProperties> = {
    hero: {
        display: 'flex',
        flexDirection: 'column' as 'column', // Forçando o tipo para 'column'
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        backgroundColor: '#4AC959',
        color: '#fff',
        position: 'relative',
        padding: '20px',
    },
    title: {
        fontSize: '36px',
        margin: '0',
    },
    loginButton: {
        position: 'absolute' as 'absolute', // Forçando o tipo para 'absolute'
        top: '20px',
        right: '20px',
        backgroundColor: '#fff',
        color: '#4AC959',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    todoList: {
        padding: '20px',
        // Adicione mais estilos conforme necessário
    },
};

export default TodoList;
