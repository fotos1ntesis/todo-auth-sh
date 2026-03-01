import {Navigate} from "react-router-dom";

import {removeUser} from "../../store/slices/userSlice.js";
import {useDispatch} from "react-redux";

import {useAuth} from "../../hooks/useAuth.js";

import {Button} from "antd";

export default function HomePage() {
    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();
    return isAuth ? (
        <div className='text-center flex flex-col gap-y-3 items-center'>
            <h1>Привет, {email}</h1>
            <Button
                type="primary"
                onClick={() => dispatch(removeUser())}>
                Выйти из аккаунта
            </Button>
        </div>
    ) : (
        <Navigate to="/login"/>
    );
}