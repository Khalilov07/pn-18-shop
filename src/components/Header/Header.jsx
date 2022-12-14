import React, {useState} from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar } from '@mui/material';
import { logout } from '../../redux/usersSlices';


const Header = () => {

    const { currentUser, isAdmin } = useSelector(state => state.user)

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <header>
                <div className={styles.wrapper}>
                    <nav className={styles.nav}>
                        <Link to="/" className={styles.link}>Home</Link>
                        <Link to="/catalog" className={styles.link}>Salon</Link>
                        <Link to="/contact" className={styles.link}>Contact</Link>
                        {isAdmin ?
                            <>
                                <Link to="/addcar" className={styles.link}>Add to salon</Link>
                                <Link to="/account" className={styles.link}>{currentUser?.login}</Link>
                                <button className={styles.button} onClick={() => {dispatch(logout()); setOpen(true);}}>Log out</button>
                            </>
                            :
                            currentUser &&
                            <>
                                <Link to="/account" className={styles.link}>{currentUser?.login}</Link>
                                <button className={styles.button} onClick={() => {dispatch(logout()); setOpen(true);}}>Log out</button>
                            </>
                        }

                    </nav>
                    <div className={styles.icons}>
                        <Link to="/account" className={styles.icon}>
                            <img src="/images/profile-icon.png" alt="" className={styles.icon} />
                        </Link>
                        <Link to="/cart" className={styles.icon}>
                            <img src="/images/basket-icon.png " alt="" className={styles.icon} />
                        </Link>
                    </div>
                </div>
            </header>
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Вы вышли с аккаунта"
                />
            </div>
        </>
    );
};

export default Header;