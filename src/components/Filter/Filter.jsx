import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import styles from './filter.module.css'
import productService from '../../services/products'
import axios from 'axios';

const Filter = ({ sort, sortHandle }) => {


    // console.log(products);

    const [searchName, setSearchName] = useState('')

    const [filteredCar, setFilteredCar] = useState('')

    const [products, setProducts] = useState([])

    useEffect(() => {
        productService
            .getProducts()
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const findName = (e) => {
        setSearchName(e.target.value)
        setProducts(products.filter(product => product.title.includes(searchName)));
    }

    return (
        <div className={styles.filter}>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <p className=''>Поиск машины:</p>
                    {/* <p className={styles["filter-text"]}>Filter</p>
                    <p className={styles["amount-text"]}>Showing 1-16 of 32 results</p> */}
                </div>
                <div className={styles.controls}>
                    <TextField
                        value={searchName}
                        onChange={findName}
                        id="standard-basic"
                        label="Введите название машины..."
                        variant="standard"
                        style={{"fontSize" : "14px"}} />
                </div>
            </div>
        </div>
    );
};

export default Filter;