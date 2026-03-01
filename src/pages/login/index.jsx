import React from "react";
import Form from "../../components/form/index.jsx";

import {setUser} from "../../store/slices/userSlice";
import {useDispatch} from "react-redux";

import {Link, useNavigate} from "react-router-dom";

import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";

import {Alert} from "antd";

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [error, setError] = React.useState("");

    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                    })
                );
                navigate("/");
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/invalid-credential':
                    case 'auth/user-not-found':
                    case 'auth/wrong-password':
                        setError("Неверный email или пароль");
                        break;
                    case 'auth/invalid-email':
                        setError("Неверный формат email");
                        break;
                    case 'auth/too-many-requests':
                        setError("Слишком много попыток. Попробуйте позже");
                        break;
                    case 'auth/network-request-failed':
                        setError("Ошибка сети. Проверьте подключение");
                        break;
                    default:
                        setError(`Ошибка: ${error.message}`);
                }
            });
    };

    return (
        <div className="form">
            <h1>Вход в аккаунт</h1>

            {error && (
                <Alert
                    title={error}
                    type="error"
                    style={{
                        height: "35px",
                        fontSize: "13px",
                        borderRadius: "8px",
                        color: "#B22222",
                        width: "100%",
                        textAlign: "center",
                    }}
                />
            )}

            <Form title="Войти" handleClick={handleLogin}/>

            <div className="flex flex-col text-center gap-y-1">
                <p>Нет аккаунта?</p>
                <Link to="/register">Зарегистрироваться</Link>
            </div>
        </div>
    );
}