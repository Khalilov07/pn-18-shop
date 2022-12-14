import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css'
import productService from '../../services/products';
import { TextField } from '@mui/material';


const CatalogPage = () => {

    const [products, setProducts] = useState([])

    const [searchName, setSearchName] = useState('')

    const [filteredCar, setFilteredCar] = useState([])

    useEffect(() => {
        productService
            .getProducts()
            .then(res => {
                setProducts(res.data)
                setFilteredCar(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const findName = (e) => {
        setSearchName(e.target.value)
        setFilteredCar(products.filter(product => product.title.includes(searchName)));
    }


    return (
        <div>
            <Breadcrumbs title="Salon" />
            <div className={styles.filter}>
                <div className={styles.wrapperr}>
                    <div className={styles.text}>
                        <p className=''>Поиск машины:</p>
                    </div>
                    <div className={styles.controls}>
                        <TextField
                            value={searchName}
                            onChange={findName}
                            id="standard-basic"
                            label="Введите название машины..."
                            variant="standard"
                            style={{ "fontSize": "14px" }} />
                    </div>
                </div>
            </div>
            <div className={styles["products-wrapper"]}>
                {filteredCar.map(product => {
                    return <Product
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        title={product.title}
                        price={product.price}
                        descr={product.descr}
                    />
                })}
            </div>
            <Info />
            <Footer />
        </div>
    );
};

export default CatalogPage;