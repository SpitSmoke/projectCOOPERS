import React, { useState } from 'react';
import Login from './Login'; 
import Logo from '../todo-images/Logo.svg'
import BG from '../todo-images/BG.svg'
import Foto from '../todo-images/foto.svg'
import Icon from '../todo-images/icon-scroll.svg'
import BGTodo from '../todo-images/BG-todo.svg'
import '../styles/main.scss';


const TodoList: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
    const [showLogin, setShowLogin] = useState(false); 

    // Função para abrir o modal de login
    const handleLoginOpen = () => {
        setShowLogin(true);
    };

    // Função para fechar o modal de login
    const handleLoginClose = () => {
        setShowLogin(false);
    };

    return (
        <div className='container'>
            {/* Seção Hero */}
            <div className='hero'>
            <div className='hero-top'>
            <img className='top-logo'
                alt="Logo"
                src={Logo} 
                />

                <button 
                    onClick={handleLoginOpen}
                    className='hero-btn'> Account
                </button>

                <div className='hero-content'>
                        <div className='content-container'>
                            <h1 className='content-title'>Organize
                            <span>your daily jobs</span></h1>
                            <p className='content-write'>The only way to get things done</p>
                        <button className='content-button'>
                            Go to To-do list
                        </button>
                        <div className='content-image'>
                            <img src={Foto} 
                                alt='Escritorio'
                                title='Office'/>
                        </div>
                        </div>
                </div>

                <div className='hero-bg'>
                    <img className='hero-bg-image'
                        alt="Background"
                        src={BG} />
                </div>
                <div className='hero-arrow'>
                <img src={Icon} 
                alt="Icone" 
                title="Icone"
/>
                </div>
            </div>
        </div>
        <div className='container-todo-title'>
            <div className='todo-image'>
                <img src={BGTodo} />
            </div>
            <div className='todo-title'>
                <h1>My Todo List</h1>
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                </ul>
            </div>
        </div>
            {/* Exibe o modal de Login se o estado showLogin for true */}
            {showLogin && <Login onClose={handleLoginClose} onLoginSuccess={onLoginSuccess} />}

            {/* Aqui você pode adicionar a lógica da sua lista de tarefas */}

        </div>
    );
}

// Estilos
// const styles: Record<string, React.CSSProperties> = {
//     hero: {
//         display: 'flex',
//         position: 'relative',
//         width: '100%',
//         height: '734px',
//         top: '24px',
//         border: '1px solid red',    
//         color: '#fff',
//     },
//     top: {
//         // justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     logo: {
//     width: '217px',
//     height: '50px',
//     top: '54px',
//     left: '80px'
//     },
//     loginButton: {
//         position: 'absolute', 
//         width: '120px',
//         height: '40px',
//         top: '54px',
//         left: '1140px',
//         marginRight: '80px',
//         backgroundColor: '#000000',
//         color: '#fff',
//         fontFamily: 'Poppins, sans-serif',
//         fontWeight: '600',
//         fontSize: '14px',
//         border: 'none',
//         cursor: 'pointer',
//     },
// };

export default TodoList;
