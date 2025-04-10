import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
import { useAuth } from '../../AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(credentials);
      authLogin(user.token);
      navigate('/movies'); // Rediriger vers la liste des films après la connexion
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={credentials.email} onChange={handleChange} />
      </div>
      <div>
        <label>Mot de passe:</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Login;
