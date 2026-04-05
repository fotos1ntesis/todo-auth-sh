import React from 'react';

import Form from '../../components/form/index.jsx';

import { setUser } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = React.useState('');

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        const token = await user.getIdToken();
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: token,
          })
        );
        navigate('/');
      })

      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-credential':
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            setError('Неверный email или пароль');
            break;
          case 'auth/invalid-email':
            setError('Неверный формат email');
            break;
          case 'auth/too-many-requests':
            setError('Слишком много попыток. Попробуйте позже');
            break;
          case 'auth/network-request-failed':
            setError('Ошибка сети. Проверьте подключение');
            break;
          default:
            setError(`Ошибка: ${error.message}`);
        }
      });
  };

  return (
    <div className="form">
      <h1>Вход в аккаунт</h1>

      {error && <span className="text-red justify-center flex">{error}</span>}

      <Form title="Войти" handleClick={handleLogin} />

      <div className="flex justify-around text-white/80">
        <p>Нет аккаунта?</p>
        <Link to="/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
}
