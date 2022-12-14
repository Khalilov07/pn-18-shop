import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../services/products';
import styles from './product.module.css'

const Product = (props) => {

    return (

        <div className={styles.card}>
            <Link className={styles.link} title={"Узнать больше о машине..."} to={`/car/${props.id}`}>
                <img src={props.img} alt="" className={styles.img} />
                <h4 className={styles.name}>
                    {props.title}
                </h4>
                <h4 className={styles.price}>
                    {props.price} USD
                </h4>
            </Link>
        </div>
    );
};

export default Product;