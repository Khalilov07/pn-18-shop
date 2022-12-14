import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './addcar.module.css'
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import postServices from '../../services/products'
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const AddCar = () => {

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState('');
    const [descr, setDescr] = useState('');
    const [img, setImg] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const addPost = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            price,
            descr,
            img
        };
        postServices
            .createPost(newPost)
            .then((response) => {
                setTitle("");
                setPrice("");
                setImg("");
                setOpen(true);
            })
            .catch((err) => console.log(err));
    };



    return (
        <div className={styles.wrapper}>
            <Breadcrumbs title={"Add car"} />
            <form className={styles.form} onSubmit={addPost}>
                <TextField
                    className={styles.input}
                    label="Название машины"
                    variant="outlined"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    className={styles.input}
                    label="Цена"
                    variant="outlined"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                    className={styles.input}
                    label="Описание"
                    variant="outlined"
                    type="text"
                    value={descr}
                    onChange={(e) => setDescr(e.target.value)}
                />
                <TextField
                    className={styles.input}
                    label="Фото"
                    variant="outlined"
                    type="text"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
                <Button type="submit" className={styles.button} variant="contained">
                    Отправить
                </Button>
            </form>
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Машина добавлена в салон"

                />
            </div>
        </div>
    );
};

export default AddCar;