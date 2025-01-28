// App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError(null); // Limpa erro anterior se houver
    } catch (err) {
      setError('Usuário não encontrado');
      setUserData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      fetchUser();
    }
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="app">
      <h1>GitHub User Finder</h1>
      <form onSubmit={handleSubmit}>
        <img src="./line-md--github-loop.svg" alt="" />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite o nome do usuário"
        />
        <button type="submit">Buscar</button>
      </form>
      
      {error && <p className="error">{error}</p>}

      {userData && (
        <div className="user-card">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          <h2>{userData.name}</h2>
          <p><strong>Login:</strong> {userData.login}</p>
          <p><strong>Bio:</strong> {userData.bio}</p>
          <p><strong>Location:</strong> {userData.location}</p>
          <p><strong>Followers:</strong> {userData.followers}</p>
          <p><strong>Following:</strong> {userData.following}</p>
          <p><strong>Repos:</strong> {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default App;
