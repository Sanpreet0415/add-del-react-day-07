import React from 'react';
import { useTheme } from './ThemeContext';
import { useUser } from './UserContext';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Welcome to My App</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
        {user ? (
          <div>
            <p>Hello, {user.name}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => login({ name: 'User' })}>Login</button>
        )}
      </header>
    </div>
  );
};

export default App;
