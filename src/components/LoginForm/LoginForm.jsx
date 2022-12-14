import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar } from '@mui/material';
import { loginSuccess } from '../../redux/usersSlices';
import axios from 'axios';

const LoginForm = ({ styles }) => {

    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("")
    const dispatch = useDispatch()
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            email,
            password,
            login
        }
        axios
            .post('http://localhost:3002/login', user)
            .then(res => {
                console.log(res.data.user.login)
                dispatch(loginSuccess(res.data.user))
                setEmail("")
                setPassword("")
                setLogin("")
                setOpen(true)
            })
            .catch(err => console.log(err.data))
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleLogin}>
                <h2 className={styles.title}>Login</h2>
                <div className={styles.control}>
                    <label htmlFor="email" className={styles.label}>Email address</label>
                    <input
                        type="email"
                        placeholder='email'
                        name="email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.control}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input
                        type="password"
                        placeholder='password'
                        name="password"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <input type="submit" value="Log In" className={styles.submit} />
            </form>
            <div>
            <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Вы вошли в аккаунт"
                />
            </div>
        </>
            );
};

            export default LoginForm;

/*
    1. Создать redux store для хранения User в папке redux.
    2. Создать экшны LoginSuccess и Logout
    3. Отправлять запрос с введеным логином и паролем на /api/login 
    4. В ответ на запрос будут приходит данные о пользователе, которые нужно сохранять в store
*/