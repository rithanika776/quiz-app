import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      onLogin(username);
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '100%', padding: '10px', margin: '20px 0', borderRadius: '5px' }}
      />
      <button onClick={handleLogin}>Start Quiz</button>
    </div>
  );
}

export default LoginPage;
