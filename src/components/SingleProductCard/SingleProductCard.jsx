import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './singleproductcard.module.css'
import { Route, useNavigate, useParams } from 'react-router-dom';
import postService from '../../services/products'
import { Button, fabClasses, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import addToCart from '../../redux/productSlice'

const SingleProductCard = ({ img }) => {

    const { id } = useParams() // id поста из db.json
    const [product, setProduct] = useState({})
    const [newTitle, setNewTitle] = useState('')
    const [newPrice, setNewPrice] = useState(0)
    const [newDescr, setNewDescr] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isAdmin, currentUser } = useSelector(state => state.user)

    useEffect(() => {
        postService.getProduct(id).then(res => setProduct(res.data))
    }, [])

    console.log(product);

    const handleEditMode = () => {
        setEditMode(true)
        setNewTitle(product.title)
        setNewDescr(product.descr)
        setNewPrice(product.price)
    }

    const changePost = (e) => {
        axios.patch(`http://localhost:3002/posts/${id}`, {
            title: newTitle,
            descr: newDescr,
            price: newPrice,
        }).then(res => {
            setEditMode(false)
            setProduct(res.data)
        })
    }

    const deletePost = (e) => {
        e.preventDefault()
        axios
            .delete(`http://localhost:3002/posts/${id}`)
            .then(res => {

                console.log(res.data);
            })
    }

    const handleAdd = (type) => {
        if (type == "plus") {
            setQuantity(quantity + 1) // quantity++, quantity = quantity + 1
        } else {
            quantity > 1 && setQuantity(quantity - 1)
        }
    }

    const handleAddProduct = () => {
        dispatch(addToCart({ ...product, quantity }))
    }

    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <div className={styles["img-wrapper"]}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>Название: {product.title}</h1>
                    <p className={styles.price}>Цена: {product.price}</p>
                    <p className={styles.descr}>Описание: {product.descr}</p>
                    <div className={styles["control-wrapper"]}>
                        {editMode ? (
                            <>
                                <TextField
                                    variant='outlined'
                                    type='text'
                                    label="Name"
                                    value={newTitle}
                                    onChange={e => setNewTitle(e.target.value)}
                                />
                                <TextField
                                    variant='outlined'
                                    type='text'
                                    label="Descr"
                                    value={newDescr}
                                    onChange={e => setNewDescr(e.target.value)}
                                />
                                <TextField
                                    variant='outlined'
                                    type='text'
                                    label="Price"
                                    value={newPrice}
                                    onChange={e => setNewPrice(e.target.value)}
                                />
                                <Button variant="contained" color="success" onClick={e => changePost(e)}>Сохранить</Button>
                            </>
                        ) : (
                            <>
                                {isAdmin && <div className='button-wrapper'>
                                    <Button variant="contained" color="success" onClick={handleEditMode}>Редактировать</Button>
                                    <Link to='/catalog'><Button variant="contained" color="error" onClick={deletePost}>Удалить</Button></Link>
                                </div>}
                            </>
                        )}
                    </div>
                    {currentUser ?
                        <>
                            <button onClick={handleAddProduct} className={styles.add}>
                                Добавить машину в корзину
                            </button>
                        </>
                        :
                        <>
                            <p>чтобы произвести пердоплату, надо зарегистрироваться или же авторизоватся</p>
                            <Link to='/account'>перейти на страницу, регистрации и авторизации</Link>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;