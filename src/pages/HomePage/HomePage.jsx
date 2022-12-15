import React from 'react';
import styles from './homepage.module.css'
import Intro from '../../components/Intro/Intro';
import NewProducts from '../../components/NewProducts/NewProducts';


const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Intro />
            <NewProducts />
        </div>
    );
};

export default HomePage;