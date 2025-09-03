import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import KumasPage from './components/SarimPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username: string) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="min-h-screen">
      {isLoggedIn ? (
        <KumasPage username={username} onLogout={handleLogout} />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
      <Toaster />
    </div>
  );
}