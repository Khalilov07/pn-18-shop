import React from 'react';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import CartProduct from '../../components/CartProduct/CartProduct';
import styles from './cartpage.module.css'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51LY447HWg33SQmOYkw5NDamYDIC6nmq6E8TuAzs8BFgElOjFEhM8GjZxjoIguoAhF07s5XgS346RXTd4Fx4xz9rX00cYDOothX');

const CartPage = () => {
  const products = useSelector(state => state.product.products)
  const total = useSelector(state => state.product.total)
  return (
    <>
      <Breadcrumbs title="Ordering" />
      <section className={styles.cart}>
        <div className={styles.wrapper}>
          <div className={styles.products}>
            <div className={styles.header}>
              <p className={styles.name}>Product</p>
              <p className={styles.name}>Price</p>
              <p className={styles.name}>Quantity</p>
              <p className={styles.name}>Subtotal</p>
              <p className={styles.name}></p>
            </div>
            {products.map((product) => {
              return (
                <CartProduct
                  key={product.id}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                />
              );
            })}
          </div>
          <div className={styles.totals}>
            <h3 className={styles.title}>Cart totals</h3>
            <p className={styles.subtotal}>
              Subtotal <span>{total}</span>
            </p>
            <p className={styles.total}>
              Total <span>{total}</span>
            </p>
            <button className={styles.checkout}>Check Out</button>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </section>
    </>
  );
};

export default CartPage;