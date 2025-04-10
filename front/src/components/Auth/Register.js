import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api';
import { useAuth } from '../../AuthContext';

const Register = () => {
  const [userData, setUserData] = useState({ email: '', password: '', name: '' });
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await register(userData);
      authLogin(user.token);
      navigate('/movies'); // Rediriger vers la liste des films après l'inscription
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom:</label>
        <input type="text" name="name" value={userData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Mot de passe:</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Register;
