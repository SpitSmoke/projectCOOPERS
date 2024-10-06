import React, { useState } from 'react';
import TodoList from './pages/TodoList';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar se o usuário está logado (usar no back-end)

    const handleLoginSuccess = () => {
        setIsLoggedIn(true); // Atualiza o estado para indicar que o login foi bem-sucedido
    };

    return (
        <div>
            <TodoList onLoginSuccess={handleLoginSuccess} />
            {/* A lógica do modal de login está dentro da TodoList, então não precisamos lidar com isso aqui */}
        </div>
    );
};

export default App;

