import { TextField } from '@mui/material';
import React from 'react';
import styles from './filter.module.css'

const Filter = ({ sort, sortHandle }) => {

    const handleSelect = (e) => {
        // выбор option. e.target.value - это value выбранного option 
        sortHandle(e.target.value)
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