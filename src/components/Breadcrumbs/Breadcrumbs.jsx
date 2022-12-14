import React from 'react';
import styles from './breadcrumbs.module.css'

const Breadcrumbs = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1>{props.title}</h1>
            <p className={styles.breadcrumb}>Home &#8594; {props.title}</p>
        </div>
    );
};

export default Breadcrumbs;