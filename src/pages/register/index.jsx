import React from 'react';
import Form from '../../components/form/index.jsx';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

import { setUser } from './../../store/slices/userSlice.js';
import { useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const { navigate } = useNavigate();

  const [error, setError] = React.useState('');

  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })

      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setError('Этот email уже зарегистрирован');
            break;
          case 'auth/weak-password':
            setError('Пароль должен быть не менее 6 символов');
            break;
          case 'auth/invalid-email':
            setError('Некорректный email');
            break;
        }
      });
  };

  return (
    <div className="form">
      <h1>Создайте аккаунт</h1>

      {error && <span className="text-red justify-center flex">{error}</span>}

      <Form title="Зарегистрироваться" handleClick={handleRegister} />

      <div className="flex justify-around text-white/80">
        <p>Уже есть аккаунт?</p>
        <Link to="/login">Войти</Link>
      </div>
    </div>
  );
}
