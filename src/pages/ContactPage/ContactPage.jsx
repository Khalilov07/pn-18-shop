import React from 'react';
import styles from './contact.module.css'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import TextField from '@mui/material/TextField';

const ContactPage = () => {
    return (
        <>
        <Breadcrumbs title="Contact" />
        <div className={styles.wrapper}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
        </>
    );
};

export default ContactPage;