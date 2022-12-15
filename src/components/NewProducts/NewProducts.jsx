import React from 'react';
import styles from './newproducts.module.css'
import { Link } from 'react-router-dom';

const NewProducts = () => {



    return (
        <div className={styles.wrapper}>  
            
            <Link className={styles.link} to='/catalog'>Посмотреть машины</Link>
        </div>
    );
};

export default NewProducts;