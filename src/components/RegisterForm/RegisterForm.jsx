import React, { useState } from 'react';
import authService from '../../services/auth'
import { Snackbar } from '@mui/material';

const RegisterForm = ({ styles }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("")
    const [open, setOpen] = useState(false)
    const [logout, setLogout] = useState(false)

    const handleClose = () => {
        setOpen(false);
    };

    const register = (e) => {
        e.preventDefault()
        const newUser = {
            email,
            password,
            login
        }
        console.log(newUser);
        authService
            .register(newUser)
            .then(res => {
                setEmail("")
                setPassword("")
                setLogin("")
                setOpen(true)
            })
    }

    return (
        <>
            <form className={styles.form} onSubmit={register}>
                <h2 className={styles.title}>Register</h2>
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
                <div className={styles.control}>
                    <label htmlFor="login" className={styles.label}>Login</label>
                    <input
                        type="text"
                        placeholder='login'
                        name="login"
                        className={styles.input}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <input type="submit" value="Register" className={styles.submit} />
            </form>
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Аккаунт зарегистрирован"
                />
            </div>
        </>
    );
};

export default RegisterForm;

/*
    Задача. Сделать процедуру регистрация
    1. Запросы отправляем на /api/register
    2. Нужно отправлять объект, который состоит из email and password
    3. В ответ на запрос будет приходить данные о зарегистрированном пользователе и зашифрованный пароль
 */