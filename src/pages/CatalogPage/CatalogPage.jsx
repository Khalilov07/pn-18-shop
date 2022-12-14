import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css'
import productService from '../../services/products'
import { useParams } from 'react-router-dom';

const CatalogPage = () => {

    const [products, setProducts] = useState([])

    const [sorted, setSorted] = useState("price")
    
    useEffect(() => {
        productService
            .getProducts()
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    // useEffect(() => {
    //     setProducts([].concat(products).sort((a, b) => {
    //         if(sorted == "price") {
    //             return a.price - b.price
    //         }
    //         return new Date(a.createdAt) - new Date(b.createdAt)
    //     }))
    // }, [sorted])
    

    return (
        <div>
            <Breadcrumbs title="Salon" />
            <Filter sort={sorted} sortHandle={setSorted} />
            <div className={styles["products-wrapper"]}>
                { products.map(product => {
                   return <Product
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        title={product.title}
                        price={product.price}
                        descr={product.descr}
                    />
                }) }
            </div>
            <Info />
            <Footer />
        </div>
    );
};

export default CatalogPage;