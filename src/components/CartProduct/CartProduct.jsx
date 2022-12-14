import React from 'react';
import styles from './cartproduct.module.css';

const CartProduct = (props) => {
    return (
        <div className={styles.wrapper}>
            <img src={props.img} alt="" className={styles.img} />
            <p className={styles.name}>{props.title}</p>
            <p className={styles.price}>{props.price}</p>
            <p className={styles.quantity}>{props.quantity}</p>
            <p className={styles.subtotal}>{props.price * props.quantity}</p>
            <button><img src="images/delete-icon" alt="" /></button>
        </div>
    );
};

export default CartProduct;